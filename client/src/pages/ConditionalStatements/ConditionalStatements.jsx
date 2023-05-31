import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CodeEditor from '../../components/CodeEditor';
import CodeOutput from '../../components/CodeOutput';
import CodeEditorWithOutput from '../../components/CodeEditorWithOutput';
import Proceed from '../../components/Proceed';
import NoteForScroll from '../../components/NoteForScroll';

function ConditionalStatements(props) {
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
        CONDITIONAL STATEMENTS
      </Typography>
      <Typography variant="h2">
        <code>if</code>-<code>else</code> Statements
      </Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography>
          Conditional statements (<em>also called if-else statements</em>) allow
          you to control the flow of your program based on certain conditions.
          They allow you to make decisions in your code and execute different
          blocks of code depending on the results of the conditions.
        </Typography>

        <Typography mt="2rem" mb="1rem">
          The basic syntax of a conditional statement in Python is as follows:
        </Typography>

        <CodeEditor
          content={`if condition == True:
    # run this code if the condition is True
    # take note of the indentation
`}
          height="150px"
          width="100%"
        />

        <Typography mt="2rem" mb="2rem">
          Here, <code>condition</code> is a expression that evaluates to either{' '}
          <code>True</code> or <code>False</code>. If the <code>condition</code>{' '}
          is <code>True</code>, the code indented under the <code>if</code>{' '}
          statement will be executed. If it's <code>False</code>, the indented
          code will be skipped.
        </Typography>

        <Typography mt="2rem" mb="4rem" fontStyle="italic">
          <strong>Note:</strong> The <code>==</code> operator is a comparison
          operator that checks whether two values are equal. When the{' '}
          <code>==</code> operator is used, it returns a Boolean value of{' '}
          <code>True</code> if the values being compared are equal, and{' '}
          <code>False</code> if they are not equal.
        </Typography>

        {/* <NoteForScroll /> */}

        {/* 1st Example */}

        <Typography mb="2rem">
          Press <code>RUN CODE</code> in the interactive code editor below!
        </Typography>

        <Typography mb="1rem">For example:</Typography>

        <CodeEditorWithOutput
          content={`# Try changing the value of "age"!
age = 20

if age >= 18:
    print("You are old enough to vote.")
`}
          codeWidth={60}
          outputWidth={40}
          height="200px"
          title="true"
        />

        <Typography mt="2rem" mb="4rem">
          In the example above, the <code>condition</code>{' '}
          <code>age &gt;= 18</code> checks if the value of <code>age</code> is
          greater than or equal to 18. If it is, the code inside the{' '}
          <code>if</code> statement will be executed and the message "You are
          old enough to vote." will be printed.{' '}
          <em>
            Check out what happens when age is less than 18 (ex. 1, 9, 17)!
          </em>
        </Typography>

        {/* 2nd Example */}
        <Typography mt="2rem" mb="1rem">
          You can also use an <code>else</code> statement to specify what should
          happen if the <code>condition</code> is <code>False</code>:
        </Typography>

        <CodeEditorWithOutput
          content={`# Try changing the value of "age"!
age = 15

if age >= 18:
    print("You are old enough to vote.")
else:
    print("You are not old enough to vote.")
`}
          codeWidth={60}
          outputWidth={40}
          height="240px"
          title="true"
        />

        <Typography mt="2rem" mb="4rem">
          In the example above, if the value of <code>age</code> is greater than
          or equal to 18, the first message will be printed. If not, the second
          message will be printed.
        </Typography>

        {/* 3rd Example */}
        <Typography mb="1rem">
          Also, you can even add multiple conditions using <code>elif</code>{' '}
          (Python's version of "else if") statements:
        </Typography>

        <CodeEditorWithOutput
          content={`# Try changing the value of "age"!
age = 20 

if age < 18:
    print("You are a minor.")
elif age >= 18 and age < 21:
    print("You are an adult but not old enough to drink.")
else:
    print("You are an adult and can drink.")
`}
          codeWidth={60}
          outputWidth={40}
          height="320px"
          title="true"
        />

        <Typography mt="2rem" mb="4rem">
          In the example above, the code checks multiple conditions to determine
          the age group of the person. Depending on the result of these
          conditions, different messages will be printed.
        </Typography>

        {/* Notes */}

        <Typography fontStyle="italic" mb="1rem">
          In Python, you can use the <code>and</code>, <code>or</code> and{' '}
          <code>not</code> logical operators in conditional statements.
        </Typography>

        <Typography fontStyle="italic" mb="4rem">
          Also, you can enclose the conditions using parenthesis <code>()</code>
          . For example, <code>age == 18</code> and <code>(age == 18)</code> are
          both valid syntax in Python.
        </Typography>

        {/* Activity */}

        <Typography mt="4rem" mb="2rem">
          Now, apply your skills in the activity in the interactive code editor
          below!
        </Typography>

        <Typography fontWeight="bold" variant="h5" mb="1rem">
          Instruction:
        </Typography>
        <Typography mb="1rem">
          Create a program that compares the two numeric variables{' '}
          <code>x</code> and <code>y</code> and prints out which number is
          greater. There should be 3 outputs: (1){' '}
          <strong>"x is greater than y."</strong>, (2)
          <strong>"x is less than y."</strong>, and (3){' '}
          <strong>"x is equal to y"</strong>.
        </Typography>

        <Typography mb="2rem">
          <em>
            Hint: You'll be using the <code>if</code>, <code>elif</code> and{' '}
            <code>else</code> statements.
          </em>
        </Typography>

        <CodeEditorWithOutput
          content={`# ----- ACTIVITY -----
# You can change the x and y values to check your work
x = 1
y = 2

# Write your conditional statements below here
`}
          codeWidth={70}
          outputWidth={30}
          height="400px"
          title="true"
        />
      </Box>

      <Proceed linkTo={props.linkTo} />
    </Container>
  );
}

export default ConditionalStatements;
