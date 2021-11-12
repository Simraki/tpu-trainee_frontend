import React, { FC, memo } from 'react'
import { Button, createTheme, ThemeProvider, useTheme } from '@mui/material'


const ColoredButton: FC<{ color: string }> = ({color, children, ...buttonProps}) => {

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
