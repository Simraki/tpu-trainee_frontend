import React, { FC } from 'react'
import {
    Avatar,
    Box,
    Chip,
    IconButton,
    Stack,
    styled,
    TableCell,
    TablePagination,
    TableRow,
    Typography,
} from '@mui/material'
import { bgAvatarColors, bgChipColors, textChipColors } from '../../consts/sideColors'
import { TitleTable } from '../../shared/components/StyledTableHead'
import StyledTable from '../../shared/components/StyledTable'
import GreyRoundedButton from '../../shared/components/GreyRoundedButton'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import { AddOutlined, CloseOutlined, DoneOutlined, PlaceOutlined } from '@mui/icons-material'
import GradientScreen from '../../shared/components/GradientScreen'


const TableDownloadButton = styled((props) =>
    <GreyRoundedButton {...props} endIcon={<FileDownloadOutlinedIcon/>}/>)
({
    boxShadow: 'none',
    width: '35%',
    '&:hover': {
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
    },
})


const VacancyApplications: FC = () => {

    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const tags: string[] = ['Java', 'JavaScript', 'Kotlin']

    const titles: TitleTable[] = [
        {
            title: 'Студент',
            span: 2,
        },
        {
            title: 'Портфолио',
        },
        {
            title: 'Дата заявки',
        },
        {
            title: 'Действие',
        },
    ]

    let applications = [
        {
            icon: undefined,
            studentName: 'Student Name 1',
            studentEmail: 'student@mail.ru',
            date: '20.11.2021',
        },
        {
            icon: undefined,
            studentName: 'Student Name 2',
            studentEmail: 'student@mail.ru',
            date: '20.11.2021',
        },
        {
            icon: undefined,
            studentName: 'Student Name 3',
            studentEmail: 'student@mail.ru',
            date: '20.11.2021',
        },
        {
            icon: undefined,
            studentName: 'student Name 4',
            studentEmail: 'student4@mail.ru',
            date: '20.11.2021',
        },
    ]

    applications = [...applications, ...applications, ...applications, ...applications, ...applications]

    return (
        <>
            <GradientScreen pb={6}>
                <Stack spacing={1} alignItems={'flex-start'}>
                    <Typography
                        variant={'h4'}
                        color={'white'}
                        fontWeight={700}
                    >
                        Главный специалист-эксперт
                    </Typography>
                    <Typography
                        variant={'h6'}
                        color={'white'}
                    >
                        В компании {'\"Name\"'}
                    </Typography>
                    <Typography
                        variant={'h6'}
                        color={'white'}
                    >
                        ₽ 20 000 - 30 000
                    </Typography>
                    <br/>
                    <Stack direction={'row'} spacing={0.5} alignItems={'baseline'}>
                        <PlaceOutlined fontSize={'small'} htmlColor={'white'}/>
                        <Typography
                            variant={'h6'}
                            color={'white'}
                            fontWeight={300}
                        >
                            Адрес: г. Томск, ул. Пушкина, дом 1, офис 1
                        </Typography>
                    </Stack>
                </Stack>
            </GradientScreen>
            <Box mt={3} mb={2}>
                {
                    tags.map((el, index) => (
                        <Chip size={'small'}
                              sx={{
                                  bgcolor: bgChipColors[index % bgChipColors.length],
                                  color: textChipColors[index % textChipColors.length],
                                  mr: 1.5,
                              }}
                              key={el}
                              label={el}
                        />
                    ))
                }
                <IconButton>
                    <AddOutlined/>
                </IconButton>
            </Box>
            <Box mt={2}>
                <StyledTable titles={titles} color={'primary'}>
                    {
                        applications
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((el, ix) => (
                                <TableRow key={ix} hover>
                                    <TableCell align={'center'}>
                                        {
                                            el.icon ?
                                                <Avatar sx={{bgcolor: 'white'}}>
                                                    {el.icon}
                                                </Avatar>
                                                :
                                                <Avatar sx={{bgcolor: bgAvatarColors[ix % bgAvatarColors.length]}}>
                                                    {el.studentName[0].toUpperCase()}
                                                </Avatar>
                                        }
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <div>{el.studentName}</div>
                                        <span style={{color: '#6B7280'}}>{el.studentEmail}</span>
                                    </TableCell>
                                    <TableCell>
                                        <TableDownloadButton>
                                            {ix % 2 ? 'PDF' : 'DOC'}
                                        </TableDownloadButton>
                                    </TableCell>
                                    <TableCell>{el.date}</TableCell>
                                    <TableCell>
                                        <IconButton color={'error'}>
                                            <CloseOutlined/>
                                        </IconButton>
                                        <IconButton color={'success'}>
                                            <DoneOutlined/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                    }
                </StyledTable>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={applications.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </>
    )
}

export default VacancyApplications
