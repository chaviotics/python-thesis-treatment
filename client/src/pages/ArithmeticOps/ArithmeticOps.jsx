import React from 'react';
import { Box, Container, Typography, List, ListItem } from '@mui/material';
import CodeEditor from '../../components/CodeEditor';
import CodeOutput from '../../components/CodeOutput';
import CodeEditorWithOutput from '../../components/CodeEditorWithOutput';
import Proceed from '../../components/Proceed';
import NoteForScroll from '../../components/NoteForScroll';

const operations = [
  { id: 1, operation: `Addition`, operator: `+` },
  { id: 2, operation: `Subtraction`, operator: `-` },
  { id: 3, operation: `Multiplication`, operator: `*` },
  { id: 4, operation: `Division`, operator: `/` },
  { id: 5, operation: `Floor Division`, operator: `//` },
  { id: 6, operation: `Modulo`, operator: `%` },
  { id: 7, operation: `Exponentiation`, operator: `**` },
];

function ArithmeticOps(props) {
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
        ARITHMETIC OPERATIONS
      </Typography>
      <Typography variant="h2">Arithmetic Operations</Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography>
          In Python, arithmetic operations are performed using the following
          operators:
        </Typography>
        {/* Operators List */}
        <List>
          {operations.map((op) => (
            <ListItem key={op.id}>
              <Typography>
                {'‣ '} {op.operation} {` ( `}
                <code>{op.operator}</code> {' ) '}
              </Typography>
            </ListItem>
          ))}
        </List>
        {/* Examples in Code Editor */}
        <Typography mt="2rem" mb="2rem">
          Below are some examples of how to perform these operations. Click{' '}
          <code>RUN CODE</code> in the interactive code editor to see the
          output.
        </Typography>

        <CodeEditorWithOutput
          content={`# Addition
add = 3 + 5
print(f"3 + 5 = {add}")
  
# Subtraction
sub = 10 - 5
print(f"10 - 5 = {sub}")
  
# Multiplication
mul = 3 * 5
print(f"3 * 5 = {mul}")
  
# Division
div = 10 / 3
print(f"10 / 3 = {div}")
  
# Floor Division
floor_div = 10 // 3
print(f"10 // 3 = {floor_div}")
  
# Modulo
mod = 10 % 3
print(f"10 % 3 = {mod}")
  
# Exponentiation
exp = 3 ** 2
print(f"3 ** 2 = {exp}")

`}
          codeWidth={60}
          outputWidth={40}
          height="760px"
          title="true"
        />

        {/* Example */}

        <Typography mt="4rem" mb="2rem">
          Try getting the value of <code>1 + 2 - 3 * 4 / 5 ** 6</code>! Place it
          in the <code>print()</code> in the interactive code editor below.
        </Typography>

        <CodeEditorWithOutput
          content={`
`}
          codeWidth={70}
          outputWidth={30}
          height="120px"
          title="true"
        />

        {/* Shorthand Operators */}
        <Typography mt="6rem" textAlign="center" variant="h3">
          Shorthand Operators
        </Typography>

        <Typography mt="2rem" mb="1rem">
          In Python, shorthand operators are used to combine an arithmetic
          operation and an assignment in a single step. They are useful for
          writing more concise and readable code.
        </Typography>

        <Typography mt="2rem" mb="1rem">
          For example, instead of writing:
        </Typography>

        <CodeEditor content={`x = x + 2\n`} height="75px" width="100%" />

        <Typography mt="2rem" mb="1rem">
          We can use the shorthand operator <code>+=</code> to write:
        </Typography>

        <CodeEditor content={`x += 2\n`} height="75px" width="100%" />

        <Typography mt="2rem" mb="1rem">
          This performs the same operation as the first example, but in a more
          concise way. Here are some more examples of shorthand operators in
          Python:
        </Typography>

        <CodeEditor
          content={`x -= 3   # same as x = x - 3
y *= 4   # same as y = y * 4
z /= 2   # same as z = z / 2
`}
          height="150px"
          width="100%"
        />

        {/* Examle */}

        <Typography mt="4rem" mb="1rem">
          Let's now give a concrete example. Consider the code below and press{' '}
          <code>RUN CODE</code>.
        </Typography>

        <CodeEditorWithOutput
          content={`x = 5
x += 3 # shorthand operator for x = x + 3

print(x)
`}
          codeWidth={60}
          outputWidth={40}
          height="150px"
          title="true"
        />

        <Typography mt="2rem">
          In this example, the <code>+=</code> operator is used to add the value
          3 to the variable <code>x</code>. The result is 8, which is then
          assigned back to the variable <code>x</code>. When the code is
          executed, the output will be 8.
        </Typography>

        <Typography mt="4rem">
          Here are other examples. Do the mini-activity below!
        </Typography>

        <CodeEditorWithOutput
          content={`y = 10
y -= 5  # shorthand operator for y = y - 5
print(y)

# ----- MINI-ACTIVITY -----
z = 2

# Multiply the value of z with 3 
# using the shorthand operator 


print(z)
`}
          codeWidth={70}
          outputWidth={30}
          height="360px"
          title="true"
        />

        <Typography fontStyle="italic" mt="4rem">
          We will be using more of shorthand operators in later part of this
          tutorial.
        </Typography>

        {/*  */}
      </Box>

      <Proceed linkTo={props.linkTo} />
    </Container>
  );
}

export default ArithmeticOps;
