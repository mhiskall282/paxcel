const express = require("express");
const router = express.Router();
const receiverController = require("./../controller/receiverController");
const auth = require("./../middleware/auth")


/**
 * @swagger
 * /api/receiver/create:
 *   post:
 *     summary: Create a  new receiver
 *     description: Register a new Receiver
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
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
router.post("/receiver/create",auth,receiverController.createReceiver);

/**
 * @swagger
 * /api/receiver:
 *   get:
 *     summary: Find all receivers
 *     
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
router.get("/receiver",auth,receiverController.getAllReceiver);

/**
 * @swagger
 * /api/receiver/{id}:
 *   get:
 *     summary: Find all receivers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
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
router.get("/receiver/:id",auth,receiverController.getReceiverById);

module.exports = router;