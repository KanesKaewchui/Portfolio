import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          primary: {
            main: themeMode === "light" ? "#FFFF" : "#212121",
          },
          background: {
            default: themeMode === "light" ? "#FFFF" : "#212121",
            paper: themeMode === "light" ? "#FFF" : "#424242",
          },
          text: {
            primary: themeMode === "light" ? "#212121" : "#FFF",
          },
        },
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar toggleTheme={toggleTheme} currentTheme={themeMode} />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
