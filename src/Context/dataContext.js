import { createContext, useContext, useReducer, useState } from "react";
import dataReducer from "./dataReducer";
import data from "../data.json";
export const DataContext = createContext();
export function useData() {
  return useContext(DataContext);
}

const getBrands = (data) => {
  const allBrands = data.map((i) => i.brand);
  let brands = [...new Set(allBrands)];
  return brands;
};

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, {
    filteredData: data,
    data: data,
    brands: getBrands(data),
    sizes: ["S", "M", "L", "XL"],
    ideal_for: ["Men", "Women"]
  });

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
