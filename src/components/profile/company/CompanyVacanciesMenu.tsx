import React, { FC } from 'react'
import { ListItemIcon, MenuItem, MenuList, Typography } from '@mui/material'
import {
    AddBoxOutlined,
    ArchiveOutlined,
    AssignmentOutlined,
    EditOutlined,
    FormatListBulletedOutlined,
} from '@mui/icons-material'
import { observer } from 'mobx-react'
import { useInstance } from 'react-ioc'
import RootStore from '../../../stores/RootStore'
import routes from '../../../consts/routes'

const CompanyVacanciesMenu: FC = () => {

    const store = useInstance(RootStore)

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
            <MenuItem onClick={() => store.router.goTo(routes.vacancyApplications)}>
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

export default observer(CompanyVacanciesMenu)
