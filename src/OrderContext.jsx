import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orderSummary, setOrderSummary] = useState({
    service: '',
    washType: '',
    delivery: '',
    garments: [],
 
  });

  const updateOrder = (key, value) => {
    if (key === 'garments' && typeof value === 'function') {
      setOrderSummary((prev) => ({
        ...prev,
        garments: value(prev.garments || []),
      }));
    } else {
      setOrderSummary((prev) => ({ ...prev, [key]: value }));
    }
  };

  const removeItem = (key, idToRemove = null) => {
    if (key === 'garments' && idToRemove) {
      setOrderSummary((prev) => ({
        ...prev,
        garments: prev.garments.filter((item) => item.id !== idToRemove),
      }));
    } else {
      setOrderSummary((prev) => ({ ...prev, [key]: '' }));
    }
  };

  const updateGarmentQuantity = (itemId, newQuantity) => {
    setOrderSummary((prev) => {
      const updatedGarments = (prev.garments || []).map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );

      return {
        ...prev,
        garments: updatedGarments.filter((item) => item.quantity > 0),
      };
    });
  };

  return (
    <OrderContext.Provider
      value={{
        orderSummary,
        updateOrder,
        removeItem,
        updateGarmentQuantity, 
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
