const createShipment = async (req,resp) => {
    // // const {
    // //     send_name, sender_address, sender_phone,
    // //     receiver_name, receiver_address, receiver_phone,
    // //     package_weight, dimensions, type
    // // }
    const {senderName,senderAddress,receiverName,receiverAddress,weight,deliveryType,notes} = req.body;

    // Validate sender
    if(!senderName | !senderAddress ){
        return res.status(400).json({error:"Sender fields are required"})
    }

    // validate rec
    else if(!receiverName | !receiverAddress){
        return res.status(400).json({error:"Receiver fields are required"})
    }

    // validate package
    else if(!weight | !deliveryType ){
        return res.status(400).json({error:"Package fields are required"})
    }

    try{
        resp.status(200).json({success:"Success"})
    }catch (error) {
        resp.status(500).json({ error: 'An error occurred while deleting the user' });
    }
};

module.exports = createShipment;