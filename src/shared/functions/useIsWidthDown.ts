import { useMediaQuery, useTheme } from '@mui/material'
import { Breakpoint } from '@mui/system/createTheme/createBreakpoints'

function useIsWidthDown(breakpoint: Breakpoint | number): boolean {
    const theme = useTheme()
    return useMediaQuery(theme.breakpoints.down(breakpoint))
}

export default useIsWidthDown
