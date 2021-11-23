import React, { FC } from 'react'
import { Box, BoxProps, Typography } from '@mui/material'


const SectionWithTitle: FC<BoxProps> = ({title, children, ...boxProps}) => (
    <Box mt={5} {...boxProps} component={'section'}>
        <Typography variant={'subtitle1'} sx={{fontWeight: 700, mb: 1}}>
            {title}
        </Typography>
        {children}
    </Box>
)

export default SectionWithTitle
