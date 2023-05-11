import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CodeEditor from '../../components/CodeEditor';
import CodeOutput from '../../components/CodeOutput';
import Proceed from '../../components/Proceed';

function Lists() {
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
        <Typography mt="4rem">
          For an example, let's make a list of fruits and place in a variable
          called <code>fruits</code>. It would look like this:
        </Typography>

        <Box
          sx={{
            mt: '1rem',
            mb: '4rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <CodeEditor
            content={`fruits = ["apple", "banana", "cherry"]\n\nprint(fruits)\n`}
            height="120px"
            width="60%"
            title="true"
          />

          <CodeOutput
            content={`['apple', 'banana', 'cherry']`}
            height="120px"
            width="40%"
            title="true"
          />
        </Box>

        <Typography mt="4rem">
          The example below shows a lists of single data type elements:
        </Typography>

        <CodeEditor
          content={`list_of_numbers = [1, 3, 420, 69, 5]
list_of_floats = [1.0, 1.1, 6.9, 4.20, 42.0]
list_of_booleans = [True, False, False, True, True]
`}
          height="120px"
          width="100%"
        />

        <Typography mt="4rem">
          However, we can also have a list of different data type elements like
          this:
        </Typography>

        <Box
          sx={{
            mt: '1rem',
            mb: '4rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <CodeEditor
            content={`mixed_list = [1, "Isaac", 3.69, True]

print(mixed_list)
`}
            height="120px"
            width="60%"
            title="true"
          />
          <CodeOutput
            content={`[1, 'Isaac', 3.69, True]`}
            height="120px"
            width="40%"
            title="true"
          />
        </Box>

        {/* List Order Example */}
        <Typography mt="4rem" mb="4rem">
          Lists are ordered, which means that the items have a defined order and
          can be accessed using an index, starting from 0 for the first item.
          The syntax for accessing a specific item in a list is:{' '}
          <code>list[index_of_element]</code>.
        </Typography>

        <Typography mb="1rem">
          Let's say we want to choose the first element of the{' '}
          <code>fruits</code> list, which is <code>apple</code>. Take note that
          the index of the first element is <code>0</code> of the list. We would
          do it like this:
        </Typography>

        <Box
          sx={{
            mt: '1rem',
            mb: '4rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <CodeEditor
            content={`fruits = ["apple", "banana", "cherry"]\n\nprint(fruits[0])\n`}
            height="120px"
            width="60%"
            title="true"
          />

          <CodeOutput
            content={`apple`}
            height="120px"
            width="40%"
            title="true"
          />
        </Box>

        {/* List Mutable Example */}

        <Typography mt="4rem" mb="1rem">
          Lists are mutable, which means that you can change the items in a list
          after it has been created. In this case, we are changing the 2nd
          element, <code>banana</code>, to <code>orange</code>.
        </Typography>

        <Box
          sx={{
            mt: '1rem',
            mb: '4rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <CodeEditor
            content={`fruits = ["apple", "banana", "cherry"]

fruits[1] = "orange"
print(fruits)
`}
            height="150px"
            width="60%"
            title="true"
          />

          <CodeOutput
            content={`['apple', 'orange', 'cherry']`}
            height="150px"
            width="40%"
            title="true"
          />
        </Box>

        {/* append() */}
        <Typography mt="4rem" mb="1rem">
          Items can be added in the list by using the <code>append()</code>{' '}
          method. Here, we are adding <code>grapes</code> to our{' '}
          <code>fruits</code> list containing <code>apple</code> and{' '}
          <code>banana</code>.
        </Typography>

        <Box
          sx={{
            mt: '1rem',
            mb: '4rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <CodeEditor
            content={`fruits = ["apple", "banana"]

fruits.append("grapes")
print(fruits)
`}
            height="160px"
            width="60%"
            title="true"
          />

          <CodeOutput
            content={`['apple', 'banana', 'grapes']`}
            height="160px"
            width="40%"
            title="true"
          />
        </Box>

        {/* len() */}
        <Typography mt="2rem" mb="1rem">
          You can get the size of the list (how many items in the list) by using
          the <code>len()</code> method. You just place the <code>fruits</code>{' '}
          list inside the <code>len()</code> method, and place that inside a{' '}
          <code>print()</code> to see its output.
        </Typography>

        <Box
          sx={{
            mt: '1rem',
            mb: '4rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <CodeEditor
            content={`fruits = ["apple", "banana"]
print(len(fruits)) # Output: 2

fruits.append("grapes")
print(len(fruits)) # Output: 3
`}
            height="200px"
            width="60%"
            title="true"
          />

          <CodeOutput
            content={`2\n3`}
            height="200px"
            width="40%"
            title="true"
          />
        </Box>

        {/* List Operations */}
        <Typography mt="2rem" mb="1rem">
          Lists also support various operations such as concatenation,
          repetition, and membership testing using <code>+</code>,{' '}
          <code>*</code>, and <code>in</code> respectively. Examples are given
          below:
        </Typography>

        <Box
          sx={{
            mt: '1rem',
            mb: '4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <CodeEditor
            content={`fruits = ["apple", "banana"]

print(fruits + ["cherry", "orange"])  # merges the 2 lists
# Output: ['apple', 'banana', 'cherry', 'orange']

print(fruits * 3) # multiplies the items in the list n times
# Output: ['apple', 'banana', 'apple', 'banana', 'apple', 'banana']

print("apple" in fruits)  # checks if the element "apple" is in the fruits list
# Output: True
`}
            height="320px"
            width="100%"
            title="true"
          />

          <CodeOutput
            content={`['apple', 'banana', 'cherry', 'orange']
['apple', 'banana', 'apple', 'banana', 'apple', 'banana']
True
            `}
            height="200px"
            width="100%"
            title="true"
          />
        </Box>
      </Box>

      <Proceed linkTo="/whileloop" />
    </Container>
  );
}

export default Lists;
