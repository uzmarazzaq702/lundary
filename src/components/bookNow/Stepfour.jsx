import React, { useState } from 'react';
import { useOrder } from '../../OrderContext';
import OrderSummaryCard from './OrderSummaryCard';

const Stepfour = ({ onBack, onNext }) => {
  const { orderSummary, updateOrder } = useOrder();
  const [selectedPerfume, setSelectedPerfume] = useState(orderSummary.perfume || null);

  const perfumes = {
    women: [
      { id: 'orchid', name: 'Orchid', description: 'Soft Floral' },
      { id: 'moony', name: 'Moony', description: 'Airy Musk' },
    ],
    men: [
      { id: 'elixir', name: 'Elixir', description: 'Oud & Amber' },
      { id: 'imperial', name: 'Imperial', description: 'Oriental Bold' },
    ],
  };

  const handlePerfumeSelect = (perfumeId) => {
    setSelectedPerfume(perfumeId);
    updateOrder('perfume', perfumeId);
  };

  return (
    <div className="min-h-screen mt-20 bg-[#f1ece7]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:gap-6 gap-10 max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div
                className="text-center py-6"
                style={{
                  background: "linear-gradient(to right, #000000, #8B7355 50%)",
                }}
              >
                <h1 className="text-lg sm:text-2xl font-light text-[#D4AF37]">
                  AKOYA PREMIUM LAUNDRY
                </h1>
                <p className="text-gray-200 font-semibold text-[18px] mt-2">
                  Step 4 of 6
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6 text-center">
                  Would you like us to perfume your clothes with a luxury scent?
                </h2>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-12 mb-10">
                  {/* Women's Perfumes */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Women's</h3>
                    <div className="space-y-4">
                      {perfumes.women.map((perfume) => (
                        <div
                          key={perfume.id}
                          onClick={() => handlePerfumeSelect(perfume.id)}
                          className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
                            selectedPerfume === perfume.id
                              ? 'border-yellow-500 bg-yellow-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-gray-900 font-medium">
                            {perfume.name} - {perfume.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Men's Perfumes */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Men's</h3>
                    <div className="space-y-4">
                      {perfumes.men.map((perfume) => (
                        <div
                          key={perfume.id}
                          onClick={() => handlePerfumeSelect(perfume.id)}
                          className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
                            selectedPerfume === perfume.id
                              ? 'border-yellow-500 bg-yellow-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-gray-900 font-medium">
                            {perfume.name} - {perfume.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row justify-between mt-10 pt-6 border-t border-gray-200 gap-4">
                  <button
                    onClick={onBack}
                    className="px-6 py-2 border border-gray-400 rounded text-gray-700 hover:bg-gray-100 transition-colors w-full sm:w-auto"
                  >
                    Back
                  </button>
                  <button
                    onClick={onNext}
                    className="px-6 py-2 bg-[#D4AF37] text-white rounded hover:bg-yellow-600 transition w-full sm:w-auto"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-80 w-full">
            <div className="sticky top-24">
              <OrderSummaryCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepfour;
