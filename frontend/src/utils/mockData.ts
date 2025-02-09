export const mockTrackingData = {
  trackingNumber: "PX123456789",
  status: "in_transit",
  currentLocation: "Port of Singapore",
  estimatedDelivery: "March 15, 2024",
  history: [
    {
      date: "March 10, 2024 14:30",
      location: "Port of Singapore",
      status: "Arrived at port facility",
      completed: true
    },
    {
      date: "March 8, 2024 09:15",
      location: "Hong Kong International Airport",
      status: "Departed facility",
      completed: true
    },
    {
      date: "March 7, 2024 18:45",
      location: "Hong Kong International Airport",
      status: "Cleared customs",
      completed: true
    },
    {
      date: "March 7, 2024 10:30",
      location: "Shenzhen Warehouse",
      status: "Package received",
      completed: true
    }
  ],
  transactionId: "0x1234...5678"
};

export const calculateShippingCost = (weight: number, type: 'air' | 'sea' | 'road'): number => {
  const baseRates = {
    air: 25,
    sea: 10,
    road: 15
  };

  const rate = baseRates[type];
  return weight * rate;
};