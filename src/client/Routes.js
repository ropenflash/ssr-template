import HomePage from './pages/HomePage'
import UsersListPage, { loadData } from './pages/UsersListPage'
import Navigation from './components/Navigation'

export default [
    {
        path: '/',
        ...HomePage,
        exact: true
    },
    {

        path: '/users',
        ...UsersListPage
    },
    {

        path: '/',
        component: Navigation
    }
]