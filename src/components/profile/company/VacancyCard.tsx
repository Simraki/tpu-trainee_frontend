import React, { FC, useState } from 'react'
import { Vacancy } from '../../../stores/entities/Vacancy'
import { Box, IconButton, ListItemIcon, ListItemText, MenuItem, Paper, Stack, styled, Typography } from '@mui/material'
import { grey, orange } from '@mui/material/colors'
import { ArchiveOutlined, CloseRounded, EditOutlined, MoreVertOutlined } from '@mui/icons-material'
import DotsMenu from '../../../shared/components/DotsMenu'


const VacancyPaper = styled((props) => <Paper elevation={3} {...props}/>)(({theme}) => ({
    aspectRatio: '7 / 3',
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}))


const VacancyCard: FC<{ vacancy: Vacancy }> = ({vacancy}) => {

    const [anchorEl, setAnchorEl] = useState<null | Element>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <VacancyPaper>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'baseline'}>
                <span>
                    <Typography variant={'subtitle1'} mb={1} mr={1} display={'inline-block'}>
                        {vacancy.name}
                    </Typography>
                    {
                        vacancy.applicationNum !== 0 &&
                        <Box display={'inline-block'}
                             bgcolor={orange[500]}
                             color={'white'}
                             fontWeight={700}
                             borderRadius={'50%'}
                             width={'1.6em'}
                             lineHeight={'1.6em'}
                             textAlign={'center'}
                        >
                            {vacancy.applicationNum}
                        </Box>
                    }
                </span>
                <span>
                    <IconButton onClick={handleClick}>
                        <MoreVertOutlined/>
                    </IconButton>
                    <DotsMenu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem>
                            <ListItemIcon><EditOutlined/></ListItemIcon>
                            <ListItemText>Править</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon><ArchiveOutlined/></ListItemIcon>
                            <ListItemText>В архив</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon><CloseRounded color={'error'}/></ListItemIcon>
                            <ListItemText primaryTypographyProps={{color: 'error'}}>Удалить</ListItemText>
                        </MenuItem>
                    </DotsMenu>
                </span>
            </Stack>
            <Typography variant={'body1'} mb={1}>{`Требуемый опыт: ${vacancy.careerLevel}`}</Typography>
            <Typography variant={'body1'} mb={1}>{`Занятость: ${vacancy.schedule}`}</Typography>
            <Typography variant={'body1'} fontWeight={500} mb={1} px={1} py={0.5} bgcolor={'#22DDCD7D'}
                        borderRadius={1}
                        width={'fit-content'}
            >
                {`₽ ${vacancy.salary}`}
            </Typography>
            <Typography variant={'caption'} align={'right'} color={grey[500]}>{vacancy.pubDate}</Typography>
        </VacancyPaper>
    )
}

export default VacancyCard
