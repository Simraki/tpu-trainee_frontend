import React from 'react'
import { inject, InjectorContext } from 'react-ioc'
import RootStore from './stores/RootStore'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { observer } from 'mobx-react'
import UserGlobalStyles from './UserGlobalStyles'
import { withDependencies } from './hocs/withDependencies'
import Main from './components/Main'


class App extends React.PureComponent {

    static contextType = InjectorContext
    private store = inject<RootStore>(this, RootStore)

    render() {

        const {themeStore} = this.store

        return (
            <React.StrictMode>
                <ThemeProvider theme={themeStore.theme}>
                    <CssBaseline/>
                    <UserGlobalStyles theme={themeStore.theme}/>
                    <Main/>
                </ThemeProvider>
            </React.StrictMode>)
    }
}

export default withDependencies(observer(App))
