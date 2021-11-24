import React, { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'


const TpuLoogo: FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 30 32'}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M1.5 1.5H7.56966V8.11933H1.5V1.5ZM0 0H1.5H7.56966H9.06966V1.5V8.11933V9.61933H7.56966H1.5H0V8.11933V1.5V0ZM11.9655 1.5H18.0352V19.2186H11.9655V1.5ZM10.4655 0H11.9655H18.0352H19.5352V1.5V19.2186V20.7186H18.0352H11.9655H10.4655V19.2186V1.5V0ZM0 11.0991H9.06966V31.8176H0V11.0991ZM30.0002 11.0995H20.9305V31.8181H30.0002V11.0995ZM28.5002 1.5H22.4305V8.11933H28.5002V1.5ZM22.4305 0H20.9305V1.5V8.11933V9.61933H22.4305H28.5002H30.0002V8.11933V1.5V0H28.5002H22.4305ZM19.5352 22.1981H10.4655V31.8175H19.5352V22.1981Z"/>
        </SvgIcon>
    )
}

export default TpuLoogo
