import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Labor Costs Saved', value: 60, color: '#10b981' },
  { name: 'Infrastructure Savings', value: 25, color: '#3b82f6' },
  { name: 'Error Reduction Savings', value: 10, color: '#f59e0b' },
  { name: 'Remaining Costs', value: 5, color: '#ef4444' }
];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

export default function CostSavingsChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Reduction Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, 'Savings']} />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-2">
        Average cost reduction achieved through digital transformation
      </p>
    </div>
  );
}