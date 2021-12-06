import React from 'react'
import RootStore from '../stores/RootStore'
import { Route } from '@simraki/mobx-router'
import StudentProfile from '../components/profile/student/StudentProfile'
import Vacancies from '../components/vacancies/Vacancies'
import VacancyInfo from '../components/vacancies/VacancyInfo'
import Edit from '../components/edit/Edit'
import VacancyApplications from '../components/vacancies/VacancyApplications'
import Home from '../components/home/Home'


const routes = {
    home: new Route<RootStore>({
        path: '/',
        component: <Home/>,
    }),
    studentProfile: new Route<RootStore>({
        path: '/sprofile',
        component: <StudentProfile/>,
    }),
    vacancies: new Route<RootStore>({
        path: '/vacancies',
        component: <Vacancies/>,
    }),
    vacancyApplications: new Route<RootStore>({
        path: '/vacancy_apps',
        component: <VacancyApplications/>,
    }),
    vacancyInfo: new Route<RootStore>({
        path: '/vacancy_info',
        component: <VacancyInfo/>,
    }),
    edit: new Route<RootStore>({
        path: '/edit',
        component: <Edit/>,
    }),
}
export default routes
