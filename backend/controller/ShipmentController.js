const User = require("./../models/users");
const Receiver = require("./../models/receiver");
const Shipment = require("./../models/shipment");
const { where, Op } = require("sequelize");
const { validate: isUuid } = require('uuid');
const Location = require("./../models/location");
const Package = require("../models/package");

const createShipment = async (req, resp) => {
  const {
    senderName,
    senderAddress,
    receiverName,
    receiverAddress,
    weight,
    deliveryType,
    estimatedDelivery,
    notes,
  } = req.body;

  // Validate sender
  if (!senderName || !senderAddress) {
    return resp.status(400).json({ sender: "Sender fields are required" });
  }

  // Validate receiver
  if (!receiverName || !receiverAddress ) {
    return resp.status(400).json({ receiver: "Receiver fields are required" });
  }

  // Validate package
  if (!weight || !deliveryType) {
    return resp.status(400).json({ package: "Package fields are required" });
  }

  // Make sure sender exists
  try {
    var sender = await User.findAll({
      where: {
        [Op.and]: [
          { name: senderName },
          { address: senderAddress }
        ]
      },
    });

    if (!sender.length) {
      return resp.status(401).json("Sender details not found");
    }
    
  } catch (error) {
    return resp.status(500).json({ error: "An error occurred while finding the sender" });
  }

  // Create shipment
  try {
    
    let date = new Date();
    date.setDate(date.getDate() + 1);

    // create a Shipment
    const shipment = await Shipment.create({
      sender: sender[0].id,
      receiverName: receiverName, 
      from_location: senderAddress,
      to_location: receiverAddress,
      deliveryType:deliveryType,
      estimatedDelivery:date, // 2 days from today 
    });

    
    // create a package
    const package = await Package.create({
      name:"",
      weight: weight
    });

    return resp.status(201).json({ success: true, data: shipment,package });
  } catch (error) {
    return resp.status(500).json({ error: `Failed to create shipment: ${error.message}` });
  }
};

try{
  

}catch(error){
  return resp.status(500).json({error:`Failed to create package: ${error.message}`});
}

const getAllShipments = async (req, resp) => {
  try {
    const shipments = await Shipment.findAll();
    return resp.status(200).json(shipments);
  } catch (error) {
    return resp.status(500).json({ error: "Failed to fetch shipments " });
    console.error("Error: ", error);
  }
};

const getShipmentById = async (req, resp) => {
  const id = parseInt(req.params.id);

  try {
    const shipment = await Shipment.findByPk(id);
    if (shipment) {
      try {
        var currentlocation = await Location.findOne({
          where:{shipment_id:shipment.id}
        })
        console.log(currentlocation)
        if(currentlocation == null){
          currentlocation = [];
        }

      } catch (error) {
        return resp.status(404).json({error:"shipment_id not found"})
      }
      const data = {
        id:shipment.id,
        trackingNumber:shipment.trackingNumber,
        status:shipment.status,
        currentlocation:currentlocation,
      }
      return resp.status(200).json(data);
    
    }else{  
      return resp.status(404).json({error:"shipments not found"});
    }
  } catch (error) {
    console.error("Error: ", error);
    return resp.status(500).json({ error: "Failed to fetch shipments" });
  }
};



const getShipmentByTransId = async (req, resp) => {
  const track_no = req.params.track_no;
 
  if (!track_no || !isUuid(track_no)) {
    return resp.status(400).json({ error: "Valid tracking number detail needed" });
  }
  try {
    console.log(`Searching for tracking number: ${track_no}`);
    const shipment = await Shipment.findOne({
      where:{trackingNumber:track_no}
    });
    console.log(`Query result: ${JSON.stringify(shipment)}`);
    if (shipment) {
      try {
        var currentlocation = await Location.findOne({
          where:{shipment_id:shipment.id}
        })
        console.log(currentlocation)
        if(currentlocation == null){
          currentlocation = [];
        }

      } catch (error) {
        return resp.status(404).json({error:"shipment_id not found"})
      }
      const data = {
        id:shipment.id,
        trackingNumber:shipment.trackingNumber,
        status:shipment.status,
        estimatedDelivery:shipment.estimatedDelivery,
        events:currentlocation,
      }
      return resp.status(200).json(data);
    } else {
      console.error(`Tracking number not found: ${track_no}`);
      return resp.status(404).json({ error: "Shipment not found" });
    }
  } catch (error) {
    console.error("Error: ", error);
    return resp.status(500).json({ error: "Failed to fetch shipment" });
  }
};



module.exports = { createShipment, getAllShipments,getShipmentById,getShipmentByTransId };
