import { createTheme, Theme } from '@mui/material'

const primary = '#17d328'
const secondary = '#FF0000'
const black = '#262626'
const white = '#FFFFFF'
const darkBlack = 'rgb(36, 40, 44)'
const background = '#f5f5f5'

const borderWidth = 2
const borderColor = 'rgba(0, 0, 0, 0.13)'

const xl = 1920
const lg = 1280
const md = 960
const sm = 600
const xs = 0

const spacing = 8

const theme: Theme = createTheme({
    palette: {
        primary: {main: primary},
        secondary: {main: secondary},
        common: {
            black,
            white,
        },
        tonalOffset: 0.2,
        background: {
            default: background,
        },
    },
    spacing: spacing,
    breakpoints: {
        values: {
            xl,
            lg,
            md,
            sm,
            xs,
        },
    },
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    paddingLeft: spacing * 2,
                    paddingRight: spacing * 2,
                    borderBottom: `${borderWidth}px solid ${borderColor}`,
                    [`@media (max-width:  ${sm}px)`]: {
                        paddingLeft: spacing,
                        paddingRight: spacing,
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: borderColor,
                    height: borderWidth,
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                divider: {
                    borderBottom: `${borderWidth}px solid ${borderColor}`,
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    width: '100%',
                    maxWidth: 430,
                    marginLeft: spacing,
                    marginRight: spacing,
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: darkBlack,
                },
            },
        },
    },
})

export default theme
