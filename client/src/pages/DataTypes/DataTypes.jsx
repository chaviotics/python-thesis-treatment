import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
} from '@mui/material';
import dataTypesList from './basicDataTypes';
import CodeEditor from '../../components/CodeEditor';
import CodeOutput from '../../components/CodeOutput';
import CodeEditorWithOutput from '../../components/CodeEditorWithOutput';
import Proceed from '../../components/Proceed';

function DataTypesList() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        pt: '2rem',
      }}
    >
      <Box
        sx={{
          alignSelf: 'center',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 400px)',
          // gridAutoRows: '300px',
          gap: '32px',
          mb: 7,
        }}
      >
        {dataTypesList.map((dataType) => (
          <Paper
            key={dataType.id}
            elevation={5}
            sx={{
              p: '3rem',
              transition: 'all 0.2s',
              color: '#0b3c53',
              cursor: 'default',
            }}
          >
            <Typography
              mb="1rem"
              textAlign="center"
              variant="h5"
              fontWeight="bold"
            >
              {dataType.type}
            </Typography>
            <Typography mb="0.8rem" textAlign="justify">
              {dataType.description}
            </Typography>
            <Typography variant="h6">Examples: </Typography>

            <List>
              {dataType.examples.map((example, index) => (
                <ListItem key={index}>
                  <Typography>
                    {'‣ '}
                    {example}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

function DataTypes(props) {
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
        DATA TYPES
      </Typography>
      <Typography variant="h2">Basic Data Types</Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography>
          In Python, there are several different kinds of data, or "types", that
          you can work with. Some of the most common and basic data types
          include:
        </Typography>

        {/* Data Types List */}
        <DataTypesList />

        <Typography>
          These data types are fundamental building blocks of Python programs
          and are used extensively in many different applications. In addition
          to these basic data types, Python also has more complex data types
          such as lists, tuples, dictionaries, sets, and more. But that’s a
          topic for another time 😊
        </Typography>

        {/* type() */}
        <Typography mt="4rem" textAlign="center" variant="h3">
          The <code>type()</code> Function
        </Typography>

        <Typography mt="2rem" mb="1rem">
          In Python, you can check the data type of the value by using the
          built-in function <code>type()</code>. To see its output, place it in
          a <code>print()</code> such as the first example in the interactive
          code editor below.
        </Typography>

        <Typography mb="1rem">
          Do the mini-activity in the interactive code editor! Try out checking
          the data type for the values of <code>6.9</code>, <code>True</code>{' '}
          and <code>420</code>.
        </Typography>

        <CodeEditorWithOutput
          content={`# Below is the data type of "hello" 
print(type("hello")) 

# ----- MINI-ACTIVITY -----
# Check the type of 6.9


# Check the type of True


# Check the data type of 420
`}
          codeWidth={60}
          outputWidth={40}
          height="360px"
          title="true"
        />
      </Box>

      <Typography px="4rem" mt="2rem" fontSize="90%" fontStyle="italic">
        Note: If you accidentally pressed the <code>CLEAR CODE</code> button,
        you can undo it by pressing <code>CTRL + Z</code> on your keyboard while
        your mouse cursor is active in the code editor.
      </Typography>

      <Proceed linkTo={props.linkTo} />
    </Container>
  );
}

export default DataTypes;
