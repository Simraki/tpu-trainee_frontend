import React from 'react'
import TodoView from '../components/examples/TodoView'
import RootStore from '../stores/RootStore'
import Main from '../components/Main'
import { Route } from '@simraki/mobx-router'
import Tests from '../components/Tests'


const routes = {
    home: new Route<RootStore>({
        path: '/',
        component: <Main/>,
    }),
    tests: new Route<RootStore>({
        path: '/tests',
        component: <Tests/>,
    }),
    todos: new Route<RootStore>({
        path: '/todos',
        component: <TodoView/>,
    }),
}
export default routes
