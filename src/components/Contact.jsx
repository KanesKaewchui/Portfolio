import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Contact() {
  const theme = useTheme();

  return (
    <Box id="Contact" sx={{ py: 5 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 4, color: theme.palette.text.primary }}>
        Contact Me
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <Grid container spacing={2} maxWidth="md">
          <Grid item xs={12}>
            <Typography
              variant="h6"
              display="flex"
              justifyContent="center"
              sx={{ color: theme.palette.text.primary }}>
              Email: kaneskaewchui1@gmail.com
            </Typography>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{ mb: 2, color: theme.palette.text.primary }}>
              Connect with me on Social Media
            </Typography>
            <IconButton
              href="www.linkedin.com/in/kanes-kaewchui-131851235"
              target="_blank"
              sx={{ color: theme.palette.text.primary }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://github.com/KanesKaewchui"
              target="_blank"
              sx={{ color: theme.palette.text.primary }}>
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="mailto:kaneskaewchui1@gmail.com"
              sx={{ color: theme.palette.text.primary }}>
              <EmailIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
