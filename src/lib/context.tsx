import React, { createContext, useContext, useState } from 'react';

type SiteContextState = {
  isLoading: boolean;
  nav: {
    activeID: string | undefined;
    isOpen: boolean;
  };
};

const initialSiteContext: SiteContextState = {
  isLoading: true,
  nav: {
    activeID: undefined,
    isOpen: false,
  },
};

export const SiteContext = createContext<
  | {
      state: SiteContextState;
      updateState: React.Dispatch<React.SetStateAction<SiteContextState>>;
    }
  | undefined
>(undefined);

export const SiteContextProvider: React.FunctionComponent<React.ReactNode> = ({
  children,
}) => {
  const [state, updateState] = useState(initialSiteContext);
  const value = { state, updateState };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export const useSiteContext = () => {
  const context = useContext(SiteContext);

  if (context === undefined) {
    throw new Error('useSiteContext must be used within a SiteProvider');
  }

  return context;
};
