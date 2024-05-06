const jwt = require("jsonwebtoken");

exports.verifyToken = async (req, resp, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
      return resp.status(400).json({
        message: "Unauthorized",
      });
    }

    const payload = jwt.verify(token, process.env.SECRET);

    req.user = payload.id;
    next();
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
