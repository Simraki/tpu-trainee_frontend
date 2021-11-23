import React from 'react'
import RootStore from '../stores/RootStore'
import { Route } from '@simraki/mobx-router'
import Tests from '../components/Tests'
import StudentProfile from '../components/profile/StudentProfile'
import EditStudentProfile from '../components/edit/EditStudentProfile'


const routes = {
    home: new Route<RootStore>({
        path: '/',
        component: <StudentProfile/>,
    }),
    todos: new Route<RootStore>({
        path: '/todos',
        component: <EditStudentProfile/>,
    }),
    tests: new Route<RootStore>({
        path: '/tests',
        component: <Tests/>,
    }),
}
export default routes
