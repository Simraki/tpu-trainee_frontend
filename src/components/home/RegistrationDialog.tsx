import React, { FC } from 'react'
import { Box, Dialog, DialogContent, DialogTitle, Grid, IconButton, Link, Typography } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { useInstance } from 'react-ioc'
import RootStore from '../../stores/RootStore'
import { observer } from 'mobx-react'
import dialogs from '../../consts/dialogs'


const RegistrationDialog: FC = () => {

    const {dialogStore} = useInstance(RootStore)

    return (
        <Dialog open={true} onClose={() => dialogStore.closeDialog()}>
            <IconButton
                onClick={() => dialogStore.closeDialog()}
                size={'small'}
                sx={{position: 'absolute', right: 8, top: 8}}
            >
                <CloseRoundedIcon/>
            </IconButton>
            <Typography align={'center'} variant={'h4'} fontWeight={800} mt={3}>
                Регистрация
            </Typography>
            <DialogContent sx={{px: 6, py: 3, position: 'relative'}}>
                <Grid container spacing={3} justifyContent={'center'}>
                    <Grid item xs={6}>
                        <div style={{width: '100%', aspectRatio: '5 / 3', background: 'red'}}/>
                        <Typography variant={'subtitle1'} align={'center'} color={'primary.main'}>
                            Я студент
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{width: '100%', aspectRatio: '5 / 3', background: 'green'}}/>
                        <Typography variant={'subtitle1'} align={'center'} color={'secondary.main'}>
                            Я работодатель
                        </Typography>
                    </Grid>
                </Grid>
                <Box textAlign={'center'} mt={2}>
                    <Typography>Уже есть аккаунт?</Typography>
                    <Link color={'primary.main'}
                          onClick={() => dialogStore.setDialog(dialogs.auth)}
                    >
                        Авторизуйтесь!
                    </Link>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default observer(RegistrationDialog)
