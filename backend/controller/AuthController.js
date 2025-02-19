// controller/userController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const validEmail = require("../utils/validators");

require("dotenv").config();
let refreshTokens = [];
// Generate tokens
const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};

const generateRefreshToken = (user) => {
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  return refreshToken;
};

const registerUser = async (req, res) => {
  const { name, email, password, address, phone } = req.body;

  if (!name || !email || !password | !address | !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!validEmail(email)) {
    return res
      .status(400)
      .json({ email: "Please provide a valid email address." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      address: address,
      phone: phone,
    });

    
    const accessToken = generateAccessToken({ id: newUser.id, email: newUser.email });
    const refreshToken = generateRefreshToken({ id: newUser.id, email: newUser.email });

    res.status(201).json({
      accessToken,
      refreshToken,
      user: {
        id: newUser["id"],
        email: newUser["email"],
        role: newUser["role"],
        address: newUser["address"],
      },
    });
    
  } catch (error) {
    console.error(error);
    if (error.name === "SequelizeUniqueConstraintError") {
      const field = error.errors[0].path;
      res.status(409).json({ error: `${field} already exists` });
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while registering the user" });
    }
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const accessToken = generateAccessToken({ id: user.id, email: user.email });
    const refreshToken = generateRefreshToken({
      id: user.id,
      email: user.email,
    });

    // const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    //   expiresIn: '1h',
    // });

    res.status(200).json({
      accessToken,
      refreshToken,
      user: {
        id: user["id"],
        email: user["email"],
        role: user["role"],
        address: user["address"],
      },
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while logging in the user" });
  }
};

// Refresh token endpoint
const refreshAccessToken = (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).json({ error: "Token is required" });
  }

  if (!refreshTokens.includes(token)) {
    return res.status(403).json({ error: "Invalid refresh token" });
  }

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid refresh token" });
    }

    const newAccessToken = generateAccessToken({ id: user.id, email: user.email });
    res.json({ accessToken: newAccessToken });
  });
};
module.exports = {
  registerUser,
  loginUser,
  refreshAccessToken,
  refreshTokens,
};
