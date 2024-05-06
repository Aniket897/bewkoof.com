const userModel = require("../models/user.model");

exports.addToWishlist = async (req, resp, next) => {
  try {
    const { id } = req.params;
    const { user } = req;

    const currentUser = await userModel.findById(user);
    const isAlredyPresent = currentUser.whishlist.some(
      (item) => item._id == id
    );

    if (isAlredyPresent) {
      return resp.status(400).json({
        message: "Alredy in whishlist",
      });
    }

    currentUser.whishlist.push(id);
    await currentUser.save();

    resp.status(200).json({
      message: "Item added to wishlist",
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

exports.getWishlist = async (req, resp, next) => {
  try {
    const { user } = req;

    const currentUser = await userModel.findById(user).populate({
      path: "whishlist",
    });

    resp.status(200).json({
      wishlist: currentUser.whishlist,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

exports.removeFormCart = async (req, resp, next) => {
  try {
    const { id } = req.params;
    const { user } = req;

    const currentUser = await userModel.findById(user);
    const updatedCart = currentUser.cart.filter((item) => item._id !== id);
    currentUser.cart = updatedCart;

    await currentUser.save();

    resp.status(200).json({
      message: "Item removed from cart",
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
