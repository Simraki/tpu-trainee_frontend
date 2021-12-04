import React, { FC } from 'react'
import { Autocomplete, Grid, InputAdornment } from '@mui/material'
import UserTextField from '../../shared/components/UserTextField'
import { observer } from 'mobx-react'
import TagsAutocomplete from '../../shared/components/TagsAutocomplete'


const EditCompanyTab: FC = () => {

    return (
        <Grid container justifyContent={'space-evenly'}>
            <Grid item xs={6} sx={{pr: 2}}>
                <UserTextField label={'Название компании'}/>
                <UserTextField label={'Фамилия представителя'}/>
                <UserTextField label={'Имя представителя'}/>
                <UserTextField label={'Направление/специализация'}/>
                <UserTextField label={'Вакансии'}/>
                <Autocomplete options={['Статус 1', 'Статус 2']}
                              renderInput={params => <UserTextField label={'Статус искомых сотрудников'}
                                                                    inputProps={params}/>
                              }
                />
                <TagsAutocomplete options={['Django', 'React']}
                                  renderInput={params => <UserTextField label={'Технологический стек'}
                                                                        inputProps={params}/>
                                  }
                />
                <UserTextField label={'Вебсайт'}
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
                <UserTextField label={'О компании'}
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

export default observer(EditCompanyTab)

