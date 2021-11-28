import React, { FC } from 'react'
import { Grid } from '@mui/material'
import { observer } from 'mobx-react'
import { Vacancy } from '../../../stores/entities/Vacancy'
import CompanyVacanciesMenu from './CompanyVacanciesMenu'
import VacancyCard from './VacancyCard'


const CompanyVacanciesTab: FC = () => {

    const vacancies: Vacancy[] = [
        {
            name: 'Главный специалист-эксперт',
            careerLevel: 'Не требуется',
            schedule: 'Полная',
            salary: '20000 - 30000',
            applicationNum: 3,
            pubDate: '21.11.2021',
        },
        {
            name: 'Главный специалист-эксперт',
            careerLevel: 'Не требуется',
            schedule: 'Полная',
            salary: '20100 - 30000',
            applicationNum: 2,
            pubDate: '21.11.2021',
        },
        // {
        //     name: 'Главный специалист-эксперт',
        //     careerLevel: 'Не требуется',
        //     schedule: 'Полная',
        //     salary: '22000 - 30000',
        //     applicationNum: 0,
        //     pubDate: '21.11.2021',
        // },
    ]

    return (
        <Grid container spacing={4}>
            <Grid container item xs={9} spacing={2}>
                {vacancies.map((el, ix) => (
                    <Grid item xs={6} key={ix}>
                        <VacancyCard vacancy={el}/>
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={3}>
                <CompanyVacanciesMenu/>
            </Grid>
        </Grid>
    )
}

export default observer(CompanyVacanciesTab)
