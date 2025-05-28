import React, {
  createContext,
  useState,
} from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);

  return (
    <DataContext.Provider value={{ data, setData, selectedBoardIndex, setSelectedBoardIndex }}>
      {children}
    </DataContext.Provider>
  );
};
