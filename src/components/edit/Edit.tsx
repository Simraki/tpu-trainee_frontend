import React, { FC, useState } from 'react'
import { Box, ButtonProps, styled, Theme, Typography } from '@mui/material'
import { observer } from 'mobx-react'
import RoundedButton from '../../shared/components/RoundedButton'
import EditStudentTab from './EditStudentTab'
import EditCompanyTab from './EditCompanyTab'
import { SxProps } from '@mui/system'


const ToggleButton = styled(RoundedButton)<ButtonProps>(({theme}) => ({
    color: '#343535',
    background: 'white',
    fontWeight: 400,
    margin: 16,
    // boxShadow: theme.shadows[2] + `, inset 0 0 0 2px ${grey[400]}`,
    boxShadow: theme.shadows[2],
    '&:hover': {
        // boxShadow: theme.shadows[2] + `, inset 0 0 0 2px ${grey[400]}`,
        boxShadow: theme.shadows[2],
        background: theme.palette.primary.dark,
        color: 'white',
    },
}))

const activeToggleButtonSx: SxProps<Theme> = {
    boxShadow: theme => theme.shadows[2] + `, inset 0 0 0 2px ${theme.palette.primary.main}`,
    '&:hover': {
        boxShadow: theme => theme.shadows[2] + `, inset 0 0 0 2px ${theme.palette.primary.dark}`,
    },
}


const Edit: FC = () => {

    const [value, setValue] = useState(0)

    return (
        <>
            <Typography
                variant={'h4'}
                align={'center'}
                fontWeight={800}
                color={'primary.main'}
            >
                Редактирование профиля
            </Typography>
            <Box textAlign={'center'}>
                <ToggleButton onClick={() => setValue(0)}
                              sx={value === 0 ? activeToggleButtonSx : undefined}
                >
                    Студент
                </ToggleButton>
                <ToggleButton onClick={() => setValue(1)}
                              sx={value === 1 ? activeToggleButtonSx : undefined}
                >
                    Компания
                </ToggleButton>
            </Box>
            {value === 0 && <EditStudentTab/>}
            {value === 1 && <EditCompanyTab/>}
        </>
    )
}

export default observer(Edit)

