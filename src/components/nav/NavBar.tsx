import React, { FC, memo } from 'react'
import { AppBar, Grid, Stack, styled, Toolbar } from '@mui/material'
import { useInstance } from 'react-ioc'
import { observer } from 'mobx-react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import routes from '../../consts/routes'
import RootStore from '../../stores/RootStore'
import dark_tpu_logo from '../../asset/dark_tpu_logo.png'
import RoundedButton from '../../shared/components/RoundedButton'
import { grey } from '@mui/material/colors'


const TextButton = styled(RoundedButton)(({theme}) => ({
    color: theme.palette.common.white,
    background: 'transparent',
    '&:hover': {
        color: grey[500],
    },
}))


const NavBar: FC = () => {

    const store = useInstance(RootStore)

    const menuItems = [
        {
            name: 'Главная',
            route: routes.home,
        },
        {
            name: 'Вакансии',
            route: routes.vacancies,
        },
        {
            name: 'Проекты',
            route: routes.vacancyInfo,
        },
        {
            name: 'Мероприятия',
            route: routes.edit,
        },
    ]

    const currentRoute = store.router.currentRoute

    return (
        <AppBar position="sticky" color={'secondary'} sx={{boxShadow: 6}}>
            <Toolbar>
                <Grid container justifyContent={'space-evenly'} alignItems={'center'}>
                    <Grid item xs={3} display={'inline-flex'}>
                        <img src={dark_tpu_logo} height={40} alt={'TPU Logo'}/>
                    </Grid>
                    <Grid item container justifyContent={'center'} xs={6}>
                        {
                            menuItems.map((el) => {
                                return el.route === currentRoute ?
                                    <RoundedButton variant={'contained'}
                                                   sx={{color: theme => theme.palette.common.white}}
                                                   onClick={() => store.router.goTo(el.route)} key={el.name}
                                    >
                                        {el.name}
                                    </RoundedButton>
                                    :
                                    <TextButton onClick={() => store.router.goTo(el.route)} key={el.name}>
                                        {el.name}
                                    </TextButton>
                            })
                        }
                    </Grid>
                    <Grid item xs={3}>
                        <Stack direction={'row'} justifyContent={'flex-end'}>
                            <TextButton onClick={() => store.router.goTo(routes.studentProfile)}
                                        endIcon={<AccountCircleOutlinedIcon/>}
                            >
                                Name
                            </TextButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default memo(observer(NavBar))
