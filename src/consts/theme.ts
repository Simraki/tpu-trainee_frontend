import { createTheme, Theme } from '@mui/material'

const primary = '#25B2A6'
const secondary = '#1C2129'
const black = '#1C2129'

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
            black: black,
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
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: '\'Inter\', sans-serif',
                    fontWeight: 500,
                    fontStyle: 'normal',
                    borderRadius: 23,
                    paddingTop: calSpacing(0.5),
                    paddingBottom: calSpacing(0.5),
                    paddingLeft: calSpacing(2),
                    paddingRight: calSpacing(2),
                    marginLeft: calSpacing(0.25),
                    marginRight: calSpacing(0.25),
                    textTransform: 'none'
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: '\'Inter\', sans-serif',
                    fontStyle: 'normal',
                },
            },
        },
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

function calSpacing(m: number): number {
    return spacing * m
}

export default theme
