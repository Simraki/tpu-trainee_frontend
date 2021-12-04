import React, { FC } from 'react'
import {
    Autocomplete,
    Avatar,
    Box,
    Button,
    Checkbox,
    Chip,
    FormControlLabel,
    FormGroup,
    Grid,
    TableCell,
    TablePagination,
    TableRow,
    TextField,
    Typography,
} from '@mui/material'
import { bgAvatarColors, bgChipColors, textChipColors } from '../../consts/sideColors'
import { TitleTable } from '../../shared/components/StyledTableHead'
import ProfileIcon from '../../shared/components/ProfileIcon'
import StyledTable from '../../shared/components/StyledTable'


const Vacancies: FC = () => {

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
            title: '',
        },
    ]

    let applications = [
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

    applications = [...applications, ...applications, ...applications, ...applications, ...applications]

    return (
        <>
            <Grid container mt={3} mb={2} alignItems={'stretch'}>
                <Grid item xs>
                    <Autocomplete multiple
                                  filterSelectedOptions
                                  fullWidth
                                  options={['Django', 'React']}
                                  autoHighlight
                                  disableCloseOnSelect
                                  renderInput={({InputProps, ...params}) =>
                                      <TextField {...params}
                                                 placeholder={'Теги...'}
                                                 InputProps={{
                                                     ...InputProps,
                                                     style: {
                                                         borderBottomRightRadius: 0,
                                                         borderTopRightRadius: 0,
                                                     },
                                                 }}
                                      />
                                  }
                                  renderTags={(value: readonly string[], getTagProps) =>
                                      value.map((option: string, index: number) => (
                                          // eslint-disable-next-line react/jsx-key
                                          <Chip size={'small'}
                                                sx={{
                                                    bgcolor: bgChipColors[index % bgChipColors.length],
                                                    color: textChipColors[index % textChipColors.length],
                                                }}
                                                label={option} {...getTagProps({index})}/>
                                      ))
                                  }
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button variant={'contained'} fullWidth
                            disableElevation
                            sx={{
                                height: 1,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                            }}
                    >
                        Найти
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Autocomplete options={['Компания 1', 'Компания 2']}
                                  size={'small'}
                                  renderInput={params =>
                                      <TextField {...params}
                                                 placeholder={'Все компании'}
                                      />
                                  }
                    />
                </Grid>
                <Grid item xs={2}>
                    <Autocomplete options={['Томск', 'Кемерово']}
                                  size={'small'}
                                  renderInput={params =>
                                      <TextField {...params}
                                                 placeholder={'Город'}
                                      />
                                  }
                    />
                </Grid>
                <Grid item xs={2}>
                    <Autocomplete options={['Полный', 'Сменный']}
                                  size={'small'}
                                  renderInput={params =>
                                      <TextField {...params}
                                                 placeholder={'График работы'}
                                      />
                                  }
                    />
                </Grid>
                <Grid item xs={2}>
                    <Autocomplete options={['Нет опыта', '1-3 года']}
                                  size={'small'}
                                  renderInput={params =>
                                      <TextField {...params}
                                                 placeholder={'Опыт работы'}
                                      />
                                  }
                    />
                </Grid>
                <Grid item xs/>
                <Grid item xs={2}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label={'Мой стек'} />
                    </FormGroup>
                </Grid>
            </Grid>
            <Typography variant={'h4'} fontWeight={600} my={2}>Результаты поиска:</Typography>
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
                                                    {el.companyName[0]}
                                                </Avatar>
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
                                    <TableCell style={{color: '#9C9C9C'}}>
                                        <Button sx={{color: 'inherit'}}>Подробнее</Button>
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

export default Vacancies
