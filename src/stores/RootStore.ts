/**
 * Import all your stores
 */
import { TodoStore } from './TodoStore'
import { RouterStore, Store } from '@simraki/mobx-router'
import AppStore from './AppStore'
import ThemeStore from './ThemeStore'
import LoadingStore from './LoadingStore'

/**
 * Root Store Class with
 */
export default class RootStore implements Store {
    readonly themeStore = new ThemeStore()

    readonly loadingStore = new LoadingStore()

    private _todoStore?: TodoStore

    get todoStore(): TodoStore {
        if (!this._todoStore) {
            this._todoStore = new TodoStore()
        }
        return this._todoStore
    }

    private _app?: AppStore

    get app(): AppStore {
        if (!this._app) {
            this._app = new AppStore()
        }
        return this._app
    }

    private _router?: RouterStore<RootStore>

    get router(): RouterStore<RootStore> {
        if (!this._router) {
            this._router = new RouterStore<RootStore>(this)
        }
        return this._router
    }
}
