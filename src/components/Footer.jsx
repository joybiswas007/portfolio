import { Box, Typography } from "@mui/material";

const { VITE_FULLNAME: fullname } = import.meta.env;

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 2,
      textAlign: "center",
      background: "transparent",
    }}
  >
    <Typography
      variant="body2"
      sx={{
        color: "text.secondary",
        fontFamily: "inherit",
      }}
    >
      © {new Date().getFullYear()} {fullname}
    </Typography>
  </Box>
);

export default Footer;
