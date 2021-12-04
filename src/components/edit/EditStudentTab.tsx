import React, { FC, useState } from 'react'
import { Autocomplete, Grid, InputAdornment } from '@mui/material'
import UserTextField from '../../shared/components/UserTextField'
import { observer } from 'mobx-react'
import TagsAutocomplete from '../../shared/components/TagsAutocomplete'


const EditStudentTab: FC = () => {

    const [dateType, setDateType] = useState('text')

    return (
        <Grid container justifyContent={'space-evenly'}>
            <Grid item xs={6} sx={{pr: 2}}>
                <UserTextField label={'Фамилия'}/>
                <UserTextField label={'Имя'}/>
                <UserTextField label={'Отчество'}/>
                <UserTextField label={'Дата рождения'}
                               inputProps={{
                                   type: dateType,
                                   onFocus: () => setDateType('date'),
                                   onBlur: (e) => {
                                       !e.currentTarget.value && setDateType('text')
                                   },
                               }}
                />
                <Autocomplete options={['ТПУ', 'ТГУ']}
                              renderInput={params => <UserTextField label={'Университет'}
                                                                    inputProps={params}/>
                              }
                />
                <Autocomplete options={['1 курс', '2 курс']}
                              renderInput={params => <UserTextField label={'Курс'}
                                                                    inputProps={params}/>
                              }
                />
                <TagsAutocomplete options={['Django', 'React']}
                                  renderInput={params => <UserTextField label={'Технологический стек'}
                                                                        inputProps={params}/>
                                  }
                />
                <UserTextField label={'GitHub / GitLab'}
                               inputProps={{
                                   type: 'url',
                                   InputProps: {
                                       startAdornment: <InputAdornment position={'start'}>https://</InputAdornment>,
                                   },
                                   placeholder: 'example.com',
                               }}
                />
            </Grid>
            <Grid item xs={6} sx={{pl: 2}}>
                <UserTextField label={'О себе'}
                               inputProps={{
                                   multiline: true,
                                   minRows: 5,
                                   maxRows: 5,
                               }}
                />
                <UserTextField label={'Дополнительная информация'}
                               inputProps={{
                                   multiline: true,
                                   maxRows: 2,
                               }}
                />
                <UserTextField label={'Адрес'}/>
                <UserTextField label={'Номер телефона'}
                               inputProps={{
                                   type: 'tel',
                                   InputProps: {
                                       startAdornment: <InputAdornment position={'start'}>+7</InputAdornment>,
                                   },
                                   placeholder: '999 999 99 99',
                               }}
                />
                <UserTextField label={'Email'} inputProps={{type: 'email'}}/>
                <UserTextField label={'Пароль'} inputProps={{type: 'password'}}/>
                <UserTextField label={'Повторите пароль'} inputProps={{type: 'password'}}/>
            </Grid>
        </Grid>
    )
}

export default observer(EditStudentTab)

