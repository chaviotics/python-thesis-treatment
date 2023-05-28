import React from 'react';
import { Box, Container, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// memes
import hackerman from '../../assets/memes/meme-hackerman.jpg';
import learningPython from '../../assets/memes/meme-learning-python.jpg';
import techSupport from '../../assets/memes/meme-tech-support.jpg';
import whileLoop from '../../assets/memes/meme-while-loop.jpg';
import humorHomework from '../../assets/memes/memes-humor-homework.jpg';

function Meme(props) {
  const handleProceed = () => {
    window.scrollTo(0, 0);
  };

  const memes = {
    hackerman,
    learningPython,
    techSupport,
    whileLoop,
    humorHomework,
  };

  const memeContent = memes[props.memeContent];

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
      <Typography variant="h4" fontWeight="bold">
        Meme Time! 😁
      </Typography>

      <Typography justifySelf="left" mb="2rem">
        Hello Isko/Iska! For reaching this far, you earned this meme:
      </Typography>

      {/* image */}
      <Box sx={{ height: '55vh' }}>
        <img
          style={{ width: '100%', height: '100%' }}
          src={memeContent}
          alt="Meme"
        />
      </Box>

      {/* button */}
      <Button
        component={Link}
        sx={{ alignSelf: 'center', width: '300px', mt: '4rem' }}
        size="large"
        variant="contained"
        to={props.linkTo}
        onClick={handleProceed}
      >
        Proceed
      </Button>

      <Typography
        sx={{
          fontSize: 'small',
          fontStyle: 'italic',
          textAlign: 'center',
          mt: '.5rem',
          mb: '7rem',
        }}
      >
        Reminders: Please <strong>DO NOT</strong> go back to the previous page.
      </Typography>
    </Container>
  );
}

export default Meme;
