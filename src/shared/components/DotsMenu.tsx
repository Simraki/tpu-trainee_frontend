import { Menu, MenuProps, styled } from '@mui/material'
import React from 'react'

const DotsMenu = styled((props: MenuProps) =>
    <Menu {...props}
          anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
          }}
          transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
          }}
          open={props.open}/>)(({theme}) => ({
    '& .MuiPaper-root': {
        boxShadow: theme.shadows[2],
        '& .MuiMenu-list': {
            padding: `${theme.spacing(0.5)} 0`,
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: theme.typography.pxToRem(20),
            },
        },
    },

}))

export default DotsMenu
