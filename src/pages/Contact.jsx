import {
  Container,
  Typography,
  Stack,
  Link as MuiLink,
  Divider,
} from "@mui/material";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { SiUpwork, SiFiverr } from "react-icons/si";

const {
  VITE_USERNAME: uname,
  VITE_GITHUB: github,
  VITE_EMAIL: email,
  VITE_LINKEDIN: linkedIn,
  VITE_X: twitter,
  VITE_UPWORK: upwork,
  VITE_FIVERR: fiverr,
} = import.meta.env;

const socialLinks = [
  {
    label: "GitHub",
    href: github,
    icon: <FaGithub size={18} aria-label="GitHub" />,
  },
  {
    label: "LinkedIn",
    href: linkedIn,
    icon: <FaLinkedin size={18} aria-label="LinkedIn" />,
  },
  {
    label: "Twitter",
    href: twitter,
    icon: <FaXTwitter size={18} aria-label="Twitter" />,
  },
  {
    label: "Upwork",
    href: upwork,
    icon: <SiUpwork size={22} aria-label="Upwork" />,
  },
  {
    label: "Fiverr",
    href: fiverr,
    icon: <SiFiverr size={28} style={{ minWidth: 28 }} aria-label="Fiverr" />,
  },
];

const Contact = () => (
  <Container
    id="contact"
    component="section"
    maxWidth="sm"
    sx={{
      py: { xs: 8, md: 12 },
      px: { xs: 2, md: 6 },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
    }}
  >
    <title>{`Contact - ${uname}`}</title>

    <Typography
      variant="h2"
      sx={{
        fontWeight: 800,
        letterSpacing: "-0.03em",
        color: "text.primary",
        fontSize: { xs: 32, md: 40 },
        lineHeight: 1.1,
        mb: 1,
      }}
    >
      Contact
    </Typography>
    <Divider
      sx={{
        width: 64,
        borderBottomWidth: 3,
        borderColor: "primary.main",
        mb: 2,
      }}
    />

    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ textAlign: "center", mb: 2, fontSize: { xs: 16, md: 18 } }}
    >
      If you want to talk about technology, collaborate on a project, or just
      say hello,
      <br />
      <b>I&apos;d love to hear from you!</b> Feel free to reach out through any
      of these channels:
    </Typography>

    <Stack spacing={2} alignItems="center" sx={{ width: "100%" }}>
      <MuiLink
        href={`mailto:${email}`}
        color="inherit"
        underline="hover"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          fontWeight: 500,
          fontSize: 18,
        }}
        aria-label="Email"
      >
        <FaEnvelope size={18} aria-label="Email" />
        {email}
      </MuiLink>
      <Stack direction="row" spacing={3} justifyContent="center">
        {socialLinks.map((link) => (
          <MuiLink
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener"
            aria-label={link.label}
            color="inherit"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              fontWeight: 500,
              fontSize: 17,
            }}
            underline="hover"
          >
            {link.icon}
            {link.label}
          </MuiLink>
        ))}
      </Stack>
    </Stack>
  </Container>
);

export default Contact;
