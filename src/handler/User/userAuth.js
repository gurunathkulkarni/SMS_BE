const userModel = require("../../models/user.module");

exports.getUserDetails = async (req, res) => {
  try {
    res.send("user data Gurunath");
  } catch (err) {
    res.send(err);
  }
};

exports.createUser = async (req, res) => {
    
}