import React, { FC } from 'react'
import { Box, BoxProps } from '@mui/material'
import { linearGradient } from '../../consts/sideColors'
import NoPaddingBox from './NoPaddingBox'


interface TotalScreenProps extends BoxProps {
    outerProps?: BoxProps
}


const TopScreen: FC<TotalScreenProps> = ({outerProps = {style: {background: linearGradient}}, ...innerProps}) => {
    return (
        <NoPaddingBox {...outerProps}>
            <Box px={10} pt={6} {...innerProps}/>
        </NoPaddingBox>
    )
}

export default TopScreen
