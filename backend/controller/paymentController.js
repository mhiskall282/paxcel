const Payment = require("./../models/payment");


// create payment
const createPayment = async(req,resp) =>{
    // validate payment
    const {amount,details,method,shipmentDetails} = req.body;
    // Validate request body
    if(!amount || !details || !method || !shipmentDetails){
        resp.status(400).json({error:"All fields are required"})
    }

    // Paymnent Based on card
    try{
        let payment;
        if(method == "card"){
            payment = await Payment.create({
                shipment_id: shipmentDetails.data.id,
                owner_id:shipmentDetails.data.sender,
                package_id:shipmentDetails.package.id,
                paymentMethod:method,
                cardNumber:details.number,
                cvc:details.cvc,
                expiryDate:details.expiry_date,
                status:"paid",
                amount:amount
            });
            

        }else if(method == "crypto"){
            payment = await Payment.create({
                shipment_id: shipmentDetails.data.id,
                owner_id:shipmentDetails.data.sender,
                package_id:shipmentDetails.package.id,
                paymentMethod:method,
                cryptoType:details.symbol,
                status:"paid",
                amount:details.amount
            })

            
        }else if(method == "bank"){
            payment = await Payment.create({
                shipment_id: shipmentDetails.data.id,
                owner_id:shipmentDetails.data.sender,
                package_id:shipmentDetails.package.id,
                paymentMethod:method,
                status:"paid",
                amount:amount
            })

            
        }
        return resp.status(201).json({success:true,data:payment})

    }catch(error){
        console.error(error)
        return resp.status(500).json({error:error})
    }

}

module.exports = {
    createPayment
}
