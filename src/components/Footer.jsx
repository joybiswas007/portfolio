import { Box, Typography } from "@mui/material";

const { VITE_FULLNAME: fullname } = import.meta.env;

const Footer = () => (
  <Box
    component="footer"
    sx={{ py: 2, textAlign: "center", borderTop: 1, borderColor: "divider" }}
  >
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} {fullname}
    </Typography>
  </Box>
);

export default Footer;
