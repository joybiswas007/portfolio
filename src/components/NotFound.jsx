import { Container, Typography, Box, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import SEO from "./SEO";

const asciiArt = `¯\\_(ツ)_/¯`;

const NotFound = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        py: 6,
      }}
    >
      <SEO title="404 Not Found" />
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "primary.main",
          mb: 0.5,
        }}
      >
        404
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "primary.main",
          mb: 1.5,
        }}
      >
        Page Not Found
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          fontFamily: "Fira Mono, monospace",
          mb: 2,
          maxWidth: 420,
        }}
      >
        Sorry, couldn't find the page you're looking for. It might have been
        moved or deleted.
      </Typography>
      <Box
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          bgcolor: "background.paper",
          borderRadius: 1,
          py: 2,
          px: 0,
          mb: 2.5,
          width: "100%",
          maxWidth: 400,
          mx: "auto",
        }}
      >
        <Typography
          component="pre"
          sx={{
            fontFamily: "Fira Mono, monospace",
            color: "primary.main",
            fontSize: 28,
            m: 0,
            whiteSpace: "pre",
            lineHeight: 1,
            letterSpacing: "0.02em",
            textAlign: "center",
          }}
          aria-hidden="true"
        >
          {asciiArt}
        </Typography>
      </Box>
      <MuiLink
        component={Link}
        to="/"
        underline="hover"
        sx={{
          color: "primary.main",
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        Go Home
      </MuiLink>
    </Container>
  );
};

export default NotFound;
