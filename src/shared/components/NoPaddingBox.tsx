import React, { FC } from 'react'
import { Box, BoxProps } from '@mui/material'


export interface NoPaddingBoxProps extends BoxProps {
    enableX?: boolean
    enableY?: boolean
}


const NoPaddingBox: FC<NoPaddingBoxProps> = ({enableX = false, enableY = false, ...props}) => {
    return (
        <Box mx={enableX ? 0 : -10} mt={enableY ? 0 : -3} {...props} />
    )
}

export default NoPaddingBox
