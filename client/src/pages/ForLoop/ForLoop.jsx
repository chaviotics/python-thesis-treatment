import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CodeEditor from '../../components/CodeEditor';
import CodeOutput from '../../components/CodeOutput';
import CodeEditorWithOutput from '../../components/CodeEditorWithOutput';
import Proceed from '../../components/Proceed';

function ForLoop(props) {
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
        LOOPS
      </Typography>
      <Typography variant="h2">For Loop</Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography mb="1rem">
          In Python, a <code>for</code> loop is used to iterate over a sequence
          of elements, such as a list or a string. The syntax for a{' '}
          <code>for</code> loop is as follows:
        </Typography>

        <CodeEditor
          content={`for variable in sequence:
    # code block to be executed on each iteration
    # take note of the indentation
`}
          height="150px"
          width="100%"
          title="true"
        />

        <Typography mt="2rem" mb="4rem">
          In this syntax, <code>variable</code> is a variable name that is
          assigned each element of the <code>sequence</code> on each iteration
          of the loop. The code block inside the loop is executed once for each
          element in the sequence.
        </Typography>

        {/* Examples */}

        <Typography mt="2rem" mb="1rem">
          Here are some examples of using for loops in Python:
        </Typography>

        {/* Example 1 */}
        <Typography variant="h5" fontWeight="bold" mt="2rem" mb="1rem">
          Example 1: Using a <code>for</code> loop to iterate through a range of
          numbers
        </Typography>

        <Typography mt="2rem" mb="1rem">
          In this example, we use the <code>range()</code> function to generate
          a sequence of numbers from 0 to 3 (because <code>range(4)</code>{' '}
          generates a sequence up to, but not including, 4). The{' '}
          <code>for</code> loop then iterates over this sequence and prints each
          number.
        </Typography>

        <Typography mt="1rem" mb="1rem">
          Do the mini-activity below!
        </Typography>

        <CodeEditorWithOutput
          content={`for i in range(4):
  print(i)


print()

# ----- MINI-ACTIVITY -----
# Try printing out the numbers from 0 to 7 using a for loop
`}
          codeWidth={60}
          outputWidth={40}
          height="400px"
          title="true"
        />

        {/* Example 2 */}
        <Typography variant="h5" fontWeight="bold" mt="4rem">
          Example 2: Using a <code>for</code> loop to iterate through a list of
          items
        </Typography>

        <Typography mt="2rem" mb="1rem">
          In this example, we create a list of fruit names and use a{' '}
          <code>for</code> loop to iterate over the list and print each fruit
          name.
        </Typography>

        <Typography mt="1rem" mb="1rem">
          Do the mini-activity below!
        </Typography>

        <CodeEditorWithOutput
          content={`fruits = ['apple', 'banana', 'cherry']

for fruit in fruits:
    print(fruit)

print()

# ----- MINI-ACTIVITY -----
subjects = ["Math", "Science", "Filipino", "English"]

# Try printing out all the contents in the "subjects" list using a for loop
`}
          codeWidth={70}
          outputWidth={30}
          height="420px"
          title="true"
        />

        {/* Example 3 */}
        <Typography variant="h5" fontWeight="bold" mt="4rem">
          Example 3: Using a <code>for</code> loop to iterate through a string
        </Typography>

        <Typography mt="2rem" mb="1rem">
          In this example, we use a for loop to iterate over each character in
          the string and print it.
        </Typography>

        <Typography mt="1rem" mb="1rem">
          Do the mini-activity below!
        </Typography>

        <CodeEditorWithOutput
          content={`word = "Python"

for letter in word:
    print(letter)

print()

# ----- MINI-ACTIVITY -----
string = "abcde12345!@#$%"

# Try printing out all the contents in the "string" variable using a for loop
`}
          codeWidth={60}
          outputWidth={40}
          height="430px"
          title="true"
        />

        {/* Break & Continue */}

        <Typography mt="6rem" mb="2rem" variant="h3" textAlign="center">
          <code>break</code> and <code>continue</code> in <code>for</code> loops
        </Typography>

        <Typography>
          Similar to what we learned in <code>while</code> loops,{' '}
          <code>break</code> and <code>continue</code> statements can also be
          used with for <code>loops</code> in Python. Again these two control
          flow statements can be used inside loops to change the behavior of the
          loop.
        </Typography>

        {/* Break */}

        <Typography mt="2rem" variant="h4">
          The <code>break</code> Statement
        </Typography>
        <Typography variant="h5" fontWeight="bold" mt="2rem" mb="1rem">
          Example: Using <code>break</code> to exit a loop early
        </Typography>

        <Typography mt="1rem" mb="1rem">
          In this example, we create a list of fruit names and use a{' '}
          <code>for</code> loop to iterate over the list and print each fruit
          name. We use the <code>break</code> statement to exit the loop when
          the loop variable <code>fruit</code> is equal to <code>'grapes'</code>
          , so the loop will only print the first four fruit names, and not
          continue with rest.
        </Typography>

        <CodeEditorWithOutput
          content={`fruits = ['apple', 'banana', 'cherry', 'grapes', 'orange']

for fruit in fruits:
    print(fruit)
    if fruit == 'grapes':
        break
`}
          codeWidth={80}
          outputWidth={20}
          height="220px"
          title="true"
        />

        {/* Continue */}
        <Typography mt="4rem" variant="h4">
          The <code>continue</code> Statement
        </Typography>
        <Typography variant="h5" fontWeight="bold" mt="2rem" mb="1rem">
          Example : Using <code>continue</code> to skip over some iterations
        </Typography>

        <Typography mt="1rem" mb="1rem">
          In this example, we create a list of fruit names and use a{' '}
          <code>for</code> loop to iterate over the list and print each fruit
          name. We use the <code>continue</code> statement to skip over the
          fruit name 'cherry', and print all the other fruit names.
        </Typography>

        <CodeEditorWithOutput
          content={`fruits = ['apple', 'banana', 'cherry', 'grapes', 'orange']

for fruit in fruits:
    if fruit == 'cherry':
        continue
    print(fruit)
`}
          codeWidth={80}
          outputWidth={20}
          height="220px"
          title="true"
        />
      </Box>

      <Proceed linkTo={props.linkTo} />
    </Container>
  );
}

export default ForLoop;
