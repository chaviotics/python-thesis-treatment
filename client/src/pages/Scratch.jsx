import React, { useState } from 'react';
import { Box, Container, Typography, Button, Slider } from '@mui/material';
import CodeEditorWithOutput from '../components/CodeEditorWithOutput';

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

      <Typography mb="4rem"></Typography>

      <CodeEditorWithOutput
        codeWidth={60}
        outputWidth={40}
        content={`print("hello")`}
        height="300px"
        title="true"
      />
    </Container>
  );
}

export default Scratch;
