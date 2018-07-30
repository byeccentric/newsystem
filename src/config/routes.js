// PAGES
import Index from "../containers/index"
import Ftps from "../containers/ftps/"
import FtpsEdit from "../containers/ftps/edit"
import FtpsAdd from "../containers/ftps/add"
import Challenge from "../containers/challenge"
import Login from "../containers/login"
import NoMatch from "../components/404"

export const routes = [
    {
        name: 'Система',
        path: '/',
        component: Index,
        exact: true,
        auth: true,
        menu: true,
        //redirect: "/auth"
    },
    {
        name: 'FTP',
        path: '/ftps/edit/:id',
        component: FtpsEdit,
        exact: false,
        auth: true,
        menu: false,
        //redirect: "/auth"
    },
    {
        name: 'FTP',
        path: '/ftps/add',
        component: FtpsAdd,
        exact: false,
        auth: true,
        menu: false,
        //redirect: "/auth"
    },
    {
        name: 'FTP',
        path: '/ftps',
        component: Ftps,
        exact: false,
        auth: true,
        menu: true,
        //redirect: "/auth"
    },

    {
        name: 'Челленжи',
        path: '/challenge',
        component: Challenge,
        exact: false,
        auth: true,
        menu: true,
        //redirect: "/auth"
    },
    {
        name: 'Логин',
        path: '/auth',
        component: Login,
        exact: false,
        //auth: false,
        auth: true,
        menu: false,

    },
    {
        name: '404',
        path: '',
        component: NoMatch,
        exact: false,
        //auth: false,
        auth: true,
        menu: false
    }
]