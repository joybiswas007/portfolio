import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CiLight, CiDark } from "react-icons/ci";

const { VITE_USERNAME: uname, VITE_BLOG: blog } = import.meta.env;

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
if (blog) navLinks.push({ label: "Blog", to: blog, external: true });

const Header = ({ mode, onToggleTheme }) => (
  <AppBar
    position="static"
    sx={{
      background: "transparent",
      boxShadow: "none",
    }}
    elevation={0}
  >
    <Toolbar>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          letterSpacing: 1,
          flexGrow: 1,
          color: "text.primary",
          fontFamily: "inherit",
          textDecoration: "none",
        }}
        component={Link}
        to="/"
      >
        {uname}
      </Typography>
      <Stack direction="row" spacing={1} sx={{ mr: 2 }}>
        {navLinks.map((link) =>
          link.external ? (
            <Button
              key={link.label}
              href={link.to}
              target="_blank"
              rel="noopener"
              sx={{
                color: "text.primary",
                fontFamily: "inherit",
                fontWeight: 500,
                fontSize: 16,
                px: 1.5,
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  color: "primary.main",
                  background: "transparent",
                },
              }}
              aria-label={link.label}
            >
              {link.label}
            </Button>
          ) : (
            <Button
              key={link.label}
              component={Link}
              to={link.to}
              sx={{
                color: "text.primary",
                fontFamily: "inherit",
                fontWeight: 500,
                fontSize: 16,
                px: 1.5,
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  color: "primary.main",
                  background: "transparent",
                },
              }}
              aria-label={link.label}
            >
              {link.label}
            </Button>
          ),
        )}
      </Stack>
      <IconButton
        onClick={onToggleTheme}
        aria-label="Toggle dark/light mode"
        size="small"
        sx={{
          ml: 1,
          color: mode === "light" ? "#1976d2" : "#b5e3ff",
        }}
      >
        {mode === "dark" ? <CiLight /> : <CiDark />}
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
