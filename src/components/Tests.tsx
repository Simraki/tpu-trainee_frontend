import React, { FC } from 'react'
import { observer } from 'mobx-react'

const Tests: FC = () => {

    return (
        <>
            <div style={{height: 500, backgroundColor: 'orange'}}/>
            <p>Current pathname: {location.pathname}</p>
        </>
    )
}


export default observer(Tests)
