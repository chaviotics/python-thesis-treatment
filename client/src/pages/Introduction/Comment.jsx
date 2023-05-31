import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CodeEditorWithOutput from '../../components/CodeEditorWithOutput';
import Proceed from '../../components/Proceed';

function Comment(props) {
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
      <Typography variant="h2">Commenting</Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography>
          Comments in Python are notes that you add to your code to explain what
          it does. They are ignored by the computer when the code is ran, but
          they help you and others understand what your code is doing.
        </Typography>
        <Typography mt="2rem" mb="2rem">
          In Python, you can add a comment by starting a line with the{' '}
          <code>#</code> symbol. Everything after the <code>#</code> symbol on
          that line will be treated as a comment. Check out the code editor
          below:
        </Typography>

        <CodeEditorWithOutput
          content={`# This is a comment
# It won't be run by the computer
# But it can help explain what's going on

# For example:

print("Hello awesome person!") 
# The line above prints a greeting to the console`}
          codeWidth={70}
          outputWidth={30}
          height="300px"
          title="true"
        />

        <Typography px="4rem" mt="2rem" fontSize="90%" fontStyle="italic">
          Note: If you accidentally pressed the <code>CLEAR CODE</code> button,
          you can undo it by pressing <code>CTRL + Z</code> on your keyboard
          while your mouse cursor is active in the code editor.
        </Typography>

        <Typography mt="4rem" mb="2rem">
          Just for practice, do the mini-activity below! Comment below the last
          line what the title of the song is. If you don't know, then comment,
          "I don't know".
        </Typography>

        <CodeEditorWithOutput
          content={`print("Is this the real life?")\nprint("Is this just fantasy?")

# ----- MINI-ACTIVITY ----- 
# Write your comment here below
`}
          codeWidth={60}
          outputWidth={40}
          height="300px"
          title="true"
        />

        <Typography mt="4rem" mb="2rem" fontStyle="italic">
          Note:{' '}
          <strong>
            <u>Mini-activities</u>
          </strong>{' '}
          and{' '}
          <strong>
            <u>activities</u>
          </strong>{' '}
          throughout this tutorial are not mandatory, but they are strongly
          recommended to enhance your learning experience.
        </Typography>
      </Box>

      <Proceed linkTo={props.linkTo} />
    </Container>
  );
}

export default Comment;
