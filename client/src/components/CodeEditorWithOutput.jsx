import React, { useState } from 'react';
import { Box, Typography, Button, Slider } from '@mui/material';
import Editor from '@monaco-editor/react';
import Sk from 'skulpt';

// Props:
// codeWidth={}
// outputWidth={}
// content={}
// height=""
// title=""

function CodeEditorWithOutput(props) {
  const [content, setContent] = useState(props.content);
  const [outputContent, setOutputContent] = useState('');
  const [editorWidth, setEditorWidth] = useState(props.codeWidth);
  const [outputWidth, setOutputWidth] = useState(props.outputWidth);

  const handleCodeChange = (newCode) => {
    setContent(newCode);
  };

  const executeCode = () => {
    setOutputContent(''); // Clear previous output

    Sk.configure({
      output: (text) => {
        setOutputContent((prevContent) => prevContent + text); // Append output to the state
      },
      read: (filename) => {
        if (Sk.builtinFiles.files[filename]) {
          return Sk.builtinFiles.files[filename];
        }
        throw new Error(`File '${filename}' not found`);
      },
    });

    try {
      Sk.misceval
        .asyncToPromise(() => {
          return Sk.importMainWithBody('<stdin>', false, content, true);
        })
        .catch((err) => {
          setOutputContent((prevContent) => prevContent + `Error: ${err}`);
        });
    } catch (err) {
      setOutputContent((prevContent) => prevContent + `Error: ${err}`);
    }
  };

  const clearCode = () => {
    setContent(''); // Clear the code in the editor
  };

  const clearOutput = () => {
    setOutputContent(''); // Clear the code in the editor
  };

  const handleSliderChange = (event, newValue) => {
    setEditorWidth(newValue);
    setOutputWidth(100 - newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: '90%',
          fontWeight: 'bold',
          textAlign: 'right',
          pb: '4px',
          pr: '32px',
        }}
      >
        INTERACTIVE CODE EDITOR
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          border: '2px solid #ccc',
          borderRadius: '30px',
          p: '25px',
        }}
      >
        {/* Code Editor & Output */}
        <Box sx={{ width: '100%', display: 'flex' }}>
          {/* Code Editor */}
          <Box sx={{ width: `${editorWidth}%` }}>
            {/* Title */}
            <Typography variant="h5" pb="0.5rem">
              {props.title === true || props.title === 'true' ? 'Code' : ''}
            </Typography>

            <Box sx={{ height: props.height }}>
              <Editor
                theme="vs-dark"
                defaultLanguage="python"
                value={content}
                options={{
                  fontSize: '20px',
                }}
                onChange={handleCodeChange}
              />
            </Box>
          </Box>

          {/* Code Output */}
          <Box sx={{ width: `${outputWidth}%` }}>
            {/* Title */}
            <Typography variant="h5" pb="0.5rem">
              {props.title === true || props.title === 'true' ? 'Output' : ''}
            </Typography>
            <Box
              sx={{
                height: props.height,
                border: '1px solid #ccc',
                borderRadius: '4px',
                p: '0.5rem 1rem',
                overflow: 'auto',
              }}
            >
              <Typography
                fontFamily="monospace"
                component="div"
                sx={{ whiteSpace: 'pre-line' }}
                id="code-output"
              >
                {outputContent}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Slider */}
        <Slider
          sx={{ width: '80%', mt: '1rem' }}
          value={editorWidth}
          onChange={handleSliderChange}
          aria-label="Width Slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={0}
          max={100}
        />
        <Typography fontSize="75%">WIDTH SLIDER</Typography>

        {/* Buttons */}
        <Box sx={{ mt: '2rem', display: 'flex', gap: '1rem' }}>
          {/* Clear Code */}
          <Button
            sx={{ width: '180px' }}
            size="large"
            variant="outlined"
            onClick={clearCode}
          >
            Clear Code
          </Button>
          {/* Run Code */}
          <Button
            sx={{ width: '180px' }}
            size="large"
            variant="contained"
            onClick={executeCode}
          >
            Run Code
          </Button>
          {/* Clear Output */}
          <Button
            sx={{ width: '180px' }}
            size="large"
            variant="outlined"
            onClick={clearOutput}
          >
            Clear Output
          </Button>
        </Box>
        {/*  */}
      </Box>
    </Box>
  );
}

export default CodeEditorWithOutput;
