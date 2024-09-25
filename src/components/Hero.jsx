import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme();

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("Projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="Hero"
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.mode === "light" ? "#f0f0f0" : "#212121",
        color: theme.palette.mode === "light" ? "#212121" : "#ffffff",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "rgba(255,255,255,0.5)"
              : "rgba(0,0,0,0.5)",
          padding: "0 20px",
          textAlign: "center",
        }}>
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "4rem", fontWeight: "bold" },
              color: theme.palette.text.primary,
            }}>
            HI I'M KANES KANWCHUI
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: "800px",
            width: "100%",
            mt: 2,
          }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "2rem", md: "2rem" },
              color: theme.palette.text.primary,
            }}>
            FULLSTACK DEVELOPER
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: "800px",
            width: "100%",
            mt: 2,
            textAlign: "left",
          }}>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: "lighter",
              color: theme.palette.text.secondary,
              textAlign: "center",
            }}>
            I am a full-stack developer with experience from the JSD Generation
            boot camp
            <br />
            where I interned as a full-stack developer. This opportunity helped
            me enhance
            <br />
            my skills in programming, web development, and full-stack
            technologies while
            <br />
            working in a professional environment, allowing me to grow both
            technically and personally.
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 4,
            animation: "bounce 1.4s infinite",
            cursor: "pointer",
          }}
          onClick={handleScrollToProjects}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-down">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </Box>
        <style>
          {`
            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(20px);
              }
            }
          `}
        </style>
      </Box>
    </Box>
  );
}
