import React, { FC } from 'react'
import TopScreen from '../../shared/components/TopScreen'
import home_bg from '../../asset/img/home_bg.jpg'
import {
    Box,
    Button,
    Grid,
    InputAdornment,
    Link,
    MenuItem,
    Select,
    SelectChangeEvent,
    styled,
    TextField,
    Typography,
} from '@mui/material'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TagsAutocomplete from '../../shared/components/TagsAutocomplete'
import {
    AssignmentOutlined,
    FactCheckOutlined,
    GroupAddOutlined,
    LocalOfferOutlined,
    SearchOutlined,
    SentimentVerySatisfiedOutlined,
} from '@mui/icons-material'
import { grey } from '@mui/material/colors'


const WhiteSelect = styled(Select)(({theme}) => ({
    background: 'white',
    borderRadius: 0,
    '&:hover fieldset': {
        borderColor: grey[700],
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
    },
}))


const Home: FC = () => {

    const [searchType, setSearchType] = React.useState('vacancy')

    const handleChange = (event: SelectChangeEvent<any>) => {
        setSearchType(event.target.value)
    }

    const steps = [
        {
            label: 'Зарегистрируйся на сайте',
            icon: <GroupAddOutlined/>,
        },
        {
            label: 'Создай резюме',
            icon: <AssignmentOutlined/>,
        },
        {
            label: 'Ищи вакансии с помощью тегов',
            icon: <LocalOfferOutlined/>,
        },
        {
            label: 'Изучай страницы работодателей',
            icon: <FactCheckOutlined/>,
        },
        {
            label: 'Получи желанный оффер',
            icon: <SentimentVerySatisfiedOutlined/>,
        },
    ]

    return (
        <>
            <TopScreen outerProps={{style: {background: `url(${home_bg})`}}} pt={18} pb={6}>
                <Typography variant={'h4'} color={'white'} fontWeight={800}>
                    Поиск только нужных вакансий
                </Typography>
                <Grid container mt={1} mb={2} alignItems={'stretch'}>
                    <Grid item xs>
                        <TagsAutocomplete options={['Django', 'React']}
                                          renderInput={({InputProps, ...params}) =>
                                              <TextField {...params}
                                                         placeholder={'Я ищу...'}
                                                         InputProps={{
                                                             ...InputProps,
                                                             style: {
                                                                 borderBottomRightRadius: 0,
                                                                 borderTopRightRadius: 0,
                                                             },
                                                             startAdornment: (
                                                                 <InputAdornment position={'start'}>
                                                                     <SearchOutlined color={'primary'}/>
                                                                 </InputAdornment>
                                                             ),
                                                         }}
                                              />
                                          }
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <WhiteSelect variant={'outlined'}
                                     value={searchType}
                                     fullWidth
                                     onChange={handleChange}
                        >
                            <MenuItem value={'vacancy'}>Вакансия</MenuItem>
                            <MenuItem value={'cv'}>Резюме</MenuItem>
                        </WhiteSelect>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant={'contained'} fullWidth
                                disableElevation
                                sx={{
                                    height: 1,
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0,
                                }}
                        >
                            Найти
                        </Button>
                    </Grid>
                </Grid>
                <Link href={'#'} color={'#FFF'}
                      style={{textUnderlineOffset: 2}}
                      fontWeight={500}
                >
                    Я работодатель
                </Link>
            </TopScreen>
            <Box pt={2}>
                <Timeline>
                    {
                        steps.map((el, ix) => (
                            <TimelineItem key={el.label} sx={{'&::before': {content: 'none'}}}>
                                <TimelineSeparator>
                                    <TimelineDot color={'primary'}>
                                        {el.icon}
                                    </TimelineDot>
                                    {ix + 1 !== steps.length && <TimelineConnector/>}
                                </TimelineSeparator>
                                <TimelineContent sx={{py: 2, px: 2}}>
                                    <Typography variant={'body1'} fontWeight={500}>
                                        {el.label}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }
                </Timeline>
            </Box>
            <Box pt={2}>
                <Grid container alignItems={'center'}>
                    <Grid item xs={9}>
                        <Typography variant={'h5'} fontWeight={800} lineHeight={0.7}>
                            Готовы к поиску работы?
                        </Typography>
                        <Typography variant={'h5'} color={'primary.main'} fontWeight={800}>
                            Начните с составления резюме
                        </Typography>
                    </Grid>
                    <Grid item xs container justifyContent={'flex-end'}>
                        <Button variant={'contained'} sx={{mr: 2}}>Начать</Button>
                        <Button variant={'contained'} color={'secondary'}>Подробнее</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home
