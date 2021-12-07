import { Box, TextField, TextFieldProps, Typography, TypographyProps } from '@mui/material'
import React, { FC } from 'react'

interface UserTextFieldProps {
    label: string
    typographyProps?: TypographyProps
    inputProps?: TextFieldProps
}

const UserTextField: FC<UserTextFieldProps> = (props) => {

    return (
        <Box mb={2}>
            <Typography {...props.typographyProps} variant={'subtitle1'} fontWeight={400}>
                {props.label}
            </Typography>
            <TextField placeholder={'Введите'} {...props.inputProps}/>
        </Box>
    )
}

export default UserTextField
