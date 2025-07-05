import {
  Container,
  Typography,
  Stack,
  Link as MuiLink,
  Divider,
  Box,
} from "@mui/material";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { SiUpwork, SiFiverr } from "react-icons/si";
import SEO from "../components/SEO";

const {
  VITE_GITHUB: github,
  VITE_EMAIL: email,
  VITE_LINKEDIN: linkedIn,
  VITE_X: twitter,
  VITE_UPWORK: upwork,
  VITE_FIVERR: fiverr,
} = import.meta.env;

const iconBgColor = (theme) =>
  theme.palette.mode === "light" ? "#e3f2fd" : "#22313a";
const iconColor = (theme) =>
  theme.palette.mode === "light" ? "#1976d2" : "#7ec7e6";

const socialLinks = [
  {
    label: "GitHub",
    href: github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: linkedIn,
    icon: FaLinkedin,
  },
  {
    label: "Twitter",
    href: twitter,
    icon: FaXTwitter,
  },
  {
    label: "Upwork",
    href: upwork,
    icon: SiUpwork,
  },
  {
    label: "Fiverr",
    href: fiverr,
    icon: SiFiverr,
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
    <SEO title="Contact" />

    <Typography
      variant="h2"
      sx={{
        fontWeight: 800,
        letterSpacing: "0.04em",
        color: "text.primary",
        fontSize: { xs: 32, md: 40 },
        lineHeight: 1.1,
        mb: 1,
        fontFamily: "inherit",
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
      sx={{
        color: "text.primary",
        textAlign: "center",
        mb: 2,
        fontSize: { xs: 16, md: 18 },
        fontFamily: "inherit",
      }}
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
        underline="hover"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          fontWeight: 500,
          fontSize: 18,
          color: "primary.main",
          fontFamily: "inherit",
          "&:hover": {
            color: "text.primary",
          },
        }}
        aria-label="Email"
      >
        <Box
          sx={{
            width: 38,
            height: 38,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: (theme) => iconBgColor(theme),
            color: (theme) => iconColor(theme),
            borderRadius: "50%",
            mr: 1,
          }}
        >
          <FaEnvelope size={20} aria-label="Email" />
        </Box>
        {email}
      </MuiLink>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <MuiLink
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener"
              aria-label={link.label}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 500,
                fontSize: 17,
                color: "primary.main",
                fontFamily: "inherit",
                "&:hover": {
                  color: "text.primary",
                },
              }}
              underline="hover"
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: (theme) => iconBgColor(theme),
                  color: (theme) => iconColor(theme),
                  borderRadius: "50%",
                  mr: 1,
                }}
              >
                <Icon size={20} aria-label={link.label} />
              </Box>
              {link.label}
            </MuiLink>
          );
        })}
      </Stack>
    </Stack>
  </Container>
);

export default Contact;
