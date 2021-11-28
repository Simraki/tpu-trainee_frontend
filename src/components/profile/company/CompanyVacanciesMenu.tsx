import React, { FC } from 'react'
import { MenuItem, MenuList, Typography } from '@mui/material'

const CompanyVacanciesMenu: FC = () => {
    return (
        <MenuList>
            <MenuItem>
                <Typography variant="inherit">Редактирование</Typography>
            </MenuItem>
            <MenuItem>
                <Typography variant="inherit" noWrap>Открытые вакансии</Typography>
            </MenuItem>
            <MenuItem>
                <Typography variant="inherit">Заявки</Typography>
            </MenuItem>
            <MenuItem>
                <Typography variant="inherit">Архив</Typography>
            </MenuItem>
        </MenuList>
    )
}

export default CompanyVacanciesMenu
