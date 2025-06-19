import { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Title from "./components/Title";
import About from "./pages/About";
import Contact from "./pages/Contact";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#007FFF" },
          background: { default: "#F7F7F8", paper: "#fff" },
          text: { primary: "#1A2027", secondary: "#3E5060" },
        }
      : {
          primary: { main: "#3399FF" },
          background: { default: "#1A2027", paper: "#23272F" },
          text: { primary: "#F3F6F9", secondary: "#B2BAC2" },
        }),
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
  },
});
const { VITE_FULLNAME: fullname } = import.meta.env;

const App = () => {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const handleToggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <Title title={fullname} />
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
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
