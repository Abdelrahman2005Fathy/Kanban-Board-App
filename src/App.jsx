import {
  useEffect,
  useState,
} from 'react';

import Header from '@components/Header';

import SideMenu from './components/SideMenu';
import Workspace from './components/Workspace';
import { DataContext } from './DataContext';

function App() {
  const [dataState, setDataState] = useState([]);
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);

  useEffect(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (Array.isArray(parsedData) && parsedData.length > 0) {
          setDataState(parsedData);
        } else {
          setDataState([
            {
              id: Date.now(),
              title: "Studying",
              columns: [{ id: Date.now(), title: "Studying Web Development", tasks: [] }],
            },
          ]);
        }
      } catch (error) {
        console.error("Error loading data from localStorage:", error);
        setDataState([
          {
            id: Date.now(),
            title: "Studying",
            columns: [{ id: Date.now(), title: "Studying Web Development", tasks: [] }],
          },
        ]);
      }
    } else {
      setDataState([
        {
          id: Date.now(),
          title: "Studying",
          columns: [{ id: Date.now(), title: "Studying Web Development", tasks: [] }],
        },
      ]);
    }
  }, []);

  useEffect(() => {
    if (dataState && dataState.length > 0) {
      localStorage.setItem("data", JSON.stringify(dataState));
    }
  }, [dataState]);

  return (
    <DataContext.Provider
      value={{
        data: dataState || [],
        setData: setDataState,
        selectedBoardIndex,
        setSelectedBoardIndex,
      }}
    >
      <div className="flex h-screen flex-col font-jakarta">
        <Header />
        <div className="flex flex-1">
          <SideMenu />
          <Workspace />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
