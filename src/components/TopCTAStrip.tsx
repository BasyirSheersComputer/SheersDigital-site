import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';

const TopCTAStrip = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showForm, setShowForm] = useState(false);

  if (!isVisible) return null;

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-3 py-3">
          <div className="flex items-center justify-between">
            <div 
              className="flex-1 min-w-0 cursor-pointer"
              onClick={() => setShowForm(true)}
            >
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-white flex-shrink-0" />
                <p className="ml-3 font-medium text-white truncate hover:underline">
                  <span className="md:hidden">New IT Security Workshop</span>
                  <span className="hidden md:inline">NEW 2025 IT Security Workshop Dates Announced: Find out if you're a fit</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="ml-3 flex-shrink-0 text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Reserve Your Spot: IT Security Workshop</h3>
            <p className="text-gray-600 mb-6">
              Join our exclusive workshop where we'll show you how to protect your business from cyber threats and reduce IT costs by up to 40%.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Work Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="you@company.com"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Reserve Your Spot
              </button>
            </form>
            
            <button
              onClick={() => setShowForm(false)}
              className="mt-4 w-full px-6 py-3 text-gray-600 hover:text-gray-800"
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TopCTAStrip;