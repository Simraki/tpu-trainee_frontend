import { createTheme, Theme } from '@mui/material'
import { grey } from '@mui/material/colors'
import shadows from '@mui/material/styles/shadows'

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
        primary: {main: primary, contrastText: '#FFFFFF'},
        secondary: {main: secondary},
        common: {
            white: '#fff',
            black: black,
        },
        tonalOffset: 0.2,
        background: {
            default: background,
        },
    },
    spacing: spacing,
    typography: {
        fontFamily: '\'Inter\', sans-serif',
        subtitle1: {
            fontWeight: 700,
        },
    },
    shape: {
        borderRadius: 5,
    },
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
        MuiAutocomplete: {
            defaultProps: {
                autoHighlight: true,
                // size: 'small'
            },
        },
        MuiLink: {
            defaultProps: {
                fontWeight: 500,
            },
            styleOverrides: {
                root: {
                    textUnderlineOffset: 2,
                    cursor: 'pointer',
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    paddingTop: spacing / 4 * 3,
                    paddingBottom: spacing / 4 * 3,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    fontStyle: 'normal',
                    textTransform: 'none',
                },
            },
            variants: [
                {
                    props: {variant: 'contained'},
                    style: {
                        boxShadow: shadows[3],
                        '&:active': {
                            boxShadow: shadows[5],
                        },
                    },
                },
                {
                    props: {variant: 'contained', color: 'secondary'},
                    style: {
                        background: 'white',
                        color: primary,
                        '&:hover': {
                            background: '#e9f2f6',
                        },
                    },
                },
            ],
        },
        MuiChip: {
            defaultProps: {
                size: 'small',
            },
            styleOverrides: {
                root: {
                    '&:hover': {
                        boxShadow: shadows[2],
                    },
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                size: 'small',
                fullWidth: true
            },
            styleOverrides: {
                root: {
                    '.MuiOutlinedInput-root': {
                        background: 'white',
                        '&:hover fieldset': {
                            borderColor: grey[700],
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: primary,
                        },
                    },
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    boxShadow: shadows[2],
                    fontWeight: 600,
                    letterSpacing: '0.05rem',
                    fontSize: '0.8125rem',
                },
            },
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    letterSpacing: '0.05rem',
                    fontSize: '0.875rem',
                    '.MuiTableCell-root': {
                        paddingTop: 10,
                        paddingBottom: 10,
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                    fontWeight: 'inherit',
                    fontSize: 'inherit',
                    border: 'none',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    border: '1px solid #EBEBEB',
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: borderColor,
                    height: borderWidth as number,
                },
            },
        },
        MuiDialog: {
            defaultProps: {
                hideBackdrop: true,
                fullWidth: true,
            },
            styleOverrides: {
                paper: {
                    background: '#F1F5F9',
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    [`@media (min-width:  ${sm}px)`]: {
                        paddingLeft: spacing * 10,
                        paddingRight: spacing * 10,
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    background: darkBlack,
                },
            },
        },
    },
})

export default theme
