import { Button, ButtonProps, styled } from '@mui/material'

const RoundedButton = styled(Button)<ButtonProps>(({theme}) => ({
    borderRadius: 23,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginLeft: theme.spacing(0.25),
    marginRight: theme.spacing(0.25),
}))

export default RoundedButton
