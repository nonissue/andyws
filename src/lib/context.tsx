import React, { createContext, useContext, useState } from "react";

type SiteContextState = {
  nav: {
    isOpen: boolean;
    activeID: string | undefined;
  };
  isLoading: boolean;
};

const initialSiteContext: SiteContextState = {
  nav: {
    isOpen: false,
    activeID: undefined,
  },
  isLoading: true,
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
    throw new Error("useSiteContext must be used within a SiteProvider");
  }

  return context;
};
