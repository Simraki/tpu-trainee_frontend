import React, { FC, RefObject } from 'react'
import { useScrollTrigger, Zoom } from '@mui/material'
import withWidth from '@mui/material/Hidden/withWidth'

interface IScrollToProps {
    anchorRef: RefObject<any>
}

const ScrollTo: FC<IScrollToProps> = ({children, anchorRef}) => {

    const triggerIn = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    })

    const handleClick = () => {
        anchorRef.current.scrollIntoView({behavior: 'smooth', block: 'center'})
    }

    return (
        <Zoom in={triggerIn}>
            <div onClick={handleClick} role="presentation" style={{
                position: 'fixed',
                bottom: 16,
                right: 16,
            }}>
                {children}
            </div>
        </Zoom>
    )
}

export default withWidth()(ScrollTo)
