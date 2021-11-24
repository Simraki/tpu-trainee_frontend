import React, { FC } from 'react'
import { Paper, Table, TableBody, TableContainer, Theme } from '@mui/material'
import StyledTableHead, { StyledTableHeadProps } from './StyledTableHead'
import { SxProps } from '@mui/system'

interface StyledTableProps extends StyledTableHeadProps {
    sxBody?: SxProps<Theme>
}

const StyledTable: FC<StyledTableProps> = (props) => {
    return (
        <TableContainer component={Paper} sx={{borderRadius: 2}}>
            <Table size={'small'}>
                <StyledTableHead titles={props.titles} color={props.color} sxHead={props.sxHead}/>
                <TableBody sx={props.sxBody}>
                    {props.children}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default StyledTable
