import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CodeEditor from '../../components/CodeEditor';
import CodeOutput from '../../components/CodeOutput';
import CodeEditorWithOutput from '../../components/CodeEditorWithOutput';
import Proceed from '../../components/Proceed';

function Lists(props) {
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
        Data Structures
      </Typography>
      <Typography variant="h2">Lists</Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography mb="1rem">
          A list in Python is an ordered collection of items, which can be of
          any type (numbers, strings, other lists, etc.). Lists are created
          using square brackets <code>[]</code> and items are separated by
          commas <code>,</code>. The general syntax is:
        </Typography>

        <CodeEditor
          content={`# list = [item1, item2, item3, ...]`}
          height="75px"
          width="100%"
        />

        {/* Example */}
        <Typography mt="4rem" mb="1rem">
          For an example, let's make a list of fruits and place in a variable
          called <code>fruits</code>. Press <code>RUN CODE</code> to check the
          output. Also, do the mini-activity!
        </Typography>

        <CodeEditorWithOutput
          content={`fruits = ["apple", "banana", "cherry"]

# ----- MINI-ACTIVITY -----
# Try printing out "fruits" list
`}
          codeWidth={60}
          outputWidth={40}
          height="180px"
          title="true"
        />

        <Typography mt="4rem" mb="1rem">
          Earlier, we created a list that houses values that are strings. The
          example below shows lists of the values of other data types:
        </Typography>

        <CodeEditorWithOutput
          content={`list_of_numbers = [1, 3, 420, 69, 5]
list_of_floats = [1.0, 1.1, 6.9, 4.20, 42.0]
list_of_booleans = [True, False, False, True, True]

print(list_of_numbers)
print(list_of_floats)
print(list_of_booleans)
`}
          codeWidth={60}
          outputWidth={40}
          height="250px"
          title="true"
        />

        <Typography mt="4rem" mb="1rem">
          However, we can also have a list of different data type elements like
          this:
        </Typography>

        <CodeEditorWithOutput
          content={`mixed_list = [1, "Isaac", 3.69, True]

print(mixed_list)
`}
          codeWidth={60}
          outputWidth={40}
          height="150px"
          title="true"
        />

        {/* List Order Example */}
        <Typography mt="4rem" mb="2rem">
          Lists are ordered, which means that the items have a defined order and
          can be accessed using an index, starting from 0 for the first item.
          The syntax for accessing a specific item in a list is:{' '}
          <code>list[index_of_element]</code>.
        </Typography>

        <Typography mb="1rem">
          Let's say we want to choose the first element of the{' '}
          <code>fruits</code> list, which is <code>apple</code>. Take note that
          the index of the first element is <code>0</code> of the list. As your
          mini-activity, try out printing the 3rd element of the list!
        </Typography>

        <CodeEditorWithOutput
          content={`fruits = ["apple", "banana", "cherry"]

print(fruits[0])

# ----- MINI-ACTIVITY -----
# Try out printing the 3rd element of the list
`}
          codeWidth={70}
          outputWidth={30}
          height="270px"
          title="true"
        />

        {/* List Mutable Example */}

        <Typography mt="4rem" mb="1rem">
          Lists are mutable, which means that you can change the items in a list
          after it has been created. In this case, we are changing the 2nd
          element, <code>banana</code>, to <code>orange</code>. Also, do the
          mini-activity below!
        </Typography>

        <CodeEditorWithOutput
          content={`fruits = ["apple", "banana", "cherry"]

fruits[1] = "orange"
print(fruits)

# ----- MINI-ACTIVITY -----
# Try changing the 1st element in the list to "mango"


# Print the 1st element in the list

`}
          codeWidth={70}
          outputWidth={30}
          height="360px"
          title="true"
        />

        {/* append() */}
        <Typography mt="4rem" mb="1rem">
          Items can be added in the list by using the <code>append()</code>{' '}
          method. Here, we are adding <code>grapes</code> to our{' '}
          <code>fruits</code> list containing <code>apple</code> and{' '}
          <code>banana</code>. Do the mini-activity below!
        </Typography>

        <CodeEditorWithOutput
          content={`fruits = ["apple", "banana"]

fruits.append("grapes")
print(fruits)

# ----- MINI-ACTIVITY ----- 
# Add "lemon" to the "fruits" list using append()


# Print out the list
`}
          codeWidth={70}
          outputWidth={30}
          height="350px"
          title="true"
        />

        {/* len() */}
        <Typography mt="4rem" mb="1rem">
          You can get the size of the list (how many items in the list) by using
          the <code>len()</code> method. You just place the <code>fruits</code>{' '}
          list inside the <code>len()</code> method, and place that inside a{' '}
          <code>print()</code> to see its output. Do the mini-activity below as
          well!
        </Typography>

        <CodeEditorWithOutput
          content={`fruits = ["apple", "banana"]
print(len(fruits)) # Output: 2

# ----- MINI-ACTIVITY -----
# Append "grapes" in the fruits list.


# Print out the length of fruits now!
`}
          codeWidth={70}
          outputWidth={30}
          height="280px"
          title="true"
        />

        {/* List Operations */}
        <Typography mt="4rem" mb="1rem">
          Lists also support various operations such as concatenation,
          repetition, and membership testing using <code>+</code>,{' '}
          <code>*</code>, and <code>in</code> respectively. Examples are given
          below:
        </Typography>

        <CodeEditorWithOutput
          content={`fruits = ["apple", "banana"]

# merges the 2 lists
print("Using + with Lists:")
print(fruits + ["cherry", "orange"])
print() 

# multiplies the items in the list n times
print("Using * with Lists:")
print(fruits * 3)
print()

# checks if the element "apple" is in the fruits list
print("Using 'in' with Lists:")
print("apple" in fruits)
print()  

`}
          codeWidth={60}
          outputWidth={40}
          height="520px"
          title="true"
        />

        <Typography mt="4rem" mb="2rem">
          Now, apply your skills in the activity below!
        </Typography>

        {/* Activity */}

        <Typography fontWeight="bold" variant="h5" mb="1rem">
          Instruction:
        </Typography>
        <Typography mb="1rem">
          Follow the instructions inside the interactive code editor!
        </Typography>

        <CodeEditorWithOutput
          content={`# ----- ACTIVITY -----
# Create a list called "subjects" that contains "Math" and "CMSC".


# Print the length of the list you just created.


# Add in "ECON" in the list using append().


# Print the 2nd element in the list.


# Merge the subject with this list: ["KAS", "LIT"] using +.


# Print the list "subject".
`}
          codeWidth={70}
          outputWidth={30}
          height="600px"
          title="true"
        />
      </Box>

      <Proceed linkTo={props.linkTo} />
    </Container>
  );
}

export default Lists;
