import { Container, Typography, Stack, Tooltip, useTheme } from "@mui/material";
import {
  SiGo,
  SiJavascript,
  SiPhp,
  SiReact,
  SiNodedotjs,
  SiGin,
  SiExpress,
  SiDocker,
  SiPostman,
  SiNeovim,
  SiVim,
  SiLinux,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiManjaro,
  SiArchlinux,
  SiDebian,
  SiUbuntu,
} from "react-icons/si";

const skills = [
  { name: "Go", icon: SiGo },
  { name: "JavaScript", icon: SiJavascript },
  { name: "PHP", icon: SiPhp },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Gin", icon: SiGin },
  { name: "Echo" },
  { name: "Fiber" },
  { name: "Express.js", icon: SiExpress },
  { name: "Docker", icon: SiDocker },
  { name: "Postman", icon: SiPostman },
  { name: "Neovim", icon: SiNeovim },
  { name: "Vim", icon: SiVim },
  { name: "Linux", icon: SiLinux },
  { name: "OOP" },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "SQLite", icon: SiSqlite },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Cobra" },
  { name: "Arch", icon: SiArchlinux },
  { name: "Manjaro", icon: SiManjaro },
  { name: "Debian", icon: SiDebian },
  { name: "Ubuntu", icon: SiUbuntu },
];

const Skills = () => {
  const theme = useTheme();
  // Use blue in dark mode, gray in light mode
  const iconColor =
    theme.palette.mode === "dark" ? theme.palette.primary.main : "#444";

  return (
    <Container
      id="skills"
      component="section"
      maxWidth="md"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
          letterSpacing: "-0.04em",
          color: "text.primary",
          fontSize: { xs: 28, md: 38 },
          lineHeight: 1.1,
          mb: 0.5,
        }}
        tabIndex={0}
        aria-label="Skills section"
      >
        My Tech Stack
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{
          mb: 1,
          fontSize: { xs: 15, md: 18 },
          textAlign: "center",
          maxWidth: 440,
        }}
      >
        Languages, frameworks and tools I use
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          width: "100%",
          gap: { xs: 1.5, md: 2 },
          mt: 1,
        }}
      >
        {skills.map(({ name, icon: Icon }) =>
          Icon ? (
            <Tooltip key={name} title={name} arrow>
              <span
                tabIndex={0}
                aria-label={name}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(0,0,0,0.025)",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  margin: 3,
                  transition: "box-shadow 0.2s",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  outline: "none",
                }}
              >
                <Icon size={28} color={iconColor} />
              </span>
            </Tooltip>
          ) : (
            <Tooltip key={name} title={name} arrow>
              <span
                tabIndex={0}
                aria-label={name}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(0,0,0,0.04)",
                  borderRadius: "20px",
                  padding: "0 15px",
                  height: 34,
                  margin: 3,
                  fontWeight: 600,
                  color: iconColor,
                  fontSize: 16,
                  letterSpacing: 0.2,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  outline: "none",
                }}
              >
                {name}
              </span>
            </Tooltip>
          ),
        )}
      </Stack>
    </Container>
  );
};

export default Skills;
