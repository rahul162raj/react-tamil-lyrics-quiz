import React, { useState } from "react";

export const AppContexts = React.createContext({});

export default function AppContext({ children }) {
  const [editMode, setEditMode] = useState(true);
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  return (
    <AppContexts.Provider value={{ editMode, toggleEditMode }}>
      {children}
    </AppContexts.Provider>
  );
}
