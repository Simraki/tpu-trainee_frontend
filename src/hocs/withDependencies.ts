import { IReactComponent } from 'mobx-react/src/types/IReactComponent'
import { provider } from 'react-ioc'
import { dependencies } from '../consts/dependencies'

export function withDependencies<T extends IReactComponent>(component: T): T {
    return provider(...dependencies)(component)
}
