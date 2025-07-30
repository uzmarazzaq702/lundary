import React, { useState } from "react";
import { useOrder } from "../../OrderContext";
import OrderSummaryCard from "./OrderSummaryCard";

const StepOne = ({ onNext }) => {
  const { orderSummary, updateOrder } = useOrder();
  const [selectedService, setSelectedService] = useState(orderSummary.service || "");

  const services = [
    { id: "iron-only", name: "Iron Only", description: "Ironing without washing" },
    { id: "washing-iron", name: "Washing & Iron", description: "Complete washing with ironing" },
    { id: "dry-clean", name: "Dry Clean", description: "Professional dry cleaning" },
  ];

  const handleServiceSelect = (service) => {
    if (selectedService === service.id) {
      setSelectedService("");
      updateOrder("service", "");
    } else {
      setSelectedService(service.id);
      updateOrder("service", service.name);
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-[#f1ece7]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* AKOYA Header - Unified Style */}
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
                  Step 1 of 6
                </p>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-medium text-gray-700 mb-6 text-center">
                  Choose Service Type:
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                        selectedService === service.id
                          ? "border-yellow-500 bg-yellow-50"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <h3 className="text-[20px] font-semibold text-gray-800 text-center mb-3">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
                  <button
                    className="px-6 py-2 border border-gray-400 rounded text-gray-700 hover:bg-gray-100 transition-colors"
                    disabled
                  >
                    Back
                  </button>
                  <button
                    onClick={onNext}
                    disabled={!selectedService}
                    className={`px-6 py-2 rounded-md font-medium transition ${
                      selectedService
                        ? "bg-gray-700 text-white hover:bg-gray-800"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-80 mt-6 lg:mt-16">
            <OrderSummaryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
