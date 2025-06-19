import { Container, Typography, Divider } from "@mui/material";
import Skills from "../components/Skills";
import Title from "../components/Title";

const {
  VITE_PROFESSION: profession,
  VITE_USERNAME: uname,
  VITE_DESCRIPTION: description,
} = import.meta.env;

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
      alignItems: "flex-start",
      gap: 3,
    }}
  >
    <Title title={`About - ${uname}`} />
    <Typography
      variant="h2"
      sx={{
        fontWeight: 800,
        letterSpacing: "-0.03em",
        mb: 1,
        color: "text.primary",
        fontSize: { xs: 32, md: 48 },
        lineHeight: 1.1,
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
      variant="h5"
      sx={{
        fontWeight: 500,
        color: "text.secondary",
        mb: 2,
        fontSize: { xs: 20, md: 24 },
        lineHeight: 1.4,
      }}
    >
      {profession}
    </Typography>
    <Typography
      variant="body1"
      sx={{
        color: "text.secondary",
        fontSize: { xs: 16, md: 18 },
        mb: 2,
        lineHeight: 1.7,
        maxWidth: 720,
      }}
    >
      {description}
    </Typography>
    <Skills />
  </Container>
);

export default About;
