import React, { FC } from 'react'
import { Backdrop } from '@mui/material'


const ModalBackdrop: FC<{ open: boolean }> = ({open}) => (
    <Backdrop open={open}
              style={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1200,
                  position: 'fixed',
                  touchAction: 'none',
                  background: 'rgba(0, 0, 0, 0.5)',
              }}
    />
)


export default ModalBackdrop
