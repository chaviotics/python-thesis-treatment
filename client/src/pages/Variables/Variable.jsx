import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CodeEditor from '../../components/CodeEditor';
import CodeOutput from '../../components/CodeOutput';
import CodeEditorWithOutput from '../../components/CodeEditorWithOutput';
import Proceed from '../../components/Proceed';

function Variable(props) {
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
        VARIABLES
      </Typography>
      <Typography variant="h2">Variables</Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography>
          A variable in Python is like a box where you can store values. Think
          of it like a label for the data you put inside. To create a variable,
          you give it a name and assign a value to it using the equals sign ({' '}
          <code>=</code> ). For example, check out the interactive code editor
          below, and click <code>RUN CODE</code>. Also, try and do the
          mini-activity in the interactive code editor.
        </Typography>

        <CodeEditorWithOutput
          content={`age = 10
print(age)

name = "Isaac"
print(name)

# ----- MINI-ACTIVITY -----

# Create a variable called "height_in_m" 
# that holds the value 1.8 below


# Print the variable "height_in_m"
`}
          codeWidth={60}
          outputWidth={40}
          height="420px"
          title="true"
        />

        <Typography mt="2rem">
          When you assign a value to a variable, Python{' '}
          <strong>
            automatically determines the data type based on the value you
            provide.
          </strong>{' '}
          For example, if you assign a number to a variable, it will be of type
          integer or float. If you assign text to a variable, it will be of type
          string.
        </Typography>

        {/* Using type() */}
        <Typography mt="4rem" mb="1rem">
          You can use the <code>type()</code> function to find out the data type
          of a variable or a value. Press <code>RUN CODE</code> to see the
          output below. Furthermore, do the mini-activity!
        </Typography>

        <CodeEditorWithOutput
          content={`age = 10
print(type(age))

name = "Isaac"
print(type(name))

# ----- MINI-ACTIVITY -----

height_in_m = 1.8

# Check the type of the variable "height_in_m" using type() 
`}
          codeWidth={80}
          outputWidth={20}
          height="400px"
          title="true"
        />

        <Typography mt="4rem" mb="1rem">
          What if we can place in expressions such as variables in our{' '}
          <code>print()</code> statements? Now knowing about variables, let's
          upgrade our knowledge of <code>print()</code> with the concept{' '}
          <strong>Formatted Strings</strong>!
        </Typography>

        {/* Formatted Strings */}
        <Typography mt="4rem" textAlign="center" variant="h3">
          Formatted Strings
        </Typography>

        <Typography mt="2rem" mb="1rem">
          Formatted strings, also known as f-strings, are a feature in Python
          3.6 and later versions that allow for easy string formatting. They
          start with the letter "<code>f</code>" and include curly braces{' '}
          <code>{`{}`}</code> containing expressions that are evaluated at
          runtime and then formatted into the string.
        </Typography>

        <Typography mt="2rem" mb="1rem" fontStyle="italic">
          In Python, an{' '}
          <u>
            <strong>expression</strong>
          </u>{' '}
          is a combination of values, variables, operators, and function calls
          that evaluates to a single value.
        </Typography>

        <Typography mt="2rem" mb="1rem">
          For example, consider the following code below, and press{' '}
          <code>RUN CODE</code> to see the output!
        </Typography>

        <CodeEditorWithOutput
          content={`name = "Isaac"
age = 25
print(f"My name is {name} and I am {age} years old.")
`}
          codeWidth={70}
          outputWidth={30}
          height="180px"
          title="true"
        />

        <Typography mt="2rem" mb="1rem">
          In code above, the f-string is used to embed the variables{' '}
          <code>name</code> and <code>age</code> within the string. The
          expressions inside the curly braces are evaluated at runtime and the
          resulting values are formatted into the string.
        </Typography>

        <Typography mt="4rem" mb="4rem">
          Formatted strings can also include expressions that call functions or
          perform arithmetic operations, making it easy to create complex
          strings with dynamic content. Overall, formatted strings provide a
          concise and readable way to insert variable values into a string in
          Python.
        </Typography>

        <Typography mb="2rem">
          Now, practice formatted strings with the mini-activity below. Print
          out this statement:{' '}
          <strong>
            "Edith is currently studying in The University of the Philippines"
          </strong>{' '}
          using f-strings and with the given variables below.
        </Typography>

        <CodeEditorWithOutput
          content={`# ----- MINI-ACTIVITY -----
name = "Edith"
school = "The University of the Philippines"

# Code your print() statement with f-string below here
`}
          codeWidth={70}
          outputWidth={30}
          height="300px"
          title="true"
        />
      </Box>

      <Proceed linkTo={props.linkTo} />
    </Container>
  );
}

export default Variable;
