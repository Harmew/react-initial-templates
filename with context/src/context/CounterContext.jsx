import React from "react";

// Create a Context
const CounterContext = React.createContext(null);

/**
 * @description fornece o contexto para os componentes filhos
 * */
export const useCounter = () => {
  const context = React.useContext(CounterContext);
  if (!context) throw new Error("useCounter precisa estar em CounterContextProvider");
  return context;
};

/**
 *
 * @param {Object} props
 * @param {JSX.Element} props.children
 *
 * @returns {JSX.Element} CounterContextProvider
 */
export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);

  return <CounterContext.Provider value={{ count, setCount }}>{children}</CounterContext.Provider>;
};
