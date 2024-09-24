import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      id="Footer"
      sx={{
        py: 3,
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}>
      <Typography variant="body1" sx={{ mb: 2 }}>
        © 2024 Kanes Kanwchui. All Rights Reserved.
      </Typography>
    </Box>
  );
}
