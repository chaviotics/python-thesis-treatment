import React from 'react';
import { Box, Container, Typography, List, ListItem } from '@mui/material';
import CodeEditor from '../../components/CodeEditor';
import CodeOutput from '../../components/CodeOutput';
import CodeEditorWithOutput from '../../components/CodeEditorWithOutput';
import Proceed from '../../components/Proceed';

function Functions(props) {
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
        FUNCTIONS
      </Typography>
      <Typography variant="h2">Functions</Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography mb="1rem">
          Functions are a way to group a block of code that can be reused
          multiple times throughout your program. Functions are essential to
          code reusability, as they allow you to avoid writing the same code
          over and over again. The syntax of a function looks like this:
        </Typography>

        {/* Syntax */}
        <CodeEditor
          content={`def function_name(parameter1, parameter2):
    # code to be executed
    # take note of the indentation
    return result
    `}
          height="160px"
          width="100%"
        />

        <Typography variant="h5" mt="2rem">
          Notes:
        </Typography>
        <List>
          <ListItem>
            <Typography>
              ‣ <code>def</code> keyword is used to define a function.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              ‣ <code>function_name</code> is the name of the function you are
              defining.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              ‣ <code>parameter1</code> and <code>parameter2</code> are the
              input values that the function accepts (they are optional).
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              ‣ The code to be executed is written inside the function (you can
              use any Python statements here).
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>‣ Take note of the indentation</Typography>
          </ListItem>
          <ListItem>
            <Typography>
              ‣ <code>return</code> statement is used to return a value from the
              function (it is optional).
            </Typography>
          </ListItem>
        </List>

        {/* Arguments and Paramaters */}
        <Typography variant="h4" mt="4rem" mb="1rem">
          Arguments and Parameters
        </Typography>

        <Typography mb="1rem">
          Parameters are the inputs that the function can accept, while
          arguments are the actual values passed to the function when it is
          called. In the example below, <code>a</code> and <code>b</code> are
          parameters (line 1) while <code>1</code> and <code>2</code> (line 4)
          are the arguments. Press <code>RUN CODE</code> to see the output!
        </Typography>

        <CodeEditorWithOutput
          content={`def add_numbers(a, b):
    return a + b

result = add_numbers(1, 2)
print(result)

# Use the function add_numbers(), and place in the values 419 and 68. Print its result.
`}
          codeWidth={60}
          outputWidth={40}
          height="320px"
          title="true"
        />

        {/* Function with no return */}
        <Typography variant="h4" mt="4rem" mb="1rem">
          Functions without the <code>return</code> Statement
        </Typography>

        <Typography mb="1rem">
          If you don't want your function to return a value, you can simply omit
          the <code>return</code> statement. The example below shows a function
          that prints a message to the console:
        </Typography>

        <CodeEditorWithOutput
          content={`def print_message():
    print("Hello, world!")

print_message()

# Try creating a for loop that calls print_message() 5 times!
`}
          codeWidth={60}
          outputWidth={40}
          height="340px"
          title="true"
        />

        {/* Other Examples */}
        <Typography variant="h4" mt="4rem" mb="1rem">
          Other Examples
        </Typography>
        <Typography mb="2rem">
          You can use functions in conjunction with other basic Python concepts
          such as data types, variables, conditional statements, arithmetic
          operators, lists, while loops, and for loops.
        </Typography>

        {/* Example 1 */}
        <Typography variant="h5" mt="2rem" mb="1rem">
          Example 1: Using Function in a Conditional Statement:
        </Typography>

        <CodeEditorWithOutput
          content={`def even_or_odd(number):
    if number % 2 == 0:
        print(f"{number} is an EVEN number.")
    else:
        print(f"{number} is an ODD number.")

even_or_odd(4)

# Try out different values such as 7, 11, 128 with the even_or_odd() function!

`}
          codeWidth={60}
          outputWidth={40}
          height="400px"
          title="true"
        />

        <Typography mt="2rem">
          In the example above, the function takes in a parameter{' '}
          <code>number</code>. This is used inside the <code>if</code> statement
          is used to check whether the number is even or odd within the
          function.
        </Typography>

        <Typography mt="2rem">
          The <code>%</code> operator is used to calculate the remainder of{' '}
          <code>number</code> divided by 2. If this remainder is equal to 0,
          then the number is even and the function prints "The number is EVEN".
          Otherwise, the number is odd and the function prints "The number is
          ODD".
        </Typography>

        {/* Example 2 */}
        <Typography variant="h5" mt="3rem" mb="1rem">
          Example 2: Using Function with a List and a Loop:
        </Typography>

        <CodeEditorWithOutput
          content={`def sum_list(numbers):
    total = 0
    for number in numbers:
        total += number
    return total

my_numbers1 = [1, 2, 3, 4, 5]
result1 = sum_list(my_numbers1)
print(result1)

# Create a list (of numeric values) on your own and use the sum_list() function!

`}
          codeWidth={60}
          outputWidth={40}
          height="500px"
          title="true"
        />

        <Typography mt="2rem">
          In the example above, the <code>sum_list()</code> function takes a
          list of numbers as input and returns the sum of all the numbers in the
          list.
        </Typography>

        <Typography mt="2rem">
          The function first initializes a variable called <code>total</code> to
          0. Then, it uses a for loop to iterate over each number in the input
          list, adding each number to the <code>total</code>. After the loop
          finishes, the function returns the final value of <code>total</code>{' '}
          as the output of the function.
        </Typography>

        <Typography mt="2rem"></Typography>

        <Typography mt="2rem">
          The program then demonstrates how to use the <code>sum_list()</code>{' '}
          function by calling it with the list <code>my_numbers1</code>. The
          results are stored in a variable called <code>result1</code>. Finally,
          the result is printed to the console using <code>print()</code> . The
          output will be the sum of the numbers in each of the list.
        </Typography>

        <Typography mt="2rem">
          I hope the last two examples highlight the modularity of functions,
          wherein we don't have to repeat writing the same code, and only call
          them when we need them.
        </Typography>
      </Box>

      <Proceed linkTo={props.linkTo} />
    </Container>
  );
}

export default Functions;
