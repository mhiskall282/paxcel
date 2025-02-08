import React from 'react';
import { Users, UserCheck, UserX, Shield } from 'lucide-react';

const stats = [
  {
    name: 'Total Users',
    value: '1,234',
    icon: Users,
    change: '+12%',
    changeType: 'increase'
  },
  {
    name: 'Active Users',
    value: '892',
    icon: UserCheck,
    change: '+5%',
    changeType: 'increase'
  },
  {
    name: 'Inactive Users',
    value: '342',
    icon: UserX,
    change: '-8%',
    changeType: 'decrease'
  },
  {
    name: 'Admin Users',
    value: '15',
    icon: Shield,
    change: '0%',
    changeType: 'neutral'
  }
];

export default function UserStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <Icon className="h-8 w-8 text-blue-900" />
              <span className={`text-sm font-medium ${
                stat.changeType === 'increase' ? 'text-green-600' :
                stat.changeType === 'decrease' ? 'text-red-600' :
                'text-gray-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm">{stat.name}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
}