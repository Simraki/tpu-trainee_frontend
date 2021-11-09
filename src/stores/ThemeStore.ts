import { action, makeObservable, observable } from 'mobx'
import { createTheme, Theme } from '@mui/material'
import theme from '../consts/theme'
import { green, orange } from '@mui/material/colors'

class ThemeStore {
    private forTest = false
    theme: Theme = createTheme(theme)

    constructor() {
        makeObservable(this, {
            theme: observable,
            setTheme: action,
            testTheme: action.bound,
        })
    }

    setTheme(theme: Theme): void {
        this.theme = theme
    }

    testTheme(): void {
        const color = this.forTest ? green[500] : orange[500]
        this.theme = createTheme(this.theme, {
            palette: {
                primary: {main: color},
            },
        })
        this.forTest = !this.forTest
    }
}

export default ThemeStore
