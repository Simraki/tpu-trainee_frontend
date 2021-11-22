import React, { useState } from 'react'
import {
    Box,
    Button,
    ButtonProps,
    Chip,
    Grid,
    IconButton,
    Paper,
    Stack,
    styled,
    Tab,
    Tabs,
    Typography,
} from '@mui/material'
import { observer } from 'mobx-react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import ProfileIcon from '../../shared/components/ProfileIcon'
import RoundedButton from '../../shared/components/RoundedButton'
import { TabContext, TabPanel } from '@mui/lab'

const TestButton = styled((props: ButtonProps) =>
    <Button variant={'contained'} color={'secondary'} {...props}/>)<ButtonProps>(({theme}) => ({
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


// function TabPanel(props: { children?: React.ReactNode, index: number, value: number }) {
//     const {children, value, index, ...other} = props
//
//     return (
//         <div
//             hidden={value !== index}
//             {...other}
//         >
//             {value === index && (
//                 <Fade duration={500}>
//                     <div>{children}</div>
//                 </Fade>
//             )}
//         </div>
//     )
// }


const StudentProfile = () => {

    const [value, setValue] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const tags: string[] = ['React', 'Java', 'JavaScript', 'Kotlin', 'React Native', 'C#', 'MySQL', 'Git']
    const bgColors: string[] = ['#DDDDDD', '#FEE2E2', '#FEF3C7', '#D1FAE5', '#DBEAFE', '#E0E7FF', '#EDE9FE', '#FCE7F3']
    const textColors: string[] = ['#1F2937', '#991B1B', '#92400E', '#065F46', '#1E40AF', '#3730A3', '#5B21B6', '#9D174D']

    return (
        <>
            <Box mx={-10} mt={-3} style={{
                background: 'linear-gradient(90deg, #06c274 0%, #0a999f 100%)',
            }}>
                <Box px={10} pt={6}>
                    <Stack direction={'row'} justifyContent={'space-between'}
                           spacing={1} alignItems={'center'}>
                        <Typography
                            variant={'h4'}
                            sx={{
                                color: 'white',
                                fontWeight: 800,
                            }}>
                            Добро пожаловать, Иванов Иван Иванович!
                        </Typography>
                        <span>
                            <TestButton><FileDownloadOutlinedIcon/></TestButton>
                            <TestButton>
                                <VisibilityOutlinedIcon/>
                            </TestButton>
                            <TestButton>
                                <EditOutlinedIcon/>
                            </TestButton>
                        </span>
                    </Stack>
                    <Grid container>
                        <Grid item xs={2}/>
                        <Grid item xs>
                            <Tabs TabIndicatorProps={{hidden: true}} value={value} onChange={handleChange}
                                  sx={{mt: 15}}>
                                <StyledTab label="Информация"/>
                                <StyledTab label="Заявки"/>
                                <StyledTab label="Архив"/>
                            </Tabs>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <>
                <Grid container spacing={4}>
                    <Grid item xs={2}>
                        <Stack spacing={4} sx={{mt: -15}}>
                            <Paper elevation={3} style={{
                                aspectRatio: '1',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 4,
                                position: 'relative',
                            }}>
                                <ProfileIcon sx={{fontSize: theme => theme.typography.pxToRem(120)}}/>
                                <IconButton color={'primary'} style={{
                                    position: 'absolute',
                                    bottom: 4,
                                    right: 4,
                                }}>
                                    <FileUploadOutlinedIcon fontSize={'medium'}/>
                                </IconButton>
                                {/*<FileUploadOutlinedIcon fontSize={'medium'} strokeWidth={1} style={{*/}
                                {/*    position: 'absolute',*/}
                                {/*    bottom: 4,*/}
                                {/*    right: 4,*/}
                                {/*}}/>*/}
                            </Paper>
                            <Button variant={'contained'} color={'secondary'}>Посмотреть профиль</Button>
                            <section>
                                <Typography variant={'subtitle1'} style={{fontWeight: 700}}>Контактные
                                    данные</Typography>
                                <br/>
                                <Typography variant={'body1'}>640434 Томск, ул. Вершинина, 39а</Typography>
                                <br/>
                                <Typography variant={'body1'}> +7 (999) 111-22-33</Typography>
                                <Typography variant={'body1'}> name@mail.ru</Typography>
                            </section>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Box pt={5}>
                            <TabContext value={value.toString()}>
                                <TabPanel value={'0'} sx={{p: 0}}>
                                    <section>
                                        <Typography variant={'subtitle1'} style={{fontWeight: 700}}>Резюме</Typography>
                                        <Typography variant={'body1'}>ФИО: Иванов Иван Иванович</Typography>
                                        <Typography variant={'body1'}>Дата рождения: 12.12.2000</Typography>
                                        <Typography variant={'body1'}>Образование: 3 курс</Typography>
                                        <Typography variant={'body1'}>Достижения: обладатель государственной
                                            президентской
                                            стипендии</Typography>
                                    </section>
                                    <Box component={'section'} mt={6}>
                                        <Typography variant={'subtitle1'} style={{fontWeight: 700}}>Дополнительная
                                            информация</Typography>
                                        <Typography variant={'body1'}>КМС по спортивному ориентированию</Typography>
                                        <Typography variant={'body1'}>Волонтер в организации “Стиль жизни”</Typography>
                                    </Box>
                                    <Box component={'section'} mt={6}>
                                        <Typography variant={'subtitle1'} style={{fontWeight: 700}}>Тэги</Typography>
                                        {tags.map((el, index) => (
                                            <Chip size={'small'}
                                                  style={{
                                                      background: bgColors[index % bgColors.length],
                                                      color: textColors[index % textColors.length],
                                                      marginRight: 12,
                                                  }}
                                                  key={el}
                                                  label={el}/>
                                        ))}
                                    </Box>
                                    <Box component={'section'} mt={6}>
                                        <Typography variant={'subtitle1'} style={{fontWeight: 700}}>Резюме</Typography>
                                        <RoundedButton
                                            variant={'contained'}
                                            color={'inherit'}
                                            endIcon={<FileDownloadOutlinedIcon/>}
                                                       size={'small'}
                                                       sx={{
                                                           mr: 1,
                                                           boxShadow: theme => theme.shadows[1],
                                                           height: theme => theme.spacing(3),
                                                       }}>PDF</RoundedButton>
                                        <RoundedButton
                                            variant={'contained'}
                                            color={'inherit'}
                                            endIcon={<FileDownloadOutlinedIcon/>}
                                                       size={'small'}
                                                       sx={{
                                                           boxShadow: theme => theme.shadows[1],
                                                           height: theme => theme.spacing(3),
                                                       }}>DOC</RoundedButton>
                                    </Box>
                                </TabPanel>
                                <TabPanel value={'1'}>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={'2'}>
                                    Item Three
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
