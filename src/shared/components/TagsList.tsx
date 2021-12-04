import React, { FC } from 'react'
import { Chip } from '@mui/material'
import { bgChipColors, textChipColors } from '../../consts/sideColors'

const TagsList: FC<{ tags: string[] }> = ({tags}) => {
    return (
        <>
            {
                tags.map((el, index) => (
                    <Chip size={'small'}
                          sx={{
                              bgcolor: bgChipColors[index % bgChipColors.length],
                              color: textChipColors[index % textChipColors.length],
                              mr: 1.5,
                          }}
                          key={el}
                          label={el}
                    />
                ))
            }
        </>
    )
}

export default TagsList
