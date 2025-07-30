import { X, Plus, Minus } from "lucide-react";
import { useOrder } from "../../OrderContext";

const OrderSummaryCard = () => {
  const { orderSummary, removeItem, updateGarmentQuantity } = useOrder();

  const summaryItems = Object.entries(orderSummary).filter(
    ([key, val]) =>
      key !== "garments" &&
      key !== "steamService" &&
      key !== "incenseService" &&
      val !== "" &&
      val !== null &&
      val !== undefined
  );

  const garments = orderSummary.garments || [];

  const garmentsTotal = garments.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  const steamServiceTotal = orderSummary.steamService?.price || 0;
  const incenseServiceTotal = orderSummary.incenseService?.price || 0;
  const totalPrice = garmentsTotal + steamServiceTotal + incenseServiceTotal;

  const handleQuantityUpdate = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem("garments", itemId);
    } else {
      updateGarmentQuantity(itemId, newQuantity);
    }
  };

  const handleServiceRemoval = (serviceType) => {
    removeItem(serviceType);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h3 className="text-xl font-bold text-yellow-600 mb-6 text-center">
        Order Summary
      </h3>

      <div className="space-y-4">
        {/* Regular selections */}
        {summaryItems.map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between items-center py-2 border-b border-gray-200"
          >
            <span className="text-gray-700 font-medium capitalize">
              {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
            </span>
            <div className="flex items-center gap-2">
              <span className="text-gray-800">{value}</span>
              <button
                onClick={() => removeItem(key)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ))}

        {/* Garments Section */}
        {garments.length > 0 && (
          <div className="pt-2">
            <h4 className="text-gray-800 font-medium mb-3">Garments:</h4>
            <div className="space-y-3">
              {garments.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{item.name}</span>
                    <button
                      onClick={() => removeItem("garments", item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleQuantityUpdate(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-gray-800 font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityUpdate(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="text-gray-700 font-medium">
                      {(item.price || 0) * (item.quantity || 1)} QAR
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Steam Service */}
        {orderSummary.steamService?.value === "Yes" && (
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-700 font-medium">Steam Finishing:</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-700">
                +{orderSummary.steamService.price} QAR
              </span>
              <button
                onClick={() => handleServiceRemoval("steamService")}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Incense Service */}
        {orderSummary.incenseService?.value === "Yes" && (
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-700 font-medium">Incense Service:</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-700">
                +{orderSummary.incenseService.price} QAR
              </span>
              <button
                onClick={() => handleServiceRemoval("incenseService")}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {summaryItems.length === 0 &&
          garments.length === 0 &&
          !orderSummary.steamService &&
          !orderSummary.incenseService && (
            <div className="text-center py-8">
              <p className="text-gray-500">No selections made yet</p>
            </div>
          )}

        {/* Total */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="text-xl font-semibold text-gray-800">Total:</span>
          <span className="text-2xl font-bold text-yellow-600">
            {totalPrice} QAR
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
