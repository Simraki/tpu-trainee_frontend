import React, { FC } from 'react'
import { GlobalStyles } from '@mui/material'


const UserGlobalStyles: FC = () => (<GlobalStyles styles={{
    '*:focus': {
        outline: 0,
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
        backgroundColor: 'black',
    },
}}/>)

export default UserGlobalStyles
