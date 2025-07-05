import { Container, Typography, Stack, Button } from "@mui/material";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";
import SEO from "./SEO";

const {
  VITE_FULLNAME: fullname,
  VITE_GITHUB: github,
  VITE_EMAIL: email,
  VITE_LINKEDIN: linkedIn,
  VITE_RESUME: resume,
  VITE_PROFESSION: profession,
  VITE_DESCRIPTION: description,
} = import.meta.env;

const socialLinks = [
  { label: "GitHub", href: github, icon: <FaGithub /> },
  { label: "LinkedIn", href: linkedIn, icon: <FaLinkedin /> },
  { label: "Email", href: `mailto:${email}`, icon: <FaEnvelope /> },
  { label: "Resume", href: resume, icon: <SiReaddotcv /> },
];

const Home = () => (
  <Container
    maxWidth="sm"
    sx={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 3,
    }}
  >
    <SEO />
    <Typography
      variant="h3"
      sx={{
        fontWeight: 700,
        letterSpacing: "0.04em",
        textAlign: "center",
        fontFamily: "inherit",
      }}
      tabIndex={0}
      aria-label="Name"
    >
      {fullname}
    </Typography>
    <Typography
      variant="h6"
      sx={{
        color: "text.primary",
        fontWeight: 500,
        fontFamily: "inherit",
      }}
      aria-label="Profession"
    >
      {profession}
    </Typography>
    <Typography
      variant="body1"
      sx={{
        color: "text.primary",
        fontSize: { xs: 16, md: 18 },
        textAlign: "center",
        maxWidth: 500,
        fontFamily: "inherit",
      }}
      aria-label="Description"
    >
      {description}
    </Typography>
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      sx={{ mt: 3, width: "100%" }}
      justifyContent="center"
      alignItems="center"
    >
      {socialLinks.map((link) => (
        <Button
          key={link.label}
          variant="outlined"
          startIcon={link.icon}
          href={link.href}
          target={link.label === "Resume" ? "_blank" : "_self"}
          rel="noopener"
          aria-label={link.label}
          sx={{
            borderColor: "primary.main",
            color: "primary.main",
            fontFamily: "inherit",
            fontWeight: 700,
            width: { xs: "100%", sm: "auto" },
            justifyContent: "flex-start",
            "&:hover": {
              borderColor: "text.primary",
              color: "text.primary",
              background: "transparent",
            },
          }}
        >
          {link.label}
        </Button>
      ))}
    </Stack>
  </Container>
);

export default Home;
