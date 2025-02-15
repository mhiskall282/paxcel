// CRUD OPERATIONS

const Receiver = require("./../models/Receiver")

// CREATE
const createReceiver = async(req,resp) => {
    const {name,address,phone} = req.body;
    if(!name | !address |!phone){
        console.error("Error: All fields are required");
        return resp.status(400).json("All fields are required");
    }
    try{
        // const date = new Date()
        const rec = await Receiver.create({
            name:name, address:address,phone:phone
        })
        resp.status(201).json({success:true,data:rec})
    }catch(error){
        console.error("Error: create receiver")
        resp.status(500).json(error)
    }
}

const getAllReceiver = async(req,resp) => {
    try{
        const rec = await Receiver.findAll();
        resp.status(201).json({success:true,data:rec})
    }catch(error){
        console.error("Error: get all receivers data")
        resp.status(500).json(error)
    }
}

const getReceiverById = async(req,resp) => {
    const id = parseInt(req.params.id)
    try{
        const rec = await Receiver.findByPk(id);
        if(rec === null){
            return resp.status(200).json({success:true,data:[]})
        }
        resp.status(201).json({success:true,data:rec})
    }catch(error){
        console.error("Error: get all receivers data")
        resp.status(500).json(error)
    }
}
module.exports = {
    createReceiver,
    getAllReceiver,
    getReceiverById
}