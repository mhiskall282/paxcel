// controller/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const validEmail  = require('../utils/validators');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }
  
  if (!validEmail(email)) {
    return res.status(400).json({ email: 'Please provide a valid email address.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      const field = error.errors[0].path;
      res.status(409).json({ error: `${field} already exists` });
    } else {
      res.status(500).json({ error: 'An error occurred while registering the user' });
    }
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    
    res.status(200).json({ 
      token,
      user:{
        id:user["id"],
        email:user["email"],
        role:user["role"]
      } 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while logging in the user' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
