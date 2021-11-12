import React, { FC, memo } from 'react'
import { AppBar, Box, Container, Grid, Stack, Toolbar, Typography } from '@mui/material'
import { Announcement, CarRental, Home, PriceChange } from '@mui/icons-material'
import { useInstance } from 'react-ioc'
import { observer } from 'mobx-react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import routes from '../../consts/routes'
import RootStore from '../../stores/RootStore'
import tpu_logo from '../../asset/tpu_logo.png'
import ContainedButton from '../../shared/components/ContainedButton'
import TextButton from '../../shared/components/TextButton'


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
            route: routes.todos,
            icon: <Announcement style={{color: 'white'}}/>,
            isActive: false,
        },
        {
            name: 'Проекты',
            route: routes.tests,
            icon: <CarRental style={{color: 'white'}}/>,
            isActive: false,
        },
        {
            name: 'Мероприятия',
            route: routes.home,
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
            {/*<Toolbar variant={'dense'}>*/}
            <Toolbar>
                <Container>
                    <Grid container justifyContent={'space-evenly'} alignItems={'center'}>
                        <Grid item xs={3}>
                            <Stack direction={'row'} alignItems={'center'}>
                                <img src={tpu_logo} style={{width: 40, height: 40, borderRadius: 2}} alt={'TPU Logo'}/>
                                <Box ml={1}>
                                    <Typography
                                        noWrap
                                        variant={'subtitle1'}
                                        style={{
                                            fontFamily: '\'Inter\', sans-serif',
                                            fontWeight: 600,
                                            fontStyle: 'normal',
                                            color: 'white',
                                        }}>
                                        СТАЖИРОВКИ
                                    </Typography>
                                    <Typography
                                        noWrap
                                        variant={'subtitle2'}
                                        style={{
                                            fontFamily: '\'Inter\', sans-serif',
                                            fontWeight: 500,
                                            fontStyle: 'normal',
                                            color: 'white',
                                        }}>
                                        ТОМСКИЙ ПОЛИТЕХ
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item container justifyContent={'center'} xs={6}>
                            {menuItems.map(el => el.isActive
                                ? (<ContainedButton onClick={() => store.router.goTo(el.route)} key={el.name}>
                                    {el.name}
                                </ContainedButton>)
                                : (<TextButton onClick={() => store.router.goTo(el.route)} key={el.name}>
                                    {el.name}
                                </TextButton>),
                            )}
                        </Grid>
                        <Grid item xs={3}>
                            <Stack direction={'row'} justifyContent={'flex-end'}>
                                <TextButton onClick={() => console.log('NAME Pr')}
                                            endIcon={<AccountCircleOutlinedIcon/>}>
                                    Name
                                </TextButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default memo(observer(NavBar))
