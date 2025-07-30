import React, { useState } from "react";
import { useOrder } from "../../OrderContext";
import OrderSummaryCard from "./OrderSummaryCard";

const Stepthree = ({ onBack, onNext }) => {
  const [steam, setSteam] = useState(null);
  const [incense, setIncense] = useState(null);
  const { orderSummary, setOrderSummary } = useOrder();

  const handleServiceToggle = (type, value) => {
    if (type === "steam") {
      setSteam(value);
      setOrderSummary((prev) => ({
        ...prev,
        steamService: value === "Yes" ? { value, price: 8 } : null,
      }));
    } else if (type === "incense") {
      setIncense(value);
      setOrderSummary((prev) => ({
        ...prev,
        incenseService: value === "Yes" ? { value, price: 5 } : null,
      }));
    }
  };

  const handleNext = () => {
    onNext();
  };

  const getButtonClasses = (selected, value) =>
    `py-4 rounded-md font-medium transition-all duration-200 ${
      selected === value
        ? "border-2 border-yellow-400 bg-yellow-100 text-yellow-800"
        : "border border-gray-300 bg-white text-gray-700"
    }`;

  return (
    <div className="min-h-screen bg-[#f1ece7] pt-[80px] px-4">
      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-xl shadow">
          <div
            className="text-center py-6 rounded-lg mb-6"
            style={{
              background: "linear-gradient(to right, #000000, #8B7355 50%)",
            }}
          >
            <h1 className="text-lg sm:text-2xl font-light text-[#D4AF37]">
              AKOYA PREMIUM LAUNDRY
            </h1>
            <p className="text-gray-200 font-semibold text-[18px] mt-2">
              Step 3 of 6
            </p>
          </div>

          <div className="mb-6">
            <p className="text-[19px] text-gray-500 mb-2">
              Do you want us to steam the garments?
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleServiceToggle("steam", "Yes")}
                className={getButtonClasses(steam, "Yes")}
              >
                Yes
              </button>
              <button
                onClick={() => handleServiceToggle("steam", "No")}
                className={getButtonClasses(steam, "No")}
              >
                No
              </button>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-[19px] text-gray-500 mb-2">
              Do you want incense service?
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleServiceToggle("incense", "Yes")}
                className={getButtonClasses(incense, "Yes")}
              >
                Yes
              </button>
              <button
                onClick={() => handleServiceToggle("incense", "No")}
                className={getButtonClasses(incense, "No")}
              >
                No
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
            <button
              onClick={onBack}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 w-full sm:w-auto"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-yellow-500 text-white rounded-md font-semibold hover:bg-yellow-600 w-full sm:w-auto"
            >
              Next
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <OrderSummaryCard />
        </div>
      </div>
    </div>
  );
};

export default Stepthree;
