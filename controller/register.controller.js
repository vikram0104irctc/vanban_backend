const argon2 = require("argon2");
const { userModel } = require("../model/user.model");

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let hashPassword = await argon2.hash(password);
    userModel.create({
      name,
      email,
      password: hashPassword,
      role,
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (e) {
    res.status(500).json({ message: "Error registering user" });
  }
};

module.exports = { registerUser };
