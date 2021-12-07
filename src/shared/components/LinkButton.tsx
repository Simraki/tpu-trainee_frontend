import React, { FC } from 'react'
import { alpha, Link, LinkProps, Theme } from '@mui/material'
import { SxProps } from '@mui/system'


interface LinkButtonProps extends LinkProps {
    colorVariant?: 'primary' | 'grey' | 'white'
}


const LinkButton: FC<LinkButtonProps> = ({colorVariant = 'primary', ...linkProps}) => {

    let sx: SxProps<Theme> = {}

    if (colorVariant === 'primary') {
        sx = {
            color: theme => theme.palette.primary.main,
            textDecorationColor: theme => alpha(theme.palette.primary.main, 0.4),
        }
    } else if (colorVariant === 'grey') {
        sx = {
            color: theme => theme.palette.grey['500'],
            textDecorationColor: theme => alpha(theme.palette.grey['500'], 0.4),
        }
    } else if (colorVariant === 'white') {
        sx = {
            color: theme => theme.palette.common.white,
            textDecorationColor: theme => alpha(theme.palette.common.white, 0.4),
        }
    }

    return (
        <Link {...linkProps} sx={sx}/>
    )
}

export default LinkButton
