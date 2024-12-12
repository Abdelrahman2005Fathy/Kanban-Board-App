import React, { useState, createContext } from "react";

// إنشاء السياق
export const DataContext = createContext();

// إنشاء الموفر
export const DataProvider = ({ children }) => {
  // البيانات الافتراضية
  const [data, setData] = useState([]); // البيانات تكون مصفوفة افتراضيًا
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);

  return (
    <DataContext.Provider value={{ data, setData, selectedBoardIndex, setSelectedBoardIndex }}>
      {children}
    </DataContext.Provider>
  );
};
