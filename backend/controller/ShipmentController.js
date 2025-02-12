const User = require("./../models/users");
const Receiver = require("./../models/receiver");
const Shipment = require("./../models/shipment")

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
    estimateDelivery,
    notes,
  } = req.body;

  // Validate sender
  if (!senderName | !senderAddress) {
    return resp.status(400).json({ error: "Sender fields are required" });
  }

  // validate rec
  else if (!receiverName | !receiverAddress) {
    return resp.status(400).json({ error: "Receiver fields are required" });
  }

//   validate location
  else if (!from_location | !to_location){
    return resp.status(400).json({ error: "Location fields are required" });
  }
  // validate package
  else if (!weight | !deliveryType) {
    return resp.status(400).json({ error: "Package fields are required" });
  }

  //   make sure sender/user exists
  try {
    var sender = User.findAll({
      where: {
        name: senderName,
        address: senderAddress,
      },
    });
    if (sender != null) {
      console.log(sender);
    } else {
      resp.status(401).json("Sender detailers not found");
    }
  } catch (error) {
    resp
      .status(500)
      .json({ error: "An error occurred while findin the sender" });
  }

  //   make sure sender/user exists
  try {
    var receiver = Receiver.findAll({
      where: {
        name: receiverName,
        address: receiverAddress,
      },
    });
    if (receiver != null) {
    //   console.log(receiver);
    } else {
      resp.status(401).json("Receiver detailers not found");
    }
  } catch (error) {
    resp
      .status(500)
      .json({ error: "An error occurred while finding the Receiver" });
  }

//   create shipment
  try{
    const shipment = await Shipment.create({
        sender:sender,
        receiver:receiver,
        from_location: location_from,
        to_location:location_to,
        estimateDelivery:new Date()
    });
    resp.status(201).json({success:true,data:shipment})
  }catch(error){
    resp.status(401).json({error:`Failed to create shipment ${error}`})
  }
};

module.exports = createShipment;
