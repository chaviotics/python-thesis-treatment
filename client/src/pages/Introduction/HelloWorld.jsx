import React from 'react';
import { Box, Container, Typography, List, ListItem } from '@mui/material';
import CodeEditorWithOutput from '../../components/CodeEditorWithOutput';
import Proceed from '../../components/Proceed';

function HelloWorld() {
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
      <Typography variant="h2">Hello, World!</Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography>
          Learning a new language wouldn’t feel right if you don’t print “Hello
          World!” Here’s how you can do it in Python.
        </Typography>

        <Typography mt="1rem" mb="1rem">
          Type in <code>print("Hello, World!")</code> in the code editor below
          under "Code" and press the <code>RUN CODE</code> button below to run
          your Python program.
        </Typography>

        <CodeEditorWithOutput
          content={``}
          codeWidth={50}
          outputWidth={50}
          height="300px"
          title="true"
        />

        <Typography pt="4rem">
          The <code>print()</code> function is used to output text or data to
          the console or terminal. It's a simple and powerful tool that can be
          used to display information, debug code, and communicate with the
          user.
        </Typography>

        <Typography pt="2rem">
          You can try out placing in other stuff inside the <code>print()</code>{' '}
          statement by coding in these in the code editor above:
        </Typography>

        <List>
          <ListItem>
            <Typography>
              ‣ <code>print(2+1)</code>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              ‣ <code>print(False)</code>
            </Typography>
          </ListItem>
        </List>
      </Box>

      <Proceed linkTo="/intro/comment" />
    </Container>
  );
}

export default HelloWorld;
