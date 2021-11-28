import React, { FC } from 'react'
import { ListItemIcon, MenuItem, MenuList, Typography } from '@mui/material'
import {
    AddBoxOutlined,
    AddOutlined,
    ArchiveOutlined,
    AssignmentOutlined,
    EditOutlined,
    FormatListBulletedOutlined,
} from '@mui/icons-material'

const CompanyVacanciesMenu: FC = () => {
    return (
        <MenuList>
            <MenuItem>
                <ListItemIcon>
                    <AddBoxOutlined fontSize="small"/>
                </ListItemIcon>
                <Typography variant="inherit">Добавить</Typography>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <EditOutlined fontSize="small"/>
                </ListItemIcon>
                <Typography variant="inherit">Редактирование</Typography>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <FormatListBulletedOutlined fontSize="small"/>
                </ListItemIcon>
                <Typography variant="inherit" noWrap>Открытые вакансии</Typography>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <AssignmentOutlined fontSize="small"/>
                </ListItemIcon>
                <Typography variant="inherit">Заявки</Typography>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <ArchiveOutlined fontSize="small"/>
                </ListItemIcon>
                <Typography variant="inherit">Архив</Typography>
            </MenuItem>
        </MenuList>
    )
}

export default CompanyVacanciesMenu
