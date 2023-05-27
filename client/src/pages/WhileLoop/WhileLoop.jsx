import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CodeEditor from '../../components/CodeEditor';
import CodeOutput from '../../components/CodeOutput';
import CodeEditorWithOutput from '../../components/CodeEditorWithOutput';
import Proceed from '../../components/Proceed';

function WhileLoop() {
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
      <Typography variant="h2">While Loop</Typography>

      <Box sx={{ weight: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography mb="1rem">
          A <code>while</code> loop in Python is used to repeatedly execute a
          block of code as long as a given condition is <code>True</code>. The
          general syntax is:
        </Typography>

        <CodeEditor
          content={`while condition == True:
    # code to be executed as long as the condition is True
    # take note of the indentation
    `}
          height="120px"
          width="100%"
        />

        <Typography mt="2rem" mb="1rem">
          In the code above, <code>condition</code> is a boolean
          variable/expression that is evaluated before each iteration of the
          loop. The loop continues to run as long as the condition remains{' '}
          <code>True</code>.
        </Typography>

        {/* Code Example 1 */}

        <Typography mt="4rem" mb="1rem">
          Let's consider the code below, and press <code>RUN CODE</code> to see
          the output!
        </Typography>

        <CodeEditorWithOutput
          content={`count = 0

while count < 5:
    print(count)
    count += 1
`}
          codeWidth={50}
          outputWidth={50}
          height="200px"
          title="true"
        />

        <Typography mt="2rem" mb="1rem">
          Initially, a variable called <code>count</code> is set to 0. Then, a{' '}
          <code>while</code> loop is used to check if the value of{' '}
          <code>count</code> is less than 5. As long as this condition is true,
          the loop will continue to execute.
        </Typography>

        <Typography mt="2rem" mb="4rem">
          Within the loop, the current value of <code>count</code> is printed
          using the
          <code>print()</code> function, and then count is incremented by 1
          using the <code>+=</code> operator. This process repeats until count
          reaches a value of 5, at which point the loop exits.
        </Typography>

        {/* Infinite Loop */}
        <Typography mt="2rem" mb="1rem">
          It's important to make sure that the condition eventually becomes{' '}
          <code>False</code> so that the loop terminates, otherwise it will
          result in an <strong>infinite loop</strong>. For example:
        </Typography>

        <Box
          sx={{
            mt: '1rem',
            mb: '1rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <CodeEditor
            content={`count = 1

while count > 0:
    print(count)
    count += 1
`}
            height="200px"
            width="50%"
            title="true"
          />

          <CodeOutput
            content={Array.from({ length: 100 }, (_, i) => i + 1).join('\n')}
            height="200px"
            width="50%"
            title="true"
          />
        </Box>

        <Typography mt="2rem" mb="1rem">
          In the code above, you can see that the condition will always be true,
          since even the initial number is greater than 0. This program will
          print out an infinite sequence of numbers starting from 1.
        </Typography>

        <Typography mt="2rem" mb="1rem">
          The variable <code>count</code> is initialized to 1, and then a{' '}
          <code>while</code> loop is used to check if the value of{' '}
          <code>count</code> is greater than 0. Since 1 is always greater than
          0, the condition is always true, and the loop will continue to execute
          indefinitely.
        </Typography>

        <Typography mt="2rem" mb="1rem">
          In the output, it may just be up to 100, but it can go on and on
          unless you stop the code from running. Hence, you be careful with
          infinite loops as this can cause your program to stop responding or to
          crash!
        </Typography>

        <Typography mt="2rem" mb="1rem">
          Notice that I didn't use the interactive code editor. It's because if
          I try to do an infinite loop, it would cause a crash in this web page!
        </Typography>

        {/* Break & Continue Statements */}

        <Typography mt="6rem" mb="2rem" variant="h3" textAlign="center">
          <code>break</code> and <code>continue</code>
        </Typography>

        <Typography mt="1rem" mb="1rem">
          In Python, <code>break</code> and <code>continue</code> are two
          control flow statements that can be used inside loops to change the
          behavior of the loop.
        </Typography>

        {/* Break Statement */}
        <Typography mt="2rem" variant="h4">
          The <code>break</code> Statement
        </Typography>
        <Typography mt="1rem" mb="2rem">
          When executed inside a loop, the <code>break</code> statement causes
          the loop to terminate immediately and the control is transferred to
          the next statement outside the loop. It is commonly used to exit a
          loop when a certain condition is met.
        </Typography>

        <Typography mt="1rem" mb="1rem">
          Consider the code below:
        </Typography>

        <CodeEditorWithOutput
          content={`i = 0

while i < 10:
    print(i)
    if i == 5:
        break
    i += 1
`}
          codeWidth={50}
          outputWidth={50}
          height="240px"
          title="true"
        />

        <Typography mt="2rem" mb="1rem">
          In this example above, we start with <code>i = 0</code> and use a{' '}
          <code>while</code> loop to print the value of <code>i</code> on each
          iteration. We use the <code>break</code> statement to exit the loop
          when <code>i == 5</code>, so the loop will only run for the first 6
          iterations.
        </Typography>

        {/* Continue Statement */}
        <Typography mt="4rem" variant="h4">
          The <code>continue</code> Statement
        </Typography>
        <Typography mt="1rem" mb="2rem">
          When executed inside a loop, the <code>continue</code> statement
          causes the loop to skip the rest of the current iteration and move on
          to the next iteration. It is commonly used to skip over certain values
          in a loop, or to execute a certain block of code only when a certain
          condition is met.
        </Typography>

        <Typography mt="1rem" mb="1rem">
          Consider the code below:
        </Typography>

        <CodeEditorWithOutput
          content={`i = 0

while i < 10:
    i += 1
    if i % 2 == 0:
        continue
    print(i)
`}
          codeWidth={50}
          outputWidth={50}
          height="240px"
          title="true"
        />

        <Typography mt="2rem" mb="1rem">
          In this example, we start with <code>i = 0</code> and use a{' '}
          <code>while</code> loop to increment the value of <code>i</code> on
          each iteration. We use the <code>continue</code> statement to skip
          over even values of <code>i</code> and only print odd values. So the
          loop will print the values 1, 3, 5, 7, and 9.
        </Typography>

        {/* Activity */}

        <Typography mt="4rem" mb="2rem">
          Now, apply your skills in the activity below!
        </Typography>

        <Typography fontWeight="bold" variant="h5" mb="1rem">
          Instruction:
        </Typography>
        <Typography mb="1rem">
          Create a program that prints even numbers from 0 to 10 using a{' '}
          <code>while</code> loop. Follow along the comments inside the
          interactive code editor.
        </Typography>

        <Typography mb="1rem">
          <em>Note: Mind the indentation.</em>
        </Typography>

        <CodeEditorWithOutput
          content={`# Create a variable "number" that holds the value 0.


# Create the while statement with the condition: number < 10. Don't forget the colon at the end!


    # Increment number by 1

    
    # Create a conditional statement that checks if the number is odd with this condition: number % 2 != 0. (Mind the colon at the end of the if-statement)


        # Place the continue statement. This skips the odd numbers.
    

    # Output the even number

`}
          codeWidth={70}
          outputWidth={30}
          height="620px"
          title="true"
        />
      </Box>

      <Proceed linkTo="/forloop" />
    </Container>
  );
}

export default WhileLoop;
