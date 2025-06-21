import React from 'react';
import { AlertTriangle, Clock, DollarSign, Users } from 'lucide-react';

export default function ProblemAgitation() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Here's What Happens When You Don't Fix These Problems...
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every day you wait, these problems compound. Here's the brutal truth about what's happening to your business right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-red-900/50 border border-red-800 rounded-lg p-6 text-center">
            <div className="bg-red-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-red-200" size={32} />
            </div>
            <h3 className="text-xl font-bold text-red-200 mb-2">Revenue Loss</h3>
            <p className="text-red-300 text-sm">
              Companies lose an average of RM45,000 per month due to IT inefficiencies. That's RM540,000 per year.
            </p>
          </div>

          <div className="bg-orange-900/50 border border-orange-800 rounded-lg p-6 text-center">
            <div className="bg-orange-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-orange-200" size={32} />
            </div>
            <h3 className="text-xl font-bold text-orange-200 mb-2">Time Waste</h3>
            <p className="text-orange-300 text-sm">
              Your team spends 3.2 hours daily on manual tasks. That's 1,168 hours per year per employee.
            </p>
          </div>

          <div className="bg-yellow-900/50 border border-yellow-800 rounded-lg p-6 text-center">
            <div className="bg-yellow-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="text-yellow-200" size={32} />
            </div>
            <h3 className="text-xl font-bold text-yellow-200 mb-2">Security Risk</h3>
            <p className="text-yellow-300 text-sm">
              68% of KL businesses experienced a cyber attack in 2024. The average cost? RM284,000.
            </p>
          </div>

          <div className="bg-purple-900/50 border border-purple-800 rounded-lg p-6 text-center">
            <div className="bg-purple-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-purple-200" size={32} />
            </div>
            <h3 className="text-xl font-bold text-purple-200 mb-2">Staff Turnover</h3>
            <p className="text-purple-300 text-sm">
              Frustrated employees quit 3x faster when dealing with outdated systems. Replacement costs: RM35,000 per person.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-red-600/20 border border-red-500 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              The Brutal Math: You're Losing RM2,000+ Every Single Day
            </h3>
            <p className="text-red-300 text-lg leading-relaxed">
              While you're reading this, your competitors who fixed these problems are capturing market share, 
              hiring your best employees, and scaling faster than ever. The question isn't whether you can afford to fix this...
              <br/><br/>
              <span className="font-bold text-white">The question is: Can you afford NOT to?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}