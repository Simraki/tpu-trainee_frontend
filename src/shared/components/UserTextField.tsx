import { Box, styled, TextField, TextFieldProps, Typography, TypographyProps } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { FC } from 'react'

interface IUserTextField {
    label: string,
    typographyProps?: TypographyProps,
    inputProps?: TextFieldProps
}

const InputField = styled(TextField)<TextFieldProps>(({theme}) => ({
    background: 'white',
    borderRadius: 5,
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: grey[700],
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
        },
    },
}))

const UserTextField: FC<IUserTextField> = (props) => {

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
