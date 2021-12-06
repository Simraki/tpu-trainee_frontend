import React, { useState } from 'react'
import {
    Box,
    Button,
    ButtonProps,
    Grid,
    IconButton,
    Paper,
    Stack,
    styled,
    Tab,
    Tabs,
    Theme,
    Typography,
} from '@mui/material'
import { observer } from 'mobx-react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import ProfileIcon from '../../../shared/components/ProfileIcon'
import { TabContext, TabPanel } from '@mui/lab'
import SectionWithTitle from '../../../shared/components/SectionWithTitle'
import StudentInfoTab from './StudentInfoTab'
import StudentApplicationsTab from './StudentApplicationsTab'
import TopScreen from '../../../shared/components/TopScreen'
import { SxProps } from '@mui/system'


const profilePaperSx: SxProps<Theme> = {
    aspectRatio: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0.5,
    position: 'relative',
}


const HeaderButton = styled((props: ButtonProps) =>
    <Button variant={'contained'} color={'secondary'} {...props}/>)
(({theme}) => ({
    padding: 0,
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    height: theme.spacing(4),
    minWidth: theme.spacing(6),
    width: theme.spacing(6),
}))

const StyledTab = styled(Tab)(({theme}) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.spacing(1),
    minWidth: theme.spacing(20),
    color: 'white',
    background: '#39847D',
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    '&.Mui-selected': {
        color: '#39847D',
        background: '#F1F5F9',
    },
}))


const StudentProfile = () => {

    const [value, setValue] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <>
            <TopScreen defaultGradient>
                <Stack direction={'row'}
                       justifyContent={'space-between'}
                       alignItems={'center'}
                       spacing={1}
                >
                    <Typography
                        variant={'h4'}
                        color={'white'}
                        fontWeight={800}
                    >
                        Добро пожаловать, Иванов Иван Иванович!
                    </Typography>
                    <span>
                            <HeaderButton title={'???'}><FileDownloadOutlinedIcon/></HeaderButton>
                            <HeaderButton title={'???'}><VisibilityOutlinedIcon/></HeaderButton>
                            <HeaderButton title={'???'}><EditOutlinedIcon/></HeaderButton>
                    </span>
                </Stack>
                <Grid container>
                    <Grid item xs={2}/>
                    <Grid item xs>
                        <Tabs TabIndicatorProps={{hidden: true}}
                              value={value}
                              onChange={handleChange}
                              sx={{mt: 15}}
                        >
                            <StyledTab label="Информация"/>
                            <StyledTab label="Заявки"/>
                            <StyledTab label="Архив"/>
                        </Tabs>
                    </Grid>
                </Grid>
            </TopScreen>
            <>
                <Grid container spacing={4}>
                    <Grid item xs={2}>
                        <Stack spacing={4} sx={{mt: -15}}>
                            <Paper elevation={3} sx={profilePaperSx}>
                                <ProfileIcon sx={{fontSize: theme => theme.typography.pxToRem(120)}}/>
                                <IconButton style={{position: 'absolute', bottom: 4, right: 4}}>
                                    <FileUploadOutlinedIcon fontSize={'medium'}/>
                                </IconButton>
                            </Paper>
                            <Button variant={'contained'} color={'secondary'}>Посмотреть профиль</Button>
                            <SectionWithTitle title={'Контактные данные'}>
                                <Typography variant={'body1'}>640434 Томск, ул. Вершинина, 39а</Typography>
                                <br/>
                                <Typography variant={'body1'}> +7 (999) 111-22-33</Typography>
                                <Typography variant={'body1'}> name@mail.ru</Typography>
                            </SectionWithTitle>
                        </Stack>
                    </Grid>
                    <Grid item xs={8}>
                        <Box pt={5}>
                            <TabContext value={value.toString()}>
                                <TabPanel value={'0'} sx={{p: 0, pl: 2}}>
                                    <StudentInfoTab/>
                                </TabPanel>
                                <TabPanel value={'1'} sx={{p: 0, pl: 2}}>
                                    <StudentApplicationsTab/>
                                </TabPanel>
                                <TabPanel value={'2'} sx={{p: 0, pl: 2}}>
                                    <StudentInfoTab/>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </Grid>
                </Grid>
            </>
        </>
    )
}

export default observer(StudentProfile)
