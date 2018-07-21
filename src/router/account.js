const Account = () => import(/* webpackChunkName: "account" */ '@/views/Account')
const Home = () => import(/* webpackChunkName: "account" */ '@/views/account/Home')
const Settings = () => import(/* webpackChunkName: "account" */ '@/views/account/Settings')

export default [
  {
    path: '/account',
    component: Account,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: 'Home'
        }
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings,
        meta: {
          title: 'Settings'
        }
      }
    ]
  }
]
