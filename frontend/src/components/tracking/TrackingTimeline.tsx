import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface TimelineEvent {
  date: string;
  location: string;
  status: string;
  completed: boolean;
}

interface TrackingTimelineProps {
  history: TimelineEvent[];
}

export default function TrackingTimeline({ history }: TrackingTimelineProps) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Tracking History</h3>
      <div className="space-y-4">
        {history.map((event, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              {event.completed ? (
                <CheckCircle2 className="h-6 w-6 text-green-500" />
              ) : (
                <Circle className="h-6 w-6 text-gray-400" />
              )}
            </div>
            <div className="flex-1">
              <p className="font-semibold">{event.status}</p>
              <p className="text-sm text-gray-600">{event.location}</p>
              <p className="text-sm text-gray-500">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}