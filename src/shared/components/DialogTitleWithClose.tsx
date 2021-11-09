import React, { FC } from 'react'
import { Box, DialogTitle, IconButton, Theme, Typography } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

interface IDialogTitleWithCloseProps {
    paddingBottom?: number,
    onClose: () => void,
    disabled: boolean,
    title: string,
    disablePadding: boolean
}

const DialogTitleWithClose: FC<IDialogTitleWithCloseProps> = ({
                                                                  paddingBottom,
                                                                  onClose,
                                                                  disabled,
                                                                  title,
                                                                  disablePadding,
                                                              }) => {

    return (<DialogTitle
            sx={{
                pb: (theme: Theme) => disablePadding ? 0 : (paddingBottom ? paddingBottom : Number(theme.spacing(3))),
                pl: disablePadding ? 0 : null,
                pr: disablePadding ? 0 : null,
                pt: disablePadding ? 0 : null,
                width: '100%',
            }}
        >
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h5">{title}</Typography>
                <IconButton
                    onClick={onClose}
                    style={{marginRight: -12, marginTop: -10}}
                    disabled={disabled}
                    aria-label="Close"
                >
                    <CloseRoundedIcon/>
                </IconButton>
            </Box>
        </DialogTitle>
    )
}


export default DialogTitleWithClose
