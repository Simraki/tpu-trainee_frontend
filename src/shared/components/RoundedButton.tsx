import { Button, ButtonProps, styled } from '@mui/material'
import { grey } from '@mui/material/colors'

const RoundedButton = styled(Button)<ButtonProps>(({theme, variant = 'text'}) => ({
    borderRadius: 23,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginLeft: theme.spacing(0.25),
    marginRight: theme.spacing(0.25),
}))

export default RoundedButton
