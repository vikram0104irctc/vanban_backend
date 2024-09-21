require("dotenv").config();
const jwt = require("jsonwebtoken");

const key = process.env.SECRET_KEY;

const authMiddleware = (req, res, next) => {
  const token = req.headers.authenticateToken?.split(" ")[1];
  try {
    const verification = jwt.verify(token, key);
    if (!token || !verification) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    next();
  } catch (e) {
    res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = { authMiddleware };
