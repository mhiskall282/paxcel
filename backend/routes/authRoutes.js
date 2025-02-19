const express = require("express")
const auth = require("../controller/AuthController");
const router = express.Router()

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register  a new user
 *     description: Register a new user
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
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
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
router.post("/auth/register",auth.registerUser)

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: login a new user
 *     description: login a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
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
router.post("/auth/login",auth.loginUser)

/**
 * @swagger
 * /api/refresh-token:
 *   post:
 *     summary: Refresh access token
 *     description: Generate a new access token using a refresh token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshtoken:
 *                 type: string
 *                 description: The refresh token
 *     responses:
 *       200:
 *         description: Access token refreshed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: The new access token
 *       401:
 *         description: Token is required
 *       403:
 *         description: Invalid refresh token
 */

router.post('/refresh-token', auth.refreshAccessToken);

module.exports = router;