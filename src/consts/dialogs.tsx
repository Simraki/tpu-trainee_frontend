import React from 'react'
import RegistrationDialog from '../components/home/RegistrationDialog'
import AuthDialog from '../components/home/AuthDialog'

export class DialogRoute {
    name: string
    readonly component: React.ReactNode

    constructor({name, component}: { name: string, component: React.ReactNode }) {
        this.name = name
        this.component = component
    }
}


const dialogs = {
    registration: new DialogRoute({
        name: 'registration',
        component: <RegistrationDialog/>,
    }),
    auth: new DialogRoute({
        name: 'auth',
        component: <AuthDialog/>,
    }),
    none: new DialogRoute({
        name: '',
        component: undefined,
    }),
}

export default dialogs
