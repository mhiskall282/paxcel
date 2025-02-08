export const apiEndpoints = {
    shipments: [
      {
        method: 'POST',
        endpoint: '/api/shipments',
        description: 'Create a new shipment',
        requestBody: {
          sender: {
            name: 'John Doe',
            address: '123 Main St',
            phone: '+1234567890'
          },
          receiver: {
            name: 'Jane Smith',
            address: '456 Oak Ave',
            phone: '+0987654321'
          },
          package: {
            weight: 5.5,
            dimensions: {
              length: 20,
              width: 15,
              height: 10
            },
            type: 'standard'
          }
        },
        response: {
          id: '123456',
          trackingNumber: 'PX123456789',
          status: 'created',
          estimatedDelivery: '2024-03-20'
        }
      },
      {
        method: 'GET',
        endpoint: '/api/shipments/{id}',
        description: 'Get shipment details',
        parameters: [
          {
            name: 'id',
            type: 'string',
            required: true,
            description: 'Shipment ID'
          }
        ],
        response: {
          id: '123456',
          trackingNumber: 'PX123456789',
          status: 'in_transit',
          currentLocation: {
            lat: 1.3521,
            lng: 103.8198,
            name: 'Singapore Hub'
          }
        }
      }
    ],
    tracking: [
      {
        method: 'GET',
        endpoint: '/api/tracking/{trackingNumber}',
        description: 'Get tracking information',
        parameters: [
          {
            name: 'trackingNumber',
            type: 'string',
            required: true,
            description: 'Shipment tracking number'
          }
        ],
        response: {
          trackingNumber: 'PX123456789',
          status: 'in_transit',
          events: [
            {
              timestamp: '2024-03-15T14:30:00Z',
              location: 'Singapore Hub',
              status: 'Package received'
            }
          ]
        }
      }
    ],
    blockchain: [
      {
        method: 'POST',
        endpoint: '/api/blockchain/verify',
        description: 'Verify shipment on blockchain',
        requestBody: {
          trackingNumber: 'PX123456789',
          transactionHash: '0x1234...'
        },
        response: {
          verified: true,
          blockNumber: 12345678,
          timestamp: '2024-03-15T14:30:00Z'
        }
      }
    ]
  };