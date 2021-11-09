import React, { FC } from 'react'
import { observer } from 'mobx-react'
import routes from '../consts/routes'
import { Link } from '@simraki/mobx-router'
import { useInstance } from 'react-ioc'
import RootStore from '../stores/RootStore'

const Main: FC = () => {

    const store = useInstance(RootStore)

    return (
        <>
            <Link router={store.router} route={routes.todos}> Go to todos </Link>
            <p>Current pathname: {location.pathname}</p>
        </>
    )
}


export default observer(Main)
