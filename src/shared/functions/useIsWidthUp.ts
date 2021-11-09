import { useMediaQuery, useTheme } from '@mui/material'
import { Breakpoint } from '@mui/system/createTheme/createBreakpoints'

function useIsWidthUp(breakpoint: Breakpoint | number): boolean {
    const theme = useTheme()
    return useMediaQuery(theme.breakpoints.up(breakpoint))
}

export default useIsWidthUp
