import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export function useHeaderContext() {
  return useContext(HeaderContext);
}

export function HeaderContextProvider({ children }) {
  const [fixedHeader, setFixedHeader] = useState(false);

  return (
    <HeaderContext.Provider value={{ fixedHeader, setFixedHeader }}>
      {children}
    </HeaderContext.Provider>
  );
}
