## NOTES FOR BACKEND

### SEND PAXCEL
- REGISTERED USER
    - SENDER NAME 
    - SEDNER ADDRESS (FROM_LOCATION)

    - RECEIVER NAME
    - RECEIVER ADDRESS (TO_LOCATION)

    - WEIGHT
    - DELIVERYTYPE 
    - NOTES

- CREATE PACKAGE AND CREATE SHIPMENT
- SAVE ID OF SHIPMENT IN A STATE 
- SAVE IT IN PAYMENTS WHEN USER PAYS


### MODIFICATION MADE
- [X] ADDED DELIVERYTYPE TO SHIPMENT TABLE AND MIGRATION DATA
- [X] ADDED DELIVERYTYPE TO SHIPMENT CONTROLLER

## data
{
  amount: 1200,
  method: 'crypto',
  shipmentDetails: {
    senderName: 'test',
    senderAddress: 'test',
    receiverName: 'Mouse',
    receiverAddress: 'Kumasi',
    weight: '48',
    deliveryType: 'air',
    notes: ''
  }
}

{
  amount: 1200,
  method: 'card',
  shipmentDetails: {
    senderName: 'test',
    senderAddress: 'test',
    receiverName: 'Mouse',
    receiverAddress: 'Kumasi',
    weight: '48',
    deliveryType: 'air',
    notes: ''
  }
}

{
  amount: 1200,
  method: 'bank',
  shipmentDetails: {
    senderName: 'test',
    senderAddress: 'test',
    receiverName: 'Mouse',
    receiverAddress: 'Kumasi',
    weight: '48',
    deliveryType: 'air',
    notes: ''
  }
}

{
  amount: 1200,
  method: 'crypto',
  details: { symbol: 'BTC', amount: 0.0276 },
  shipmentDetails: {
    success: true,
    data: {
      trackingNumber: 'f3e9f6e0-ee47-11ef-a6d9-6388cc32fc07',
      status: 'created',
      id: 1,
      sender: 6,
      receiverName: 'Mouse',
      from_location: 'user',
      to_location: 'Kumasi',
      deliveryType: 'air',
      estimatedDelivery: '2025-02-19T22:30:27.405Z',
      updatedAt: '2025-02-18T22:30:27.408Z',
      createdAt: '2025-02-18T22:30:27.408Z'
    },
    package: {
      id: 1,
      name: '',
      weight: '48',
      updatedAt: '2025-02-18T22:30:27.530Z',
      createdAt: '2025-02-18T22:30:27.530Z'
    }
  }
}