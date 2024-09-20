import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
  const theme = useTheme(); // ใช้ theme ปัจจุบันสำหรับ light และ dark mode

  return (
    <Box
      id="Footer"
      sx={{
        py: 3,
        textAlign: 'center',
        backgroundColor: theme.palette.background.default, // ใช้พื้นหลังจาก theme
        color: theme.palette.text.primary, // สีข้อความจาก theme
      }}
    >
      <Typography variant="body1" sx={{ mb: 2 }}>
        © 2024 Kanes Kanwchui. All Rights Reserved.
      </Typography>
    </Box>
  );
}
