import { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "./components/NotFound";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#1976d2" },
          background: { default: "#f6f8fa", paper: "#fff" },
          text: {
            primary: "#181c20",
            secondary: "#1976d2",
          },
          contrastThreshold: 4.5,
        }
      : {
          primary: { main: "#7ec7e6" },
          background: { default: "#181c20", paper: "#181c20" },
          text: { primary: "#b5e3ff", secondary: "#8ecae6" },
        }),
  },
  typography: {
    fontFamily: `'Fira Mono', 'Hack', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace`,
    fontWeightBold: 700,
    fontWeightRegular: 400,
  },
});

const App = () => {
  const [mode, setMode] = useState("dark");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const handleToggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            minHeight: "100vh",
            bgcolor: "background.default",
            color: "text.primary",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header mode={mode} onToggleTheme={handleToggleTheme} />
          <Box component="main" sx={{ flex: 1, p: { xs: 2, sm: 3 } }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
