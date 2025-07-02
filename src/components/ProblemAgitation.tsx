import React from 'react';
import { AlertTriangle, Clock, DollarSign, Users, TrendingDown, Shield, X, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import EfficiencyChart from './charts/EfficiencyChart';
import CostSavingsChart from './charts/CostSavingsChart';

export default function ProblemAgitation() {
  const { ref } = useIntersectionObserver({ sectionName: 'problem_agitation' });

  return (
    <section ref={ref} id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              The Brutal Truth: Why 73% of Malaysian Businesses Will 
              <span className="text-red-600"> FAIL in the Next 3 Years</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              While you're reading this, your competitors are already using AI to steal your customers, 
              automate your processes, and dominate your market. Here's what's happening right now...
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80" 
              alt="Business failure statistics and declining charts"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-3xl font-bold">73%</div>
              <div className="text-sm">Will Close by 2027</div>
            </div>
          </div>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <X className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-800">The "Manual Labor" Trap</h3>
            </div>
            <p className="text-red-700 mb-4">
              Your team spends 6+ hours daily on tasks that AI can do in 6 minutes. 
              That's RM50,000+ monthly in wasted salary costs.
            </p>
            <div className="bg-white rounded-lg p-3">
              <div className="text-2xl font-bold text-red-600">RM600K</div>
              <div className="text-sm text-red-600">Annual waste per employee</div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <TrendingDown className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-orange-800">The "Competitor Advantage" Problem</h3>
            </div>
            <p className="text-orange-700 mb-4">
              While you're stuck in 2020, smart businesses are using AI to serve customers 24/7, 
              predict market trends, and scale infinitely.
            </p>
            <div className="bg-white rounded-lg p-3">
              <div className="text-2xl font-bold text-orange-600">10X</div>
              <div className="text-sm text-orange-600">Competitor growth rate</div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-yellow-800">The "Time Poverty" Crisis</h3>
            </div>
            <p className="text-yellow-700 mb-4">
              You're working 80-hour weeks but making the same money as 5 years ago. 
              Meanwhile, automated businesses run themselves.
            </p>
            <div className="bg-white rounded-lg p-3">
              <div className="text-2xl font-bold text-yellow-600">80h</div>
              <div className="text-sm text-yellow-600">Weekly work hours</div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <EfficiencyChart />
          <CostSavingsChart />
        </div>

        {/* The Shocking Reality Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-center mb-20">
          <h3 className="text-3xl font-bold text-white mb-6">
            The Shocking Reality: You're Losing RM10,000 Every Single Day
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-400">RM3.6M</div>
              <div className="text-red-100">Annual revenue loss</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-400">85%</div>
              <div className="text-red-100">Customer acquisition cost increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-400">67%</div>
              <div className="text-red-100">Employee productivity decline</div>
            </div>
          </div>
          <p className="text-xl text-red-100 leading-relaxed">
            Every day you delay digital transformation, your competitors get stronger, your costs get higher, 
            and your market share shrinks. The question isn't whether you can afford to transform...
            <br/><br/>
            <span className="font-bold text-white text-2xl">The question is: Can you afford NOT to?</span>
          </p>
        </div>

        {/* Visual Comparison */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Business Today</h4>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&q=80" 
              alt="Stressed business owner working late"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <ul className="space-y-3">
              <li className="flex items-center text-red-600">
                <X size={16} className="mr-2" />
                <span>Manual processes eating profits</span>
              </li>
              <li className="flex items-center text-red-600">
                <X size={16} className="mr-2" />
                <span>Competitors stealing customers</span>
              </li>
              <li className="flex items-center text-red-600">
                <X size={16} className="mr-2" />
                <span>Working harder, earning less</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">After Digital Transformation</h4>
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop&q=80" 
              alt="Successful business team celebrating growth"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <ul className="space-y-3">
              <li className="flex items-center text-green-600">
                <CheckCircle size={16} className="mr-2" />
                <span>AI handles 85% of operations</span>
              </li>
              <li className="flex items-center text-green-600">
                <CheckCircle size={16} className="mr-2" />
                <span>Dominating your market</span>
              </li>
              <li className="flex items-center text-green-600">
                <CheckCircle size={16} className="mr-2" />
                <span>10X revenue, 4-day work weeks</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}