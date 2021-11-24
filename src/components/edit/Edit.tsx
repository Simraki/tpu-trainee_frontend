import React, { FC, useState } from 'react'
import { ButtonProps, styled, Typography } from '@mui/material'
import { observer } from 'mobx-react'
import RoundedButton from '../../shared/components/RoundedButton'
import EditStudentTab from './EditStudentTab'
import EditCompanyTab from './EditCompanyTab'

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

const ActiveToggleButton = styled(ToggleButton)<ButtonProps>(({theme}) => ({
    boxShadow: theme.shadows[2] + `, inset 0 0 0 2px ${theme.palette.primary.main}`,
    '&:hover': {
        boxShadow: theme.shadows[2] + `, inset 0 0 0 2px ${theme.palette.primary.dark}`,
    },
}))


const Edit: FC = () => {

    const [value, setValue] = useState(0)

    const values = [
        {
            title: 'Студент',
            tab: <EditStudentTab/>,
        },
        {
            title: 'Компания',
            tab: <EditCompanyTab/>,
        }]

    return (
        <>
            <Typography
                variant={'h4'}
                align={'center'}
                sx={{
                    color: theme => theme.palette.primary.main,
                    fontWeight: 800,
                }}>
                Редактирование профиля
            </Typography>
            <div style={{textAlign: 'center'}}>
                {values.map(({title}, ix) => {
                    if (value === ix) {
                        return (
                            <ActiveToggleButton key={ix}>
                                {title}
                            </ActiveToggleButton>
                        )
                    } else {
                        return (
                            <ToggleButton onClick={() => setValue(ix)} key={ix}>
                                {title}
                            </ToggleButton>
                        )
                    }
                })
                }
            </div>
            {values.map(({tab}, ix) => value === ix && <div key={ix}>{tab}</div>)}
        </>
    )
}

export default observer(Edit)

