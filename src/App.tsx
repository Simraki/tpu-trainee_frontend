import React from 'react'
import { MobxRouter, startRouter } from '@simraki/mobx-router'
import { inject, InjectorContext, provider } from 'react-ioc'
import RootStore from './stores/RootStore'
import routes from './consts/routes'
import { dependencies } from './consts/dependencies'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { observer } from 'mobx-react'
import UserGlobalStyles from './UserGlobalStyles'


class App extends React.PureComponent {

    static contextType = InjectorContext
    private store = inject<RootStore>(this, RootStore)

    render() {
        startRouter(routes, this.store)

        return (
            <React.StrictMode>
                <ThemeProvider theme={this.store.themeStore.theme}>
                    <CssBaseline/>
                    <UserGlobalStyles/>
                    <MobxRouter store={this.store}/>
                </ThemeProvider>
            </React.StrictMode>)
    }
}

export default provider(...dependencies)(observer(App))
