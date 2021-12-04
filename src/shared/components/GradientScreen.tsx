import React, { FC } from 'react'
import { Box, BoxProps } from '@mui/material'
import { linearGradient } from '../../consts/sideColors'

const GradientScreen: FC<BoxProps> = (props) => {
    return (
        <Box mx={-10} mt={-3} style={{
            background: linearGradient,
        }}
        >
            <Box px={10} pt={6} {...props}/>
        </Box>
    )
}

export default GradientScreen
