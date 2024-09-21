require("dotenv").config();
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const { userModel } = require("../model/user.model");

const key = process.env.SECRET_KEY;

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (!user || !(await argon2.verify(user.password, password))) {
      return res.status(404).json({ message: "User not found" });
    }
    const token = jwt.sign(
      {
        userId: user._id,
        name: user.name,
      },
      key
    );
    res.status(200).json({ authenticatetoken: `Barear ${token}`, role: user.role, userId : user._id });
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { loginUser };
