import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import { CiLight, CiDark } from "react-icons/ci";
import { Link } from "react-router-dom";

const { VITE_USERNAME: uname, VITE_BLOG: blog } = import.meta.env;

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// Conditionally add Blog as an external link if VITE_BLOG is set
if (blog) {
  navLinks.push({ label: "Blog", to: blog, external: true });
}

const Header = ({ mode, onToggleTheme }) => (
  <AppBar
    position="static"
    color="transparent"
    elevation={0}
    sx={{ borderBottom: 1, borderColor: "divider" }}
  >
    <Toolbar>
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, letterSpacing: 1, flexGrow: 1 }}
        component={Link}
        to="/"
        color="inherit"
        style={{ textDecoration: "none" }}
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
              color="inherit"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                fontSize: 16,
                px: 1.5,
                borderRadius: 2,
                "&:hover": {
                  bgcolor: mode === "dark" ? "primary.dark" : "#E3F2FD",
                  color: mode === "dark" ? "#fff" : "primary.main",
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
              color="inherit"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                fontSize: 16,
                px: 1.5,
                borderRadius: 2,
                "&:hover": {
                  bgcolor: mode === "dark" ? "primary.dark" : "#E3F2FD",
                  color: mode === "dark" ? "#fff" : "primary.main",
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
        color="inherit"
        aria-label="Toggle dark/light mode"
        size="small"
        sx={{
          ml: 1,
          border: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          "&:hover": {
            bgcolor: "primary.main",
            color: "#fff",
          },
          transition: "background 0.2s",
        }}
      >
        {mode === "dark" ? <CiLight /> : <CiDark />}
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
