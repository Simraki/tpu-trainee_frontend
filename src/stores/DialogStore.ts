import { action, computed, makeObservable, observable } from 'mobx'
import dialogs, { DialogRoute } from '../consts/dialogs'


class DialogStore {

    dialog: DialogRoute = dialogs.none

    constructor() {
        makeObservable(this, {
            dialog: observable,
            setDialog: action,
            closeDialog: action,
            isOpened: computed
        })
    }

    setDialog(dialog: DialogRoute): void {
        this.dialog = dialog
    }

    closeDialog(): void {
        this.dialog = dialogs.none
    }

    get isOpened(): boolean {
        return this.dialog !== dialogs.none
    }
}

export default DialogStore
