import React, { FC } from 'react'
import { Autocomplete, ButtonProps, Chip, Grid, InputAdornment, styled, Typography } from '@mui/material'
import UserTextField from '../../shared/components/UserTextField'
import { green, lime, orange, pink, purple, red, teal } from '@mui/material/colors'
import { observer } from 'mobx-react'
import RoundedButton from '../../shared/components/RoundedButton'
import { bgChipColors, textChipColors } from '../../consts/sideColors'

const ToggleButton = styled(RoundedButton)<ButtonProps>(({theme}) => ({
    color: '#343535',
    bgcolor: 'white',
    fontWeight: 400,
    margin: 16,
    // boxShadow: theme.shadows[2] + `, inset 0 0 0 2px ${grey[400]}`,
    boxShadow: theme.shadows[2],
    '&:hover': {
        // boxShadow: theme.shadows[2] + `, inset 0 0 0 2px ${grey[400]}`,
        boxShadow: theme.shadows[2],
        bgcolor: theme.palette.primary.dark,
        color: 'white',
    },
}))

const ActiveToggleButton = styled(ToggleButton)<ButtonProps>(({theme}) => ({
    boxShadow: theme.shadows[2] + `, inset 0 0 0 2px ${theme.palette.primary.main}`,
    '&:hover': {
        boxShadow: theme.shadows[2] + `, inset 0 0 0 2px ${theme.palette.primary.dark}`,
    },
}))


const EditStudentProfile: FC = () => {

    const colorArray = [orange, red, green, lime, purple, pink, teal]

    const paletteBg = 200
    const paletteText = 500


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
                <ActiveToggleButton>
                    Студент
                </ActiveToggleButton>
                <ToggleButton>
                    Компания
                </ToggleButton>
            </div>
            <Grid container justifyContent={'space-evenly'}>
                <Grid item xs={6} sx={{pr: 2}}>
                    <UserTextField label={'Фамилия'}/>
                    <UserTextField label={'Имя'}/>
                    <UserTextField label={'Отчество'}/>
                    <UserTextField label={'Дата рождения'}
                                   inputProps={{
                                       type: 'date',
                                       inputProps: {
                                           style: {
                                               color: '#a4a4a4',
                                           },
                                       },
                                   }}/>
                    <Autocomplete options={['ТПУ', 'ТГУ']}
                                  renderInput={params => <UserTextField label={'Университет'}
                                                                        inputProps={params}/>}/>
                    <Autocomplete options={['1 курс', '2 курс']}
                                  renderInput={params => <UserTextField label={'Курс'}
                                                                        inputProps={params}/>}/>
                    <Autocomplete multiple
                                  filterSelectedOptions
                                  options={['Django', 'React']}
                                  renderTags={(value: readonly string[], getTagProps) =>
                                      value.map((option: string, index: number) => (
                                          // eslint-disable-next-line react/jsx-key
                                          <Chip size={'small'}
                                                style={{
                                                    background: bgChipColors[index % bgChipColors.length],
                                                    color: textChipColors[index % textChipColors.length],
                                                }}
                                                label={option} {...getTagProps({index})}/>
                                      ))
                                  }
                                  renderInput={params => <UserTextField label={'Технологический стек'}
                                                                        inputProps={params}/>}/>
                    <UserTextField label={'GitHub / GitLab'} inputProps={{
                        type: 'url',
                        InputProps: {
                            startAdornment: <InputAdornment position={'start'}>https://</InputAdornment>,
                        },
                        placeholder: 'example.com',
                    }}/>
                </Grid>
                <Grid item xs={6} sx={{pl: 2}}>
                    <UserTextField label={'О себе'} inputProps={{
                        multiline: true,
                        minRows: 5,
                        maxRows: 5,
                    }}/>
                    <UserTextField label={'Дополнительная информация'} inputProps={{
                        multiline: true,
                        maxRows: 2,
                    }}/>
                    <UserTextField label={'Адрес'}/>
                    <UserTextField label={'Номер телефона'} inputProps={{
                        type: 'tel',
                        InputProps: {
                            startAdornment: <InputAdornment position={'start'}>+7</InputAdornment>,
                        },
                        placeholder: '999 999 99 99',
                    }}/>
                    <UserTextField label={'Email'} inputProps={{type: 'email'}}/>
                    <UserTextField label={'Пароль'} inputProps={{type: 'password'}}/>
                    <UserTextField label={'Повторите пароль'} inputProps={{type: 'password'}}/>
                </Grid>
            </Grid>
        </>
    )
}

export default observer(EditStudentProfile)

