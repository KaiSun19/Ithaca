import { Box, Fade, Modal } from '@mui/material';
import React, { useState } from 'react'

function InfoModal({component,open,handleClose}) {
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height : '100%',
        boxShadow: 24,
        p: 4,
        opacity : 1,

      };


  return (
    <Modal
    open={open}
    onClose={handleClose}
    closeAfterTransition
    >
    <Fade in={open}>
        <Box sx = {style}>
        {component}
        </Box>
    </Fade>
    </Modal>
  )
}

export default InfoModal