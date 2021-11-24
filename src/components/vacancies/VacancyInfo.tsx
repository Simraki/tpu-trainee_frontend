import React, { FC } from 'react'
import { Box, Button, Chip, Stack, Typography } from '@mui/material'
import { bgChipColors, linearGradient, textChipColors } from '../../consts/sideColors'
import { MapOutlined, PlaceOutlined } from '@mui/icons-material'

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
            <Box mx={-10} mt={-3} style={{
                background: linearGradient,
            }}
            >
                <Box px={10} pt={6} pb={2}>
                    <Stack spacing={1} alignItems={'flex-start'}>
                        <Typography
                            variant={'h4'}
                            color={'white'}
                            fontWeight={700}>
                            Главный специалист-эксперт
                        </Typography>
                        <Typography
                            variant={'h6'}
                            color={'white'}
                            fontWeight={500}>
                            В компании {'\"Name\"'}
                        </Typography>
                        <Typography
                            variant={'h6'}
                            color={'white'}
                            fontWeight={500}>
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
                                fontWeight={300}>
                                Адрес: г. Томск, ул. Пушкина, дом 1, офис 1
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
            <>
                <Stack spacing={2} sx={{mt: 2, width: 0.6}}>
                    <section>
                        {features.map((el, ix) => (
                            <Typography variant={'body2'} key={ix} mr={4} display={'inline-block'} fontWeight={500}>
                                {el}
                            </Typography>
                        ))}
                    </section>
                    <section>
                        {tags.map((el, index) => (
                            <Chip size={'small'}
                                  style={{
                                      background: bgChipColors[index % bgChipColors.length],
                                      color: textChipColors[index % textChipColors.length],
                                      marginRight: 12,
                                  }}
                                  key={el}
                                  label={el}/>
                        ))}
                    </section>
                    <section>
                        <Typography variant={'subtitle2'} fontWeight={700} mb={1}>
                            Описание вакансии:
                        </Typography>
                        <Typography variant={'body2'}>
                            Разнообразный и богатый опыт консультация с широким активом позволяет выполнять важные
                            задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Не
                            следует, однако забывать, что консультация с широким активом представляет собой интересный
                            эксперимент проверки форм развития.
                        </Typography>
                    </section>
                    <section>
                        <Typography variant={'subtitle2'} fontWeight={700} mb={1}>
                            Наши преимущества:
                        </Typography>
                        <ul style={{margin: 0}}>
                            {pros.map((el, ix) => (
                                <Typography component={'li'} variant={'body2'} key={ix}>
                                    {el}
                                </Typography>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <Typography variant={'subtitle2'} fontWeight={700} mb={1}>
                            Требования:
                        </Typography>
                        <ul style={{margin: 0}}>
                            {requirements.map((el, ix) => (
                                <Typography component={'li'} variant={'body2'} key={ix}>
                                    {el}
                                </Typography>
                            ))}
                        </ul>
                    </section>
                </Stack>
            </>
        </>
    )
}

export default VacancyInfo
