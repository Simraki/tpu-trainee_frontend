import { Button, ButtonProps, styled } from '@mui/material'
import React, { FC, memo } from 'react'

const MenuContainedButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: 'white',
}))

const ContainedButton: FC<ButtonProps> = ({sx, children, ...btnProps}) => {


    return (
        <MenuContainedButton sx={{...sx}} color={'primary'} {...btnProps}
                             variant={'contained'}>
            {children}
        </MenuContainedButton>
    )
}

export default memo(ContainedButton)
