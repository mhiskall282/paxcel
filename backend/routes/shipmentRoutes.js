const express = require("express")
const router = express.Router();
const shipment = require("../controller/ShipmentController.js");
const auth = require('../middleware/auth');

/**
 * @swagger
 * /api/shipments:
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
 *                  senderPhone: 
 *                   type: string
 *                  receiverName:
 *                   type: string
 *                  receiverAddress:
 *                   type: string
 *                  receiverPhone: 
 *                   type: string
 *                  weight:
 *                   type: string
 *                  deliveryType:
 *                   type: string
 *                  notes:
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
router.post("/shipments", shipment)

module.exports = router; 