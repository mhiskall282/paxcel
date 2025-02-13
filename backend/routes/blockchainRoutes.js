const express = require("express")
const router = express.Router()
const blockchainController = require("./../controller/blockchainController")

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
router.post('/verify/blockchain', blockchainController.verifyBlockchain);

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
router.post('/blockchain/create', blockchainController.createBlockchain);

module.exports = router;