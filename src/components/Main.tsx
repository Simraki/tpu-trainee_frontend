import React, { FC } from 'react'
import { observer } from 'mobx-react'
import routes from '../consts/routes'
import { MobxRouter, startRouter } from '@simraki/mobx-router'
import { useInstance } from 'react-ioc'
import RootStore from '../stores/RootStore'
import { Box } from '@mui/material'
import NavBar from './nav/NavBar'

const Main: FC = () => {

    const store = useInstance(RootStore)

    startRouter(routes, store)

    return (
        <>
            <NavBar/>
            <Box component={'main'} p={3} px={10}>
                <MobxRouter store={store}/>
            </Box>
        </>
    )
}


export default observer(Main)
