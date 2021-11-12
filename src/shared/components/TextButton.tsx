import { Button, ButtonProps, styled } from '@mui/material'
import React, { FC, memo } from 'react'
import { grey } from '@mui/material/colors'

const MenuTextButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: 'white',
    '&:hover': {
        color: grey[500],
    },
}))

const TextButton: FC<ButtonProps> = ({sx, children, ...btnProps}) => {


    return (
        <MenuTextButton sx={{ ...sx}} {...btnProps} variant={'text'}>
            {children}
        </MenuTextButton>
    )
}

export default memo(TextButton)
