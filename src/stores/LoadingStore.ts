import { action, makeObservable, observable } from 'mobx'

class LoadingStore {
    isLoading = false

    constructor() {
        makeObservable(this, {
            isLoading: observable,
            setIsLoading: action,
            invertLoading: action.bound,
        })
    }

    setIsLoading(isLoading: boolean): void {
        this.isLoading = isLoading
    }

    invertLoading(): void {
        this.isLoading = !this.isLoading
    }
}

export default LoadingStore
