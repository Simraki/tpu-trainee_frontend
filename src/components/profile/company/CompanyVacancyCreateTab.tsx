import React, { FC } from 'react'
import {
    Autocomplete,
    FormControl,
    FormControlLabel,
    Grid,
    Paper,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material'
import UserTextField from '../../../shared/components/UserTextField'
import SectionWithTitle from '../../../shared/components/SectionWithTitle'
import TagsAutocomplete from '../../../shared/components/TagsAutocomplete'


const CompanyVacancyCreateTab: FC = () => {

    return (
        <Grid container spacing={4}>
            <Grid item xs={9}>
                <Grid mb={2} container>
                    <Grid item xs={8}>
                        <Typography variant={'subtitle1'} fontWeight={400}>
                            Название вакансии
                        </Typography>
                        <TextField placeholder={'Введите'} size={'small'}
                                   fullWidth
                                   InputProps={{
                                       style: {
                                           borderBottomRightRadius: 0,
                                           borderTopRightRadius: 0,
                                       },
                                   }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant={'subtitle1'} fontWeight={400}>
                            Тип вакансии
                        </Typography>
                        <Autocomplete options={['Работа', 'Подработка']}
                                      size={'small'}
                                      fullWidth
                                      renderInput={({InputProps, ...params}) =>
                                          <TextField {...params}
                                                     placeholder={'Введите'}
                                                     InputProps={{
                                                         ...InputProps,
                                                         style: {
                                                             borderBottomLeftRadius: 0,
                                                             borderTopLeftRadius: 0,
                                                         },
                                                     }}
                                          />
                                      }
                        />

                    </Grid>
                </Grid>
                <Autocomplete options={['Томск', 'Кемерово']}
                              renderInput={params => <UserTextField label={'Город'}
                                                                    inputProps={params}/>
                              }
                />
                <TagsAutocomplete options={['Django', 'React']}
                                  renderInput={params => <UserTextField label={'Технологический стек'}
                                                                        inputProps={params}/>
                                  }
                />
                <UserTextField label={'Адрес офиса'}/>
                <Autocomplete options={['₽ 20.000 - 30.000', '₽ 30.000 - 40.000']}
                              renderInput={params => <UserTextField label={'Уровень дохода'}
                                                                    inputProps={params}/>
                              }
                />
                <UserTextField label={'Описание вакансии'}
                               inputProps={{
                                   multiline: true,
                                   minRows: 5,
                                   maxRows: 5,
                               }}
                />
            </Grid>
            <Grid item xs={3}>
                <SectionWithTitle title={'Опыт работы'}>
                    <Paper elevation={0} sx={{py: 1, px: 2}}>
                        <FormControl component={'fieldset'}>
                            <RadioGroup defaultValue="0">
                                <FormControlLabel value="0" control={<Radio/>} label="Не требуется"/>
                                <FormControlLabel value="1-3" control={<Radio/>} label="1-3 года"/>
                                <FormControlLabel value="3-5" control={<Radio/>} label="3-5 лет"/>
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                </SectionWithTitle>
                <SectionWithTitle title={'График работы'} mt={2}>
                    <Paper elevation={0} sx={{py: 1, px: 2}}>
                        <FormControl component={'fieldset'}>
                            <RadioGroup defaultValue="full">
                                <FormControlLabel value="full" control={<Radio/>} label="Полный день"/>
                                <FormControlLabel value="flexible" control={<Radio/>} label="Гибкий график"/>
                                <FormControlLabel value="shift" control={<Radio/>} label="Сменный график"/>
                                <FormControlLabel value="watch" control={<Radio/>} label="Вахта"/>
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                </SectionWithTitle>
            </Grid>
        </Grid>
    )
}

export default CompanyVacancyCreateTab
