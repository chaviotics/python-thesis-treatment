import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function BackTooltip() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box position="fixed" top={10} left={10} zIndex={9999}>
      <Tooltip
        title="You are reminded NOT to go back to the previous page as it is essential for this research & tutorial 😊"
        placement="right"
        open={isHovered}
        arrow
      >
        <IconButton
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{ color: 'white' }}
        >
          <InfoIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default BackTooltip;
