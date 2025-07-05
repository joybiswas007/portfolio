import { Container, Typography, Divider } from "@mui/material";
import Skills from "@/components/Skills";
import SEO from "../components/SEO";

const { VITE_DESCRIPTION: description } = import.meta.env;

const About = () => (
  <Container
    id="about"
    component="section"
    maxWidth="md"
    sx={{
      py: { xs: 8, md: 12 },
      px: { xs: 2, md: 6 },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3,
    }}
  >
    <SEO title="About" />
    <Typography
      variant="h2"
      sx={{
        fontWeight: 800,
        letterSpacing: "0.04em",
        mb: 1,
        color: "text.primary",
        fontSize: { xs: 32, md: 48 },
        lineHeight: 1.1,
        fontFamily: "inherit",
        textAlign: "center",
      }}
    >
      About Me
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
        fontSize: { xs: 16, md: 18 },
        mb: 2,
        lineHeight: 1.7,
        maxWidth: 720,
        fontFamily: "inherit",
        textAlign: "center",
      }}
    >
      {description}
    </Typography>
    <Skills />
  </Container>
);

export default About;
