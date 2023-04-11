const userModel = require("../../models/user.module");

exports.getAllUserDetails = async (req, res) => {
  try {
    const allUserData = await userModel.find();
    res.send(allUserData);
  } catch (err) {
    res.send({ err });
  }
};

exports.createUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      gender,
      phoneNumber,
      password,
      userType,
      role,
    } = req.body;
    const obj = {
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      phoneNumber: phoneNumber,
      password: password,
      userType: userType,
      role: role,
    };
    await userModel.create(obj);

    res.send({
      message: "created Successfully",
      status: true,
      status_code: 200,
    });
  } catch (err) {
    res.send({ err });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const userData = await userModel.findById(id);

    res.send(userData);
  } catch (err) {
    res.send({ err });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.deleteOne({ _id: id });
    return { message: "success", status: true };
  } catch (err) {
    return { err };
  }
};

exports.updateUser = async (req, res) => {
  try {
    const {
      id,
      firstname,
      lastname,
      gender,
      phoneNumber,
      password,
      userType,
      role,
    } = req.body;

    const isUserPresent = await userModel.findById(id);
    console.log("isUserPresent", isUserPresent);
    if (!isUserPresent) {
      return { message: "user not found" };
    }
    if (firstname) isUserPresent.firstname = firstname;
    if (lastname) isUserPresent.lastname = lastname;
    if (gender) isUserPresent.gender = gender;
    if (phoneNumber) isUserPresent.phoneNumber = phoneNumber;
    if (userType) isUserPresent.userType = userType;
    if (role) isUserPresent.role = role;

    await isUserPresent.save();
    return { message: "success", status: true };
  } catch (err) {
    console.log("CATCH", err);
    return { message: "failed", status: false };
  }
};
