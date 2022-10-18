import { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [qty, setQty] = useState(1);
  const onAdd = (product, quantity) => {};
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return <Context.Provider value={{ qty, incQty, decQty }}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
