export interface Parcel {
  id: string;
  trackingNumber: string;
  sender: {
    name: string;
    address: string;
  };
  receiver: {
    name: string;
    address: string;
  };
  status: 'pending' | 'in_transit' | 'delivered';
  weight: number;
  deliveryType: 'air' | 'sea' | 'road';
  transactionId: string;
  estimatedDelivery: string;
  history: Array<{
    timestamp: string;
    location: string;
    status: string;
    transactionId: string;
  }>;
}

export interface User {
  username: string;
  isAuthenticated: boolean;
  role: 'admin' | 'user';
}