import React, { FC, useCallback } from 'react'
import { observer } from 'mobx-react'
import { TodoViewModel } from '../../viewmodels/TodoViewModel'
import SingleTodoView from './SingleTodoView'
import { Todo } from '../../stores/entities/Todo'
import routes from '../../consts/routes'
import { useInstance } from 'react-ioc'
import RootStore from '../../stores/RootStore'
import { Button, createTheme, styled, Theme, Typography } from '@mui/material'
import { Fade } from 'react-awesome-reveal'
import { yellow } from '@mui/material/colors'
import useIsWidthUp from '../../shared/functions/useIsWidthUp'
import classNames from 'classnames'

// Новая тема
const theme: Theme = createTheme({
    palette: {
        primary: {
            main: yellow[300],
        },
    },
})

// Внедрение Styled Components
const Root = styled('div')(({theme}) => ({
    color: theme.palette.primary.main,
}))

const TodoView: FC = () => {

    // Внедрение зависимостей
    const viewModel = useInstance(TodoViewModel)
    const store = useInstance(RootStore)

    // Функция для изменения глобальной темы
    // Используем useCallback
    const handle = useCallback(() => {
        store.themeStore.setTheme(theme)
    }, [store.themeStore])

    return (
        <div>
            {
                // Проверка, что ширина экрана принадлежит [md, +inf)
                useIsWidthUp('md') ? '>=md' : '<md'
            }

            {
                // Кнопка для изменения глобальной темы
                // В первом случае используем колбек
                // Во втором случае используем часть mobx - action.bound
            }
            <div><Button onClick={handle}>Change Theme 1</Button></div>
            <div><Button onClick={store.themeStore.testTheme}>Toggle Theme 2</Button></div>

            {
                // Использование класса в UserGlobalStyles
                // Использование функции для объединения классов
            }
            <div className={classNames('test-blue', 'bg-black')}>
                Hello
            </div>

            {
                // Использование sx параметра для создания стиля
            }
            <Typography align="center" variant={'h4'} sx={{
                color: (theme: Theme) => theme.palette.primary.main,
            }}>
                with {'router.appendPathList(\'user/:name\')'}
            </Typography>

            {
                // Использование ранее стилизованного компонента
            }
            <Root>
                with {'router.appendPathList(\'user/:name\')'}
            </Root>

            {
                // Переход на другую страницу
                // https://github.com/kitze/mobx-router
            }
            <Button onClick={() => store.router.goTo(routes.home)}> go home</Button>

            {
                // Анимация при прокручивании. Тип анимации - Fade
                // https://github.com/morellodev/react-awesome-reveal
            }
            <Fade direction="up" duration={2000}>
                <p>Current pathname: {store.router.currentPath}</p>
            </Fade>


            <Button onClick={() => viewModel.add()}>New Todo</Button>
            {viewModel.todos.map((todo: Todo) => {
                return (<SingleTodoView key={todo.id} viewModel={viewModel} todo={todo}/>)
            })}
        </div>
    )
}

// observer = часть от mobX для внедрения работы
export default observer(TodoView)



