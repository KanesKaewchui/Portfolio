import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function Hero() {
  const theme = useTheme(); 

  return (
    <Box
      id="Hero"
      sx={{
        height: '100vh',
        backgroundColor: theme.palette.mode === 'light' ? '#f0f0f0' : '#212121', 
        color: theme.palette.mode === 'light' ? '#212121' : '#ffffff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          backgroundColor: theme.palette.mode === 'light' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)', // สีพื้นหลังปรับตามโหมด
          padding: '0 20px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '2rem', md: '4rem' }, color: theme.palette.text.primary }} // ใช้ theme.palette.text.primary เพื่อตามโหมด
        >
          Hi, I'm Kanes Kanwchui
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mt: 2, fontSize: { xs: '1rem', md: '1.5rem' }, color: theme.palette.text.secondary }} // ใช้ theme.palette.text.secondary
        >
          I am a full-stack developer with experience from the JSD Generation boot camp, where I interned as a full-stack developer. This opportunity
          helped me enhance my skills in programming, web development, and full-stack technologies while working in a professional environment, allowing me to grow both technically and personally.
        </Typography>
      </Box>
    </Box>
  );
}
