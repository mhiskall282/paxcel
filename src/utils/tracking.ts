export interface TrackingEvent {
    timestamp: string;
    location: string;
    status: string;
    details?: string;
    weatherImpact?: {
      temperature: number;
      weather: string;
      impact: 'none' | 'low' | 'medium' | 'high';
      delay: number;
    };
  }
  
  export interface ShipmentStatus {
    trackingNumber: string;
    status: 'pending' | 'in_transit' | 'delivered' | 'exception';
    currentLocation: string;
    estimatedDelivery: string;
    events: TrackingEvent[];
    progress: number;
  }
  
  export const calculateDeliveryProgress = (events: TrackingEvent[]): number => {
    const totalSteps = 5; // pickup -> customs -> transit -> destination -> delivery
    const completedSteps = events.filter(e => e.status !== 'exception').length;
    return Math.min((completedSteps / totalSteps) * 100, 100);
  };
  
  export const getEstimatedDelay = (events: TrackingEvent[]): number => {
    return events.reduce((total, event) => {
      return total + (event.weatherImpact?.delay || 0);
    }, 0);
  };