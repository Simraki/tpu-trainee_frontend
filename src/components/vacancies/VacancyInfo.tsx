import React, { FC } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { PlaceOutlined } from '@mui/icons-material'
import GradientScreen from '../../shared/components/GradientScreen'
import SectionWithTitle from '../../shared/components/SectionWithTitle'
import TagsList from '../../shared/components/TagsList'

const VacancyInfo: FC = () => {

    const features = ['Гибкий график', 'Опыт не требуется', 'Полная занятость']
    const tags = ['React', 'Java', 'JavaScript', 'Kotlin', 'React Native', 'C#', 'MySQL', 'Git']

    const pros = [
        'Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.',
        'Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности требуют от нас анализа дальнейших направлений развития.',
        'Таким образом рамки и место обучения кадров представляет собой интересный эксперимент проверки систем массового участия.',
    ]

    const requirements = [
        'Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия',
        'Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности требуют от нас анализа дальнейших направлений развития',
        'Таким образом рамки и место обучения кадров представляет собой интересный эксперимент проверки систем массового участия',
    ]

    return (
        <>
            <GradientScreen>
                <Stack spacing={1} alignItems={'flex-start'}>
                    <Typography
                        variant={'h4'}
                        color={'white'}
                        fontWeight={700}
                    >
                        Главный специалист-эксперт
                    </Typography>
                    <Typography
                        variant={'h6'}
                        color={'white'}
                    >
                        В компании {'\"Name\"'}
                    </Typography>
                    <Typography
                        variant={'h6'}
                        color={'white'}
                    >
                        ₽ 20 000 - 30 000
                    </Typography>
                    <Button variant={'contained'} color={'secondary'} sx={{width: theme => theme.spacing(33)}}>
                        Откликнуться
                    </Button>
                    <Stack direction={'row'} spacing={0.5} alignItems={'baseline'}>
                        <PlaceOutlined fontSize={'small'} htmlColor={'white'}/>
                        <Typography
                            variant={'h6'}
                            color={'white'}
                            fontWeight={300}
                        >
                            Адрес: г. Томск, ул. Пушкина, дом 1, офис 1
                        </Typography>
                    </Stack>
                </Stack>
            </GradientScreen>
            <>
                <Stack spacing={2} sx={{mt: 2, width: 0.6}}>
                    <section>
                        {
                            features.map((el, ix) => (
                                <Typography variant={'body2'} key={ix} mr={4} display={'inline-block'}>
                                    {el}
                                </Typography>
                            ))
                        }
                    </section>
                    <section>
                        <TagsList tags={tags}/>
                    </section>
                    <SectionWithTitle title={'Описание вакансии:'}>
                        <Typography variant={'body1'}>
                            Разнообразный и богатый опыт консультация с широким активом позволяет выполнять важные
                            задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Не
                            следует, однако забывать, что консультация с широким активом представляет собой интересный
                            эксперимент проверки форм развития.
                        </Typography>
                    </SectionWithTitle>
                    <SectionWithTitle title={'Наши преимущества:'}>
                        <ul style={{margin: 0}}>
                            {
                                pros.map((el, ix) => (
                                    <Typography component={'li'} variant={'body1'} key={ix}>
                                        {el}
                                    </Typography>
                                ))
                            }
                        </ul>
                    </SectionWithTitle>
                    <SectionWithTitle title={'Требования:'}>
                        <ul style={{margin: 0}}>
                            {
                                requirements.map((el, ix) => (
                                    <Typography component={'li'} variant={'body1'} key={ix}>
                                        {el}
                                    </Typography>
                                ))
                            }
                        </ul>
                    </SectionWithTitle>
                </Stack>
            </>
        </>
    )
}

export default VacancyInfo
