import { Box, styled, TextField, TextFieldProps, Typography, TypographyProps } from '@mui/material'
import React, { FC } from 'react'

interface UserTextFieldProps {
    label: string
    typographyProps?: TypographyProps
    inputProps?: TextFieldProps
}

const InputField = styled(TextField)<TextFieldProps>(() => ({
    color: '#a9a9a9',
}))

const UserTextField: FC<UserTextFieldProps> = (props) => {

    return (
        <Box mb={1}>
            <Typography {...props.typographyProps} variant={'subtitle1'} sx={{fontWeight: 400}}>
                {props.label}
            </Typography>
            <InputField placeholder={'Введите'} sx={{mb: 1}} {...props.inputProps} size={'small'} fullWidth/>
        </Box>
    )
}

export default UserTextField
