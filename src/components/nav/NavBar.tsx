import React, { FC, memo } from 'react'
import { AppBar, Grid, Stack, styled, Toolbar } from '@mui/material'
import { Announcement, CarRental, Home, PriceChange } from '@mui/icons-material'
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
            icon: <Home style={{color: 'white'}}/>,
            isActive: false,
        },
        {
            name: 'Вакансии',
            route: routes.vacancies,
            icon: <Announcement style={{color: 'white'}}/>,
            isActive: false,
        },
        {
            name: 'Проекты',
            route: routes.vacancyInfo,
            icon: <CarRental style={{color: 'white'}}/>,
            isActive: false,
        },
        {
            name: 'Мероприятия',
            route: routes.edit,
            icon: <PriceChange style={{color: 'white'}}/>,
            isActive: false,
        },
    ]

    const currentRoute = store.router.currentRoute
    for (const [ix, menuItem] of Object.entries(menuItems)) {
        if (menuItem.route === currentRoute) {
            menuItems[Number(ix)].isActive = true
            break
        }
    }

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
                                return el.isActive ?
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
