import React from 'react'
import RootStore from '../stores/RootStore'
import { Route } from '@simraki/mobx-router'
import Tests from '../components/Tests'
import StudentProfile from '../components/profile/StudentProfile'
import EditStudentProfile from '../components/edit/EditStudentProfile'
import Vacancies from '../components/vacancies/Vacancies'


const routes = {
    home: new Route<RootStore>({
        path: '/',
        component: <StudentProfile/>,
    }),
    vacancies: new Route<RootStore>({
        path: '/vacancies',
        component: <Vacancies/>,
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
