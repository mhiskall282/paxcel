const express = require("express")
const router = express.Router()
const blockchainController = require("./../controller/blockchainController")
const auth = require("./../middleware/auth")

/**
 * @swagger
 * /api/verify/blockchain:
 *   post:
 *     summary: Verify blockchain
 *     requestBody:
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties: 
 *                  trackingNumber: 
 *                   type: string
 *                  transactionHash: 
 *                   type: string
 *     responses:
 *       201:
 *         description: Success
 */
router.post('/verify/blockchain',auth, blockchainController.verifyBlockchain);

/**
 * @swagger
 * /api/blockchain/create:
 *   post:
 *     summary: Create a blockchain
 *     requestBody:
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties: 
 *                  trackingNumber: 
 *                   type: string
 *                  transactionHash: 
 *                   type: string
 *                  blockNumber:
 *                   type: string
 *     responses:
 *       201:
 *         description: Success
 */
router.post('/blockchain/create',auth, blockchainController.createBlockchain);

module.exports = router;