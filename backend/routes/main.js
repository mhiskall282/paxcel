const express = require('express');
const user = require('../controller/userController');
const router = express.Router();
const auth = require('../middleware/auth');

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Fetch all users
 *     description: Returns a list of users
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/users',auth, user.getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Fetch a user by ID
 *     description: Creates a new user
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: User ID
 *       schema:
 *          type: string
 *     responses:
 *       201:
 *         description: Success
 */
router.get('/users/:id', user.getUserById);


/**
 * @swagger
 * /api/users/create:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 *       409:
 *         description: Conflict
 *       500:
 *         description: Internal Server Error
 */
router.post('/users/create', user.createUser);



/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     description: Updates a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/users/:id', user.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     description: Deletes a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.delete('/users/:id', user.deleteUser);

module.exports = router;
