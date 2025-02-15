const User = require("./../models/users");
const Receiver = require("./../models/receiver");
const Shipment = require("./../models/shipment");
const { where, Op } = require("sequelize");
const { validate: isUuid } = require('uuid');
const Location = require("./../models/location");

const createShipment = async (req, resp) => {
  const {
    senderName,
    senderAddress,
    receiverName,
    receiverAddress,
    from_location,
    to_location,
    weight,
    deliveryType,
    estimatedDelivery,
    notes,
  } = req.body;

  // Validate sender
  if (!senderName || !senderAddress) {
    return resp.status(400).json({ error: "Sender fields are required" });
  }

  // Validate receiver
  if (!receiverName || !receiverAddress) {
    return resp.status(400).json({ error: "Receiver fields are required" });
  }

  // Validate location
  if (!from_location || !to_location) {
    return resp.status(400).json({ error: "Location fields are required" });
  }

  // Validate package
  if (!weight || !deliveryType) {
    return resp.status(400).json({ error: "Package fields are required" });
  }

  // Validate estimated delivery
  

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

  // Make sure receiver exists
  try {
    var receiver = await Receiver.findAll({
      where: {
        [Op.and]: [
          { name: receiverName },
          { address: receiverAddress }
        ]
      },
    });

    if (!receiver.length) {
      return resp.status(401).json("Receiver details not found");
    }
  } catch (error) {
    return resp.status(500).json({ error: "An error occurred while finding the receiver" });
  }

  // Create shipment
  
  console.log(estimatedDelivery)
  try {
    
    let date = new Date();
    date.setDate(date.getDate() + 1);
    
    const shipment = await Shipment.create({
      sender: sender[0].id, // Assuming sender and receiver are single objects
      receiver: receiver[0].id, // Assuming sender and receiver are single objects
      from_location: from_location,
      to_location: to_location,
      weight: weight,
      deliveryType: deliveryType,
      estimatedDelivery:date,
      notes: notes, // Include notes if needed
    });
    return resp.status(201).json({ success: true, data: shipment });
  } catch (error) {
    return resp.status(500).json({ error: `Failed to create shipment: ${error.message}` });
  }
};


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
