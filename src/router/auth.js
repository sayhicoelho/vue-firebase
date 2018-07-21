const Auth = () => import(/* webpackChunkName: "auth" */ '@/views/Auth')
const Login = () => import(/* webpackChunkName: "auth" */ '@/views/auth/Login')
const SignUp = () => import(/* webpackChunkName: "auth" */ '@/views/auth/SignUp')
const PasswordRecovery = () => import(/* webpackChunkName: "auth" */ '@/views/auth/PasswordRecovery')

export default [
  {
    path: '/',
    component: Auth,
    meta: {
      requiresGuest: true
    },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: {
          title: 'Login'
        }
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: SignUp,
        meta: {
          title: 'Sign Up'
        }
      },
      {
        path: 'recovery',
        name: 'PasswordRecovery',
        component: PasswordRecovery,
        meta: {
          title: 'PasswordRecovery'
        }
      }
    ]
  }
]
