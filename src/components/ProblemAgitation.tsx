import React from 'react';
import { AlertTriangle, Clock, DollarSign, Users, Trash2, TrendingDown } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function ProblemAgitation() {
  const { ref } = useIntersectionObserver({ sectionName: 'problem_agitation' });

  return (
    <section ref={ref} id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Here's What Happens When You Don't Fix Food Waste...
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every day you wait, you're literally throwing money in the trash. Here's the brutal truth about what food waste is doing to your restaurant right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-red-900/50 border border-red-800 rounded-lg p-6 text-center">
            <div className="bg-red-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-red-200" size={32} />
            </div>
            <h3 className="text-xl font-bold text-red-200 mb-2">Profit Loss</h3>
            <p className="text-red-300 text-sm">
              Restaurants lose an average of $50,000 annually to food waste. That's $137 per day going straight to the dumpster.
            </p>
          </div>

          <div className="bg-orange-900/50 border border-orange-800 rounded-lg p-6 text-center">
            <div className="bg-orange-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="text-orange-200" size={32} />
            </div>
            <h3 className="text-xl font-bold text-orange-200 mb-2">Food Waste</h3>
            <p className="text-orange-300 text-sm">
              30-40% of all food produced is wasted. Your restaurant is likely throwing away 1 in 3 meals you prepare.
            </p>
          </div>

          <div className="bg-yellow-900/50 border border-yellow-800 rounded-lg p-6 text-center">
            <div className="bg-yellow-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="text-yellow-200" size={32} />
            </div>
            <h3 className="text-xl font-bold text-yellow-200 mb-2">Inventory Issues</h3>
            <p className="text-yellow-300 text-sm">
              Poor forecasting leads to stockouts and overstocking. You're either disappointing customers or wasting money.
            </p>
          </div>

          <div className="bg-purple-900/50 border border-purple-800 rounded-lg p-6 text-center">
            <div className="bg-purple-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-purple-200" size={32} />
            </div>
            <h3 className="text-xl font-bold text-purple-200 mb-2">Staff Time Waste</h3>
            <p className="text-purple-300 text-sm">
              Manual waste tracking takes 2-3 hours daily. Your staff could be serving customers instead of filling out forms.
            </p>
          </div>

          <div className="bg-blue-900/50 border border-blue-800 rounded-lg p-6 text-center">
            <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="text-blue-200" size={32} />
            </div>
            <h3 className="text-xl font-bold text-blue-200 mb-2">Customer Satisfaction</h3>
            <p className="text-blue-300 text-sm">
              Stockouts mean disappointed customers. 60% won't return after a bad experience with unavailable menu items.
            </p>
          </div>

          <div className="bg-green-900/50 border border-green-800 rounded-lg p-6 text-center">
            <div className="bg-green-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-200" size={32} />
            </div>
            <h3 className="text-xl font-bold text-green-200 mb-2">Competition</h3>
            <p className="text-green-300 text-sm">
              While you waste money, competitors using AI are optimizing costs and stealing your customers with better prices.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-red-600/20 border border-red-500 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              The Brutal Math: You're Losing $137 Every Single Day
            </h3>
            <p className="text-red-300 text-lg leading-relaxed">
              While you're reading this, your competitors who fixed their waste problems are capturing market share, 
              offering better prices, and scaling faster than ever. The question isn't whether you can afford to fix this...
              <br/><br/>
              <span className="font-bold text-white">The question is: Can you afford NOT to?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}