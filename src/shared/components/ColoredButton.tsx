import React, { FC, memo } from 'react'
import { Button, createTheme, ThemeProvider, useTheme } from '@mui/material'

interface IColoredButtonProps {
    color: string
}

const ColoredButton: FC<IColoredButtonProps> = ({color, children, ...buttonProps}) => {

    const buttonTheme = createTheme(useTheme(), {
        palette: {
            primary: {
                main: color,
            },
        },
    })

    return (
        <ThemeProvider theme={buttonTheme}>
            <Button {...buttonProps} color="primary">
                {children}
            </Button>
        </ThemeProvider>
    )
}

export default memo(ColoredButton)
