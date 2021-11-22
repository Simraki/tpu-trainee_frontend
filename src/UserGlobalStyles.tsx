import React, { FC } from 'react'
import { GlobalStyles, Theme } from '@mui/material'


const UserGlobalStyles: FC<{ theme: Theme }> = ({theme}) => (<GlobalStyles styles={{

    'body': {
        background: '#F1F5F9',
        fontStyle: 'normal',
        fontFamily: '\'Inter\', sans-serif',
    },

    /**
     * Text selection color
     */
    '::selection': {
        background: 'red',
    },
    '::-moz-selection': {
        background: 'red',
    },

    /**
     * Additional classes
     */
    '.test-blue': {
        color: 'blue',
    },
    '.bg-black': {
        background: 'black',
    },
    '.nice-border': {
        borderColor: 'red !important',
    },
    '.filearea-root': {
        border: `1px solid ${theme.palette.grey.A400}`,
        borderRadius: 23,
        '&:hover, &$dragOver': {
            borderColor: theme.palette.primary.main,
            '&$disabled': {
                borderColor: theme.palette.grey.A400,
            },
        },
        // transition: theme.transitions.create('border-color'),
        '& *': {
            pointerEvents: 'none',
        },
    },
}}/>)

export default UserGlobalStyles
