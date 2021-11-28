import React, { FC, useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import SectionWithTitle from '../../../shared/components/SectionWithTitle'


const CompanyInfoTab: FC = () => {

    const [isFull, setFull] = useState(false)

    const desc = 'Компания "АТЕК-СТРОЙ" является единственной компанией подобного масштаба в Сибири.\n\n' +
        'Более чем за двенадцать лет компания приобрела богатый опыт  в строительно-монтажных работах в нефтегазовой промышленности в Красноярском крае.\n\n' +
        'Предприятие самостоятельно осуществляет весь комплекс работ: от проектирования до строительно-монтажных работ.'

    const items = ['Компания "АТЕК-СТРОЙ" является единственной компанией подобного масштаба в Сибири.',
        'Более чем за двенадцать лет компания приобрела богатый опыт в строительно-монтажных работах в нефтегазовой промышленности в Красноярском крае.',
        'Предприятие самостоятельно осуществляет весь комплекс работ: от проектирования до строительно-монтажных работ.']

    return (
        <Stack spacing={4} alignItems={'start'}>
            {
                isFull ?
                    <>
                        <SectionWithTitle title={'О компании'} mt={0}>
                            <Typography variant={'body1'}>{desc}</Typography>
                        </SectionWithTitle>
                        <SectionWithTitle title={'Миссия'}>
                            <ul style={{margin: 0}}>
                                {
                                    items.map((el, ix) => (
                                        <Typography component={'li'} variant={'body1'} key={ix}>
                                            {el}
                                        </Typography>
                                    ))
                                }
                            </ul>
                        </SectionWithTitle>
                    </>
                    :
                    <>
                        <Typography variant={'body1'}>Вы еще не заполнили профиль</Typography>
                        <Button variant={'contained'} onClick={() => setFull(true)}>
                            Заполнить профиль
                        </Button>
                    </>
            }
        </Stack>
    )
}

export default CompanyInfoTab
