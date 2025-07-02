import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { quarter: 'Q1', revenue: 100, customers: 100, efficiency: 100 },
  { quarter: 'Q2', revenue: 180, customers: 150, efficiency: 140 },
  { quarter: 'Q3', revenue: 320, customers: 220, efficiency: 200 },
  { quarter: 'Q4', revenue: 580, customers: 350, efficiency: 280 },
  { quarter: 'Q5', revenue: 850, customers: 480, efficiency: 380 },
  { quarter: 'Q6', revenue: 1200, customers: 650, efficiency: 500 }
];

export default function GrowthChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Business Growth After Digital Transformation</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis />
          <Tooltip 
            formatter={(value, name) => [
              `${value}%`, 
              name === 'revenue' ? 'Revenue Growth' : 
              name === 'customers' ? 'Customer Growth' : 'Efficiency Gain'
            ]}
          />
          <Area 
            type="monotone" 
            dataKey="revenue" 
            stackId="1" 
            stroke="#8b5cf6" 
            fill="#8b5cf6" 
            fillOpacity={0.6}
            name="revenue"
          />
          <Area 
            type="monotone" 
            dataKey="customers" 
            stackId="2" 
            stroke="#06b6d4" 
            fill="#06b6d4" 
            fillOpacity={0.6}
            name="customers"
          />
          <Area 
            type="monotone" 
            dataKey="efficiency" 
            stackId="3" 
            stroke="#f59e0b" 
            fill="#f59e0b" 
            fillOpacity={0.6}
            name="efficiency"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-2">
        Typical growth trajectory for businesses after implementing our digital transformation solutions
      </p>
    </div>
  );
}