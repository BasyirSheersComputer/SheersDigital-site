import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { task: 'Data Entry', manual: 480, automated: 5 },
  { task: 'Customer Service', manual: 360, automated: 15 },
  { task: 'Report Generation', manual: 240, automated: 10 },
  { task: 'Invoice Processing', manual: 180, automated: 8 },
  { task: 'Lead Qualification', manual: 300, automated: 12 },
  { task: 'Inventory Management', manual: 420, automated: 20 }
];

export default function EfficiencyChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Time Savings: Manual vs Automated Processes</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="task" />
          <YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
          <Tooltip 
            formatter={(value, name) => [
              `${value} minutes`, 
              name === 'manual' ? 'Manual Process' : 'AI Automated'
            ]}
          />
          <Bar dataKey="manual" fill="#ef4444" name="manual" />
          <Bar dataKey="automated" fill="#10b981" name="automated" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-2">
        Average time per task - showing 85% reduction with AI automation
      </p>
    </div>
  );
}