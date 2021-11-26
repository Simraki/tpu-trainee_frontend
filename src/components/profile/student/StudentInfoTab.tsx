import React, { FC } from 'react'
import { Chip, Stack, Typography } from '@mui/material'
import { bgChipColors, textChipColors } from '../../../consts/sideColors'
import GreyRoundedButton from '../../../shared/components/GreyRoundedButton'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import SectionWithTitle from '../../../shared/components/SectionWithTitle'


const StudentInfoTab: FC = () => {

    const tags: string[] = ['React', 'Java', 'JavaScript', 'Kotlin', 'React Native', 'C#', 'MySQL', 'Git']

    return (
        <Stack spacing={4}>
            <SectionWithTitle title={'Резюме'} mt={0}>
                <Typography variant={'body1'}>ФИО: Иванов Иван Иванович</Typography>
                <Typography variant={'body1'}>Дата рождения: 12.12.2000</Typography>
                <Typography variant={'body1'}>Образование: 3 курс</Typography>
                <Typography variant={'body1'}>Достижения: обладатель государственной
                    президентской
                    стипендии</Typography>
            </SectionWithTitle>
            <SectionWithTitle title={'Дополнительная информация'}>
                <Typography variant={'body1'}>КМС по спортивному ориентированию</Typography>
                <Typography variant={'body1'}>Волонтер в организации “Стиль жизни”</Typography>
            </SectionWithTitle>
            <SectionWithTitle title={'Тэги'}>
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
            </SectionWithTitle>
            <SectionWithTitle title={'Резюме'}>
                <GreyRoundedButton
                    endIcon={<FileDownloadOutlinedIcon/>}
                    sx={{mr: 1}}>
                    PDF
                </GreyRoundedButton>
                <GreyRoundedButton
                    endIcon={<FileDownloadOutlinedIcon/>}>
                    DOC
                </GreyRoundedButton>
            </SectionWithTitle>
        </Stack>
    )
}

export default StudentInfoTab
