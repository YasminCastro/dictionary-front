import React, { createContext, useContext, useMemo, useState } from 'react';

interface IValue {
  renderWordContainer: boolean;
  setRenderWordContainer: React.Dispatch<React.SetStateAction<boolean>>;
}

const RenderContext = createContext({} as IValue);

export const RenderProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [renderWordContainer, setRenderWordContainer] = useState(false);

  const value = useMemo(
    () => ({
      renderWordContainer,
      setRenderWordContainer,
    }),
    [renderWordContainer, setRenderWordContainer]
  );

  return (
    <RenderContext.Provider value={value}>{children}</RenderContext.Provider>
  );
};

export const useRenderWordsContainer = (): IValue => useContext(RenderContext);
