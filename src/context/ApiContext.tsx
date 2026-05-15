import { createContext, useContext, useState, ReactNode } from "react";

interface ApiContextType {
  selectedApi: string;
  setSelectedApi: (game: string) => void;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) throw new Error("useApi must be used within ApiProvider");
  return context;
};

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [selectedApi, setSelectedApi] = useState("game-api");

  return (
    <ApiContext.Provider
      value={{
        selectedApi,
        setSelectedApi,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
