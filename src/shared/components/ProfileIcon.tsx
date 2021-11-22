import React, { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'


const ProfileIcon: FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon fillOpacity={0} {...props} viewBox={'0 0 105 105'}>
            <circle cx="52.7383" cy="34.7383" r="19.7383" stroke="#343535" strokeWidth="4"/>
            <circle cx="52.5" cy="52.5" r="50.5" stroke="#343535" strokeWidth="4"/>
            <path
                d="M22.0002 93.9998C22.0002 78.1305 33.0002 55.8603 52.393 55.8604C71.7859 55.8604 81.3431 72.7964 82.7267 93.9998"
                stroke="#343535" strokeWidth="4"/>
        </SvgIcon>
    )
}

export default ProfileIcon
