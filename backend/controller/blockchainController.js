const { where, Op } = require("sequelize");
const Blockchain = require("./../models/blockchain");
const shipment = require("./../models/shipment");

const createBlockchain = async (req, resp) => {
  const { trackingNumber, transactionHash, blockNumber } = req.body;
  if (!trackingNumber || !transactionHash || !blockNumber) {
    return resp.status(400).json({ error: "All fields are required" });
  }

  // Ensure tracking number exists in shipments
  try {
    const shipmentTrackNumber = await shipment.findOne({
      where: { trackingNumber: trackingNumber },
    });
    if (!shipmentTrackNumber) {
      return resp
        .status(404)
        .json({ error: "Shipment tracking number does not exist" });
    }
  } catch (error) {
    return resp
      .status(500)
      .json({ error: "Failed to fetch shipment tracking number" });
  }

  // Ensure block number is unique
  try {
    const existingBlock = await Blockchain.findOne({
      where: { blockNumber: blockNumber },
    });
    if (existingBlock) {
      return resp.status(409).json({ error: "Block number already exists" }); // 409 Conflict
    }
  } catch (error) {
    return resp
      .status(500)
      .json({ error: "Failed to check block number uniqueness" });
  }

  // Create new blockchain record
  try {
    const block = await Blockchain.create({
      blockNumber: blockNumber,
      trackingNumber: trackingNumber,
      transactionHash: transactionHash,
    });
    return resp.status(201).json({ success: true, data: block });
  } catch (error) {
    return resp.status(500).json({ error: "Failed to create block" });
  }
};


const verifyBlockchain = async (req, resp) => {
  const { trackingNumber, transactionHash } = req.body;
  if (!trackingNumber || !transactionHash) {
    return resp.status(400).json({ error: "All fields are required" });
  }

  try {
    const block = await Blockchain.findOne({
      where: {
        [Op.and]: [
          { trackingNumber: trackingNumber },
          { transactionHash: transactionHash }
        ],
      },
    });
    if (block !== null) {
      const data = {
        verified: true,
        blockNumber: block.blockNumber,
        timestamp: block.updatedAt,
      };
      return resp.status(200).json(data); // Use 200 for successful verification
    } else {
      return resp.status(404).json({ error: "Block not found" }); // Use 404 for not found
    }
  } catch (error) {
    return resp.status(500).json({ error: "Failed to verify block" });
  }
};

module.exports = { createBlockchain, verifyBlockchain };
