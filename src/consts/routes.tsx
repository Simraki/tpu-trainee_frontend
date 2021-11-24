import React from 'react'
import RootStore from '../stores/RootStore'
import { Route } from '@simraki/mobx-router'
import StudentProfile from '../components/profile/StudentProfile'
import EditStudentProfile from '../components/edit/EditStudentProfile'
import Vacancies from '../components/vacancies/Vacancies'
import VacancyInfo from '../components/vacancies/VacancyInfo'


const routes = {
    home: new Route<RootStore>({
        path: '/',
        component: <StudentProfile/>,
    }),
    vacancies: new Route<RootStore>({
        path: '/vacancies',
        component: <Vacancies/>,
    }),
    vacancyInfo: new Route<RootStore>({
        path: '/vacancyInfo',
        component: <VacancyInfo/>,
    }),
    todos: new Route<RootStore>({
        path: '/todos',
        component: <EditStudentProfile/>,
    }),
}
export default routes
