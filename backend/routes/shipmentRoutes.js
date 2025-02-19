const express = require("express")
const router = express.Router();
const shipment = require("../controller/ShipmentController.js");
const auth = require('../middleware/auth');

/**
 * @swagger
 * /api/shipments:
 *   get:
 *     summary: Fetch all shipment
 *     description: Returns a list of shipment
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/shipments', shipment.getAllShipments);

/**
 * @swagger
 * /api/shipments/{id}:
 *   get:
 *     summary: Fetch a shipments by ID
 *     description: Fetch a shipments by ID
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: shipment ID
 *       schema:
 *          type: string
 *     responses:
 *       201:
 *         description: Success
 */
router.get('/shipments/:id', shipment.getShipmentById);

/**
 * @swagger
 * /api/tracking/{track_no}:
 *   get:
 *     summary: Fetch a shipments by track_no
 *     description: Fetch a shipments by track_no
 *     parameters:
 *     - in: path
 *       name: track_no
 *       required: true
 *       description: shipments trackin number
 *       schema:
 *          type: string
 *     responses:
 *       201:
 *         description: Success
 */
router.get('/tracking/:track_no', shipment.getShipmentByTransId);

/**
 * @swagger
 * /api/shipment/create:
 *   post:
 *      summary: Shipments of a user
 *      description: Create Shipments of users
 *      requestBody:
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties: 
 *                  senderName: 
 *                   type: string
 *                  senderAddress: 
 *                   type: string
 *                  receiverName:
 *                   type: string
 *                  receiverAddress:
 *                   type: string
 *                  weight:
 *                   type: string
 *                  deliveryType:
 *                   type: string
 *                  estimatedDelivery:
 *                   type: string
 *      responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 *       409:
 *         description: Conflict
 *       500:
 *         description: Internal Server Error
 */
router.post("/shipment/create", shipment.createShipment)


module.exports = router; 