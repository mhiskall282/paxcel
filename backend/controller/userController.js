const User = require('../models/users');
const validEmail = require("../utils/EmailValidator")

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
};

const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the user' });
  }
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  // Validate input parameters
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  

  if (!validEmail(email)){
    return res.status(400).send({message: "Please provide a valid email address."});
  }

  try {
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      const field = error.errors[0].path;
      res.status(409).json({ error: `${field} already exists` });
    } else if (error.name === 'SequelizeValidationError') {
      res.status(400).json({ error: 'Validation error', details: error.errors });
    } else {
      res.status(500).json({ error: 'An error occurred while creating the user' });
    }
  }
};

const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  try {
    const [updated] = await User.update({ name, email }, { where: { id } });
    if (updated) {
      const updatedUser = await User.findByPk(id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the user' });
  }
};

const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const deleted = await User.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the user' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
