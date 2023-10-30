import React from "react";

type ICounterContext = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterContext = React.createContext<ICounterContext | null>(null);

/**
 * @description fornece o contexto para os componentes filhos
 * */
export const useCounter = () => {
  const context = React.useContext(CounterContext);
  if (!context) throw new Error("useCounter precisa estar em CounterContextProvider");
  return context;
};

export const CounterContextProvider = ({ children }: React.PropsWithChildren) => {
  const [count, setCount] = React.useState(0);

  return <CounterContext.Provider value={{ count, setCount }}>{children}</CounterContext.Provider>;
};
