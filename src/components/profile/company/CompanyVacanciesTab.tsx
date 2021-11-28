import React, { FC } from 'react'
import {
    Box,
    Grid,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    MenuProps,
    Paper,
    Stack,
    styled,
    Typography,
} from '@mui/material'
import { AddRounded, ArchiveOutlined, CloseRounded, EditOutlined, MoreVertOutlined } from '@mui/icons-material'
import { observer } from 'mobx-react'
import { grey, orange } from '@mui/material/colors'
import { Vacancy } from '../../../stores/entities/Vacancy'
import shadows from '@mui/material/styles/shadows'


const VacancyPaper = styled((props) => <Paper elevation={3} {...props}/>)(({theme}) => ({
    aspectRatio: '7 / 3',
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}))

const StyledMenu = styled((props: MenuProps) =>
    <Menu {...props}
          anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
          }}
          transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
          }}
          open={props.open}/>)(({theme}) => ({
    '& .MuiPaper-root': {
        boxShadow: theme.shadows[2],
        '& .MuiMenu-list': {
            padding: `${theme.spacing(0.5)} 0`,
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: theme.typography.pxToRem(20),
            },
        },
    },

}))


const VacancyCard: FC<{ vacancy: Vacancy }> = observer(({vacancy}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | Element>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <VacancyPaper>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'baseline'}>
                <span>
                    <Typography variant={'subtitle1'} mb={1} display={'inline-block'}>
                        {vacancy.name}
                    </Typography>
                    {
                        vacancy.applicationNum !== 0 && (
                            <Box sx={{
                                ml: 1,
                                display: 'inline-block',
                                bgcolor: orange[500],
                                color: 'white',
                                fontWeight: 700,
                                borderRadius: '50%',
                                width: '1.6em',
                                lineHeight: '1.6em',
                                textAlign: 'center',
                            }}>
                                {vacancy.applicationNum}
                            </Box>
                        )
                    }
                </span>
                <span>
                    <IconButton onClick={handleClick}>
                        <MoreVertOutlined/>
                    </IconButton>
                    <StyledMenu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem>
                            <ListItemIcon><EditOutlined/></ListItemIcon>
                            <ListItemText>Править</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon><ArchiveOutlined/></ListItemIcon>
                            <ListItemText>В архив</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon><CloseRounded color={'error'}/></ListItemIcon>
                            <ListItemText sx={{color: theme => theme.palette.error.main}}>Удалить</ListItemText>
                        </MenuItem>
                    </StyledMenu>
                </span>
            </Stack>
            <Typography variant={'body1'} mb={1}>{`Требуемый опыт: ${vacancy.careerLevel}`}</Typography>
            <Typography variant={'body1'} mb={1}>{`Занятость: ${vacancy.schedule}`}</Typography>
            <Typography variant={'body1'}
                        fontWeight={500}
                        mb={1}
                        px={1}
                        py={0.5}
                        bgcolor={'#22DDCD7D'}
                        borderRadius={1}
                        width={'fit-content'}
            >
                {`₽ ${vacancy.salary}`}
            </Typography>
            <Typography variant={'caption'} align={'right'} color={grey[500]}>{vacancy.pubDate}</Typography>
        </VacancyPaper>
    )
})

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
        // {
        //     name: 'Главный специалист-эксперт',
        //     careerLevel: 'Не требуется',
        //     schedule: 'Полная',
        //     salary: '20100 - 30000',
        //     applicationNum: 2,
        //     pubDate: '21.11.2021',
        // },
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
        <>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <VacancyPaper sx={{
                        alignItems: 'center',
                    }}>
                        <AddRounded fontSize={'large'} color={'primary'}/>
                    </VacancyPaper>
                </Grid>
                {vacancies.map((el, ix) => (
                    <Grid item xs={6} key={ix}>
                        <VacancyCard vacancy={el}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default observer(CompanyVacanciesTab)
