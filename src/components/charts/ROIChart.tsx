import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Month 1', traditional: 100, withAI: 100 },
  { month: 'Month 2', traditional: 105, withAI: 150 },
  { month: 'Month 3', traditional: 110, withAI: 250 },
  { month: 'Month 4', traditional: 115, withAI: 400 },
  { month: 'Month 5', traditional: 120, withAI: 600 },
  { month: 'Month 6', traditional: 125, withAI: 850 },
  { month: 'Month 7', traditional: 130, withAI: 1100 },
  { month: 'Month 8', traditional: 135, withAI: 1400 },
  { month: 'Month 9', traditional: 140, withAI: 1700 },
  { month: 'Month 10', traditional: 145, withAI: 2000 },
  { month: 'Month 11', traditional: 150, withAI: 2300 },
  { month: 'Month 12', traditional: 155, withAI: 2600 }
];

export default function ROIChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Comparison: Traditional vs AI-Powered Business</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip 
            formatter={(value, name) => [
              `${value}%`, 
              name === 'traditional' ? 'Traditional Business' : 'AI-Powered Business'
            ]}
          />
          <Line 
            type="monotone" 
            dataKey="traditional" 
            stroke="#ef4444" 
            strokeWidth={3}
            name="traditional"
          />
          <Line 
            type="monotone" 
            dataKey="withAI" 
            stroke="#10b981" 
            strokeWidth={3}
            name="withAI"
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-2">
        Average ROI growth over 12 months based on 500+ Malaysian business transformations
      </p>
    </div>
  );
}