import React, { FC } from 'react'
import ProfileIcon from '../../../shared/components/ProfileIcon'
import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { bgAvatarColors } from '../../../consts/sideColors'
import StyledTableHead, { TitleTable } from '../../../shared/components/StyledTableHead'


const StudentInfoTab: FC = () => {

    const applications = [
        {
            icon: <ProfileIcon/>,
            companyName: 'Company Name 1',
            companyEmail: 'company1@mail.ru',
            vacancyName: 'React Junior Developer',
            vacancyDesc: 'Optimization',
            date: '20.11.2021',
            status: 'Просмотрено',
        },
        {
            icon: undefined,
            companyName: 'Company Name 2',
            companyEmail: 'company2@mail.ru',
            vacancyName: 'Django Junior Developer',
            vacancyDesc: 'Microframeworks',
            date: '20.11.2021',
            status: 'Отклонено',
        },
        {
            icon: <ProfileIcon/>,
            companyName: 'Company Name 3',
            companyEmail: 'company3@mail.ru',
            vacancyName: 'React Junior Developer',
            vacancyDesc: 'Optimization',
            date: '20.11.2021',
            status: 'В рассмотрении',
        },
        {
            icon: <ProfileIcon/>,
            companyName: 'Company Name 4',
            companyEmail: 'company4@mail.ru',
            vacancyName: 'React Junior Developer',
            vacancyDesc: 'Optimization',
            date: '20.11.2021',
            status: 'Принято',
        },
    ]

    const titles: TitleTable[] = [
        {
            title: 'Компания',
            span: 2,
        },
        {
            title: 'Вакансия',
        },
        {
            title: 'Дата',
        },
        {
            title: 'Статус',
        },
    ]

    return (
        <>
            <TableContainer component={Paper} sx={{borderRadius: 2}}>
                <Table size={'small'}>
                    <StyledTableHead titles={titles} color={'grey'}/>
                    <TableBody>
                        {applications.map((el, ix) => (
                            <TableRow key={ix}>
                                <TableCell align={'center'}>
                                    {
                                        el.icon
                                            ?
                                            (<Avatar sx={{bgcolor: 'white'}}>
                                                {el.icon}
                                            </Avatar>)
                                            :
                                            (<Avatar sx={{bgcolor: bgAvatarColors[ix % bgAvatarColors.length]}}>
                                                {el.companyName[0]}
                                            </Avatar>)
                                    }

                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <div>{el.companyName}</div>
                                    <span style={{color: '#6B7280'}}>{el.companyEmail}</span>
                                </TableCell>
                                <TableCell>
                                    <div>{el.vacancyName}</div>
                                    <span style={{color: '#6B7280'}}>{el.vacancyDesc}</span>
                                </TableCell>
                                <TableCell>{el.date}</TableCell>
                                <TableCell style={{color: '#9C9C9C'}}>{el.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default StudentInfoTab
