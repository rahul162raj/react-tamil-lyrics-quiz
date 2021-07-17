import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export const ThemeContext = React.createContext({});

export default function ThemeConfig({ children }) {
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      type: mode,
      primary: {
        light: "#84A9FF",
        main: "#3366FF",
        dark: "#1939B7"
      },
      secondary: {
        light: "#83F6FD",
        main: "#31D1F9",
        dark: "#187DB3"
      },
      error: {
        light: "#FEAB82",
        main: "#FC552F",
        dark: "#B51D17"
      },
      warning: {
        light: "#FDEC86",
        main: "#F9D636",
        dark: "#B3921B"
      },
      success: {
        light: "#ADF88E",
        main: "#59E843",
        dark: "#21A725"
      }
    }
  });
  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
