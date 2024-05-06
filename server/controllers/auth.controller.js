const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

exports.Register = async (req, resp, next) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return resp.status(400).json({
        message: "all fields are required",
      });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return resp.status(400).json({
        message: "user already exist",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      email,
      username,
      password: hashedPassword,
    });

    resp.status(200).json({
      message: "user registeration successfull",
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.Login = async (req, resp, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return resp.status(400).json({
        message: "all fields are required",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return resp.status(400).json({
        message: "wrong credentials from1",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return resp.status(400).json({
        message: "wrong credentials from2",
      });
    }

    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, process.env.SECRET);

    resp.status(200).json({
      message: "login successfull",
      token,
      user: {
        email,
        username: user.username,
      },
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
    });
  }
};
