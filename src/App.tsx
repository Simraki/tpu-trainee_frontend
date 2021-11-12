import React from 'react'
import { MobxRouter, startRouter } from '@simraki/mobx-router'
import { inject, InjectorContext } from 'react-ioc'
import RootStore from './stores/RootStore'
import routes from './consts/routes'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { observer } from 'mobx-react'
import UserGlobalStyles from './UserGlobalStyles'
import { withDependencies } from './hocs/withDependencies'
import NavBar from './components/nav/NavBar'


class App extends React.PureComponent {

    static contextType = InjectorContext
    private store = inject<RootStore>(this, RootStore)

    render() {
        startRouter(routes, this.store)

        // TODO Перенести функциональные компоненты в Main

        return (
            <React.StrictMode>
                <ThemeProvider theme={this.store.themeStore.theme}>
                    <CssBaseline/>
                    <UserGlobalStyles/>
                    <NavBar/>
                    <MobxRouter store={this.store}/>
                </ThemeProvider>
            </React.StrictMode>)
    }
}

export default withDependencies(observer(App))
