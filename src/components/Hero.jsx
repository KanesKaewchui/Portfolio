import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Hero() {
  return (
    <Box id="Hero" sx={{height: '100vh'}}>
      <Typography variant="h2" >Hi, I'm Kanes Kanwchui</Typography>
      <Typography variant="subtitle2" >I am a full-stack developer with experience from the JSD Generation boot camp, where I interned as 
        a full-stack developer. This opportunity helped me enhance my skills in programming, web development, and full-stack technologies while working 
        in a professional environment allowing me to grow both technically and personally.
      </Typography>
    </Box>
  );
}
