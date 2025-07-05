import { Container, Typography, Stack, Button } from "@mui/material";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";

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
  {
    label: "GitHub",
    href: github,
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: linkedIn,
    icon: <FaLinkedin />,
  },
  {
    label: "Email",
    href: `mailto:${email}`,
    icon: <FaEnvelope />,
  },
  {
    label: "Resume",
    href: resume,
    icon: <SiReaddotcv />,
  },
];

const Home = () => (
  <Container
    maxWidth="sm"
    sx={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <title>{fullname}</title>
    <Stack alignItems="center" spacing={3}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          letterSpacing: "-0.01em",
        }}
        tabIndex={0}
        aria-label="Name"
      >
        {fullname}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        aria-label="Profession"
        sx={{ fontWeight: 500 }}
      >
        {profession}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        aria-label="Description"
        sx={{
          fontSize: { xs: 16, md: 18 },
          textAlign: "center",
          maxWidth: 500,
        }}
      >
        {description}
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        {socialLinks.map((link) => (
          <Button
            key={link.label}
            sx={{ textTransform: "capitalize" }}
            variant="outlined"
            color="primary"
            startIcon={link.icon}
            href={link.href}
            target={link.label === "Resume" ? "_blank" : "_self"}
            rel="noopener"
            aria-label={link.label}
          >
            {link.label}
          </Button>
        ))}
      </Stack>
    </Stack>
  </Container>
);

export default Home;
