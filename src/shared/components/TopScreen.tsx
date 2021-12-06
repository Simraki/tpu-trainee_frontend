import React, { FC } from 'react'
import { Box, BoxProps } from '@mui/material'
import NoPaddingBox from './NoPaddingBox'
import { linearGradient } from '../../consts/sideColors'


interface TotalScreenProps extends BoxProps {
    outerProps?: BoxProps
    defaultGradient?: boolean
}


const TopScreen: FC<TotalScreenProps> = ({outerProps, defaultGradient, ...innerProps}) => {

    const style = outerProps?.style ?? {}

    if (defaultGradient) {
        style.background = linearGradient
    }

    return (
        <NoPaddingBox
            {...outerProps}
            style={style}
        >
            <Box px={10} pt={6} {...innerProps}/>
        </NoPaddingBox>
    )
}

export default TopScreen
