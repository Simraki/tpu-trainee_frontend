import RootStore from '../stores/RootStore'
import { TodoStore } from '../stores/TodoStore'

const stores = [RootStore, TodoStore]

export const dependencies = [...stores]
