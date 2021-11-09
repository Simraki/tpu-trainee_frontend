import React from 'react'
import TodoView from '../components/examples/TodoView'
import RootStore from '../stores/RootStore'
import Main from '../components/Main'
import { Route } from '@simraki/mobx-router'


const routes = {
    home: new Route<RootStore>({
        path: '/',
        component: <Main/>,
    }),
    todos: new Route<RootStore>({
        path: '/todos',
        component: <TodoView/>,
    }),
}
export default routes
