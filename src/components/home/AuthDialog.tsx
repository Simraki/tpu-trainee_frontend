import React, { FC } from 'react'
import { Box, Button, Dialog, DialogContent, IconButton, Link, TextField, Typography } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { observer } from 'mobx-react'
import { useInstance } from 'react-ioc'
import RootStore from '../../stores/RootStore'
import dialogs from '../../consts/dialogs'


const AuthDialog: FC = () => {

    const {dialogStore} = useInstance(RootStore)

    return (
        <Dialog open={true} onClose={() => dialogStore.closeDialog()} maxWidth={'xs'}>
            <IconButton
                onClick={() => dialogStore.closeDialog()}
                size={'small'}
                sx={{position: 'absolute', right: 8, top: 8}}
            >
                <CloseRoundedIcon/>
            </IconButton>
            <Typography align={'center'} variant={'h4'} fontWeight={800} mt={3}>
                Вход
            </Typography>

            <DialogContent sx={{px: 4, py: 3, position: 'relative'}}>

                <TextField placeholder={'Логин или номер телефона'} fullWidth/>
                <br/>
                <br/>
                <TextField placeholder={'Пароль'} fullWidth/>

                <Box my={2} display={'flex'} justifyContent={'space-between'}>
                    <Typography color={'primary.main'}>Я работодатель</Typography>
                    <Typography color={'#A3A5B1'}>Забыли пароль?</Typography>
                </Box>

                <Box textAlign={'center'}>
                    <Button variant={'contained'}>
                        Продолжить
                    </Button>
                </Box>

                <Typography variant={'body1'} align={'center'} mt={2}>
                    Войти через TPU
                </Typography>

                <Box textAlign={'center'} mt={2}>
                    <Typography>Нет аккаунта?</Typography>
                    <Link color={'primary.main'}
                          onClick={() => dialogStore.setDialog(dialogs.registration)}
                    >
                        Зарегистрируйся!
                    </Link>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default observer(AuthDialog)
