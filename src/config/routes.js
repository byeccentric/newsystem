// PAGES
/*import Ftps from '../pages/ftps';*/
import Index from '../containers/index'
import Ftps from '../pages/ftps/containers/ftps'
/*import FtpsEdit from "../pages/ftps/containers/edit";
import FtpsAdd from "../pages/ftps/containers/add";*/
/*import { containers as FtpsContainer } from '../pages/ftps';*/
import Challenge from '../containers/challenge'
import Calendar from '../containers/calendar'
import Login from '../containers/login'
import NoMatch from '../components/404'

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
  /*{
        name: 'FTP EDIT',
        path: '/ftps/edit/:id',
        component: FtpsContainer.Edit,
        exact: false,
        auth: true,
        menu: false,
        //redirect: "/auth"
    },
    {
        name: 'FTP ADD',
        path: '/ftps/add',
        component: FtpsContainer.Add,
        exact: false,
        auth: true,
        menu: false,
        //redirect: "/auth"
    },*/
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
    name: 'Календарь',
    path: '/calendar',
    component: Calendar,
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
    menu: false,
  },
]
