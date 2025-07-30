import React, { useState } from "react";
import OrderSummaryCard from "./OrderSummaryCard";
import { useOrder } from "../../OrderContext";

const Stepsix = ({ onBack }) => {
  const [fromName, setFromName] = useState("");
  const [toName, setToName] = useState("");
  const [error, setError] = useState(false);

  const { orderSummary, setOrderSummary } = useOrder();

  const handleSubmit = () => {
    if (fromName.trim() === "") {
      setError(true);
      return;
    }

    setOrderSummary((prev) => ({
      ...prev,
      personalizedCard: {
        from: fromName,
        to: toName,
      },
    }));

    alert("Order completed!");
  };

  return (
    <div className="min-h-screen mt-20 bg-[#f1ece7]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          {/* Left: Form Section */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                  Step 6 of 6
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6">
                  Want to include a personalized card?
                </h2>

                {/* From Field */}
                <div className="mb-6">
                  <label className="block text-[18px] font-semibold text-gray-700 mb-2">
                    From <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fromName}
                    onChange={(e) => {
                      setFromName(e.target.value);
                      setError(false);
                    }}
                    placeholder="Your name (required)*"
                    className={`w-full px-4 py-3 border ${
                      error ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-1">
                      This field is required
                    </p>
                  )}
                </div>

                {/* To Field */}
                <div className="mb-8">
                  <label className="block text-[18px] font-semibold text-gray-700 mb-2">
                    To (optional)
                  </label>
                  <input
                    type="text"
                    value={toName}
                    onChange={(e) => setToName(e.target.value)}
                    placeholder="Recipient's name (optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-between mt-12 pt-4 border-t border-gray-200 gap-4">
                  <button
                    onClick={onBack}
                    className="w-full sm:w-auto px-6 py-2 border border-gray-400 rounded text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="w-full sm:w-auto px-6 py-2 bg-[#D4AF37] text-white rounded hover:bg-yellow-600 transition-colors"
                  >
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="w-full lg:w-80 mt-6 lg:mt-16">
            <OrderSummaryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepsix;
