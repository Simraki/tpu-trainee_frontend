import React from 'react'
import RootStore from '../stores/RootStore'
import { Route } from '@simraki/mobx-router'
import StudentProfile from '../components/profile/student/StudentProfile'
import Vacancies from '../components/vacancies/Vacancies'
import VacancyInfo from '../components/vacancies/VacancyInfo'
import Edit from '../components/edit/Edit'
import CompanyProfile from '../components/profile/company/CompanyProfile'
import VacancyApplications from '../components/vacancies/VacancyApplications'


const routes = {
    home: new Route<RootStore>({
        path: '/',
        component: <CompanyProfile/>,
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
        path: '/vacancyInfo',
        component: <VacancyInfo/>,
    }),
    edit: new Route<RootStore>({
        path: '/edit',
        component: <Edit/>,
    }),
}
export default routes
