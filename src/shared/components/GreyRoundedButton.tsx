import React from 'react'
import { ButtonProps, styled } from '@mui/material'
import RoundedButton from './RoundedButton'
import { grey } from '@mui/material/colors'


const GreyRoundedButton = styled((props) =>
    <RoundedButton {...props} variant={'contained'} size={'small'}/>, {
    skipVariantsResolver: true,
})<ButtonProps>(({theme}) => ({
    color: '#1F2937',
    background: '#E4E4E4',
    boxShadow: theme.shadows[1],
    height: theme.spacing(3),
    '&:hover': {
        background: grey[400],
    },
}))

export default GreyRoundedButton
