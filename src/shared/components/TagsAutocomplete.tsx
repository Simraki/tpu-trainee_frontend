import React, { FC } from 'react'
import { Autocomplete, Chip } from '@mui/material'
import { bgChipColors, textChipColors } from '../../consts/sideColors'
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete/Autocomplete'


interface TagsAutocompleteProps {
    options: ReadonlyArray<string>
    renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode
}


const TagsAutocomplete: FC<TagsAutocompleteProps> = ({options, renderInput}) => {
    return (
        <Autocomplete multiple
                      filterSelectedOptions
                      fullWidth
                      options={options}
                      autoHighlight
                      disableCloseOnSelect
                      renderInput={renderInput}
                      renderTags={(value: readonly string[], getTagProps) =>
                          value.map((option: string, index: number) => (
                              // eslint-disable-next-line react/jsx-key
                              <Chip size={'small'}
                                    sx={{
                                        bgcolor: bgChipColors[index % bgChipColors.length],
                                        color: textChipColors[index % textChipColors.length],
                                    }}
                                    label={option} {...getTagProps({index})}/>
                          ))
                      }
        />
    )
}

export default TagsAutocomplete
