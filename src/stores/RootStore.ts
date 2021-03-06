/**
 * Import all your stores
 */
import { RouterStore, Store } from '@simraki/mobx-router'
import ThemeStore from './ThemeStore'
import LoadingStore from './LoadingStore'
import DialogStore from './DialogStore'

/**
 * Root Store Class with
 */
export default class RootStore implements Store {
    readonly themeStore = new ThemeStore()
    readonly dialogStore = new DialogStore()

    readonly loadingStore = new LoadingStore()

    private _router?: RouterStore<RootStore>

    get router(): RouterStore<RootStore> {
        if (!this._router) {
            this._router = new RouterStore<RootStore>(this)
        }
        return this._router
    }
}
