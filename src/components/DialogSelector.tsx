import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { useInstance } from 'react-ioc'
import RootStore from '../stores/RootStore'
import ModalBackdrop from '../shared/components/ModalBackdrop'


const DialogSelector: FC = () => {

    const {dialogStore} = useInstance(RootStore)

    return (
        <>
            {dialogStore.isOpened && <ModalBackdrop open={true}/>}
            {dialogStore.dialog.component}
        </>
    )
}

export default observer(DialogSelector)
