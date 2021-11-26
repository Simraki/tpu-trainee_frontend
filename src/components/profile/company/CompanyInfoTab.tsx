import React, { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import SectionWithTitle from '../../../shared/components/SectionWithTitle'


const CompanyInfoTab: FC = () => {

    const desc = 'Компания "АТЕК-СТРОЙ" является единственной компанией подобного масштаба в Сибири.\n\n' +
        'Более чем за двенадцать лет компания приобрела богатый опыт  в строительно-монтажных работах в нефтегазовой промышленности в Красноярском крае.\n\n' +
        'Предприятие самостоятельно осуществляет весь комплекс работ: от проектирования до строительно-монтажных работ.'

    const items = ['Компания "АТЕК-СТРОЙ" является единственной компанией подобного масштаба в Сибири.',
        'Более чем за двенадцать лет компания приобрела богатый опыт в строительно-монтажных работах в нефтегазовой промышленности в Красноярском крае.',
        'Предприятие самостоятельно осуществляет весь комплекс работ: от проектирования до строительно-монтажных работ.']

    return (
        <Stack spacing={4}>
            <SectionWithTitle title={'О компании'} mt={0}>
                <Typography variant={'body1'}>{desc}</Typography>
            </SectionWithTitle>
            <SectionWithTitle title={'Миссия'}>
                <ul style={{margin: 0}}>
                    {items.map((el, ix) => (
                        <Typography component={'li'} variant={'body1'} key={ix}>
                            {el}
                        </Typography>
                    ))}
                </ul>
            </SectionWithTitle>
        </Stack>
    )
}

export default CompanyInfoTab
