import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import pythonLogo from '../../assets/python-logo.svg';
import Proceed from '../../components/Proceed';

function CompareWithTable() {
  return (
    <Box
      sx={{
        width: '100%',
        mt: '2rem',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ddd',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#3081c3',
          color: '#fff',
          fontWeight: 'bold',
          border: '1px solid #ddd',
        }}
      >
        <Box sx={{ flex: 1, p: 1, borderRight: '1px solid #ddd' }}>Feature</Box>
        <Box
          sx={{
            flex: 2,
            p: 1,
            textAlign: 'left',
            borderRight: '1px solid #ddd',
          }}
        >
          C
        </Box>
        <Box sx={{ flex: 2, p: 1, textAlign: 'left' }}>Python</Box>
      </Box>
      <Box sx={{ display: 'flex', border: '1px solid #ddd' }}>
        <Box sx={{ flex: 1, p: 1, borderRight: '1px solid #ddd' }}>Syntax</Box>
        <Box
          sx={{
            flex: 2,
            p: 1,
            textAlign: 'left',
            borderRight: '1px solid #ddd',
          }}
        >
          Lower-level and less intuitive syntax
        </Box>
        <Box sx={{ flex: 2, p: 1, textAlign: 'left' }}>
          More readable and user-friendly syntax
        </Box>
      </Box>
      <Box sx={{ display: 'flex', border: '1px solid #ddd' }}>
        <Box sx={{ flex: 1, p: 1, borderRight: '1px solid #ddd' }}>Speed</Box>
        <Box
          sx={{
            flex: 2,
            p: 1,
            textAlign: 'left',
            borderRight: '1px solid #ddd',
          }}
        >
          Generally faster as it is a compiled language
        </Box>
        <Box sx={{ flex: 2, p: 1, textAlign: 'left' }}>
          Interpreted language, generally slower
        </Box>
      </Box>
      <Box sx={{ display: 'flex', border: '1px solid #ddd' }}>
        <Box sx={{ flex: 1, p: 1, borderRight: '1px solid #ddd' }}>Memory</Box>
        <Box
          sx={{
            flex: 2,
            p: 1,
            textAlign: 'left',
            borderRight: '1px solid #ddd',
          }}
        >
          Provides more control over memory management
        </Box>
        <Box sx={{ flex: 2, p: 1, textAlign: 'left' }}>
          Manages memory automatically
        </Box>
      </Box>
      <Box sx={{ display: 'flex', border: '1px solid #ddd' }}>
        <Box sx={{ flex: 1, p: 1, borderRight: '1px solid #ddd' }}>
          Application
        </Box>
        <Box
          sx={{
            flex: 2,
            p: 1,
            textAlign: 'left',
            borderRight: '1px solid #ddd',
          }}
        >
          System programming, low-level tasks
        </Box>
        <Box sx={{ flex: 2, p: 1, textAlign: 'left' }}>
          Web development, scientific computing, AI/ML
        </Box>
      </Box>
      <Box sx={{ display: 'flex', border: '1px solid #ddd' }}>
        <Box sx={{ flex: 1, p: 1, borderRight: '1px solid #ddd' }}>
          Error Handling
        </Box>
        <Box
          sx={{
            flex: 2,
            p: 1,
            textAlign: 'left',
            borderRight: '1px solid #ddd',
          }}
        >
          Less error-prone due to strong typing
        </Box>
        <Box sx={{ flex: 2, p: 1, textAlign: 'left' }}>
          More prone to errors due to weak typing
        </Box>
      </Box>
    </Box>
  );
}

function WhatIsPython() {
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
        INTRODUCTION
      </Typography>
      <Typography variant="h2">What is Python?</Typography>

      <Box sx={{ width: '100%', mt: '4rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.4rem',
          }}
        >
          {/* Python Logo */}

          <img src={pythonLogo} />
          <Box>
            <Typography mb={'2rem'}>
              Python is a high-level, interpreted, and general-purpose
              programming language. It was created by Guido van Rossum in the
              late 1980s and designed to emphasize readability and simplicity.
              The image on the left is Python's logo.
            </Typography>
            <Typography>
              Python is dynamically typed, supports multiple programming
              paradigms (such as object-oriented, procedural, and functional),
              and provides a rich standard library and many open-source
              libraries for a wide range of tasks, including data analysis,
              machine learning, and web development.
            </Typography>
          </Box>
        </Box>

        {/* C vs Python */}
        <Typography mt="7rem" variant="h4">
          How does Python compare with C?
        </Typography>
        <Typography mt="1rem">
          Python and C are two popular programming languages that have some key
          differences:
        </Typography>

        {/* C vs Python Table */}
        <CompareWithTable />

        <Typography mt="4rem">
          Both Python and C have their own strengths and weaknesses, and the
          choice between them depends on the specific requirements of a project.
        </Typography>
      </Box>
      <Proceed linkTo="/intro/comment" />
    </Container>
  );
}

export default WhatIsPython;
