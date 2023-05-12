import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Scratch() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Title */}
      <Typography variant="h4" fontWeight="bold">
        Scratch
      </Typography>
      <Typography variant="h2">Scratch</Typography>

      <Typography mb="2rem"></Typography>
    </Container>
  );
}

export default Scratch;
