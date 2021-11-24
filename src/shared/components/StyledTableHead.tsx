import React, { FC } from 'react'
import { TableCell, TableHead, TableRow, Theme } from '@mui/material'
import { SxProps } from '@mui/system'

export interface TitleTable {
    title: string
    span?: number
}

interface StyledTableHeadProps {
    titles: TitleTable[]
    color?: 'primary' | 'grey'
    sxHead?: SxProps<Theme>
}

const StyledTableHead: FC<StyledTableHeadProps> = ({titles, color = 'grey', sxHead}) => {

    let sx: SxProps<Theme> = {}

    if (color === 'grey') {
        sx = {
            color: '#39847D',
            bgcolor: '#EBEBEB',
            '.MuiTableRow-root': {
                borderColor: '#EBEBEB'
            }
        }
    } else if (color === 'primary') {
        sx = {
            color: 'white',
            bgcolor: 'primary.main',
            '.MuiTableRow-root': {
                borderColor: 'primary.main'
            }
        }
    }

    Object.assign(sx, sxHead)

    return (
        <TableHead sx={sx}>
            <TableRow>
                {titles.map(el => (
                    <TableCell align={'left'} key={el.title} colSpan={el.span ?? 1}>{el.title}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default StyledTableHead
