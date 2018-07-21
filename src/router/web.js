const NotFound = () => import(/* webpackChunkName: "web" */ '@/views/NotFound')

export default [
  {
    path: '/',
    redirect: { name: 'Login' }
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '404 (Page Not Found)'
    }
  }
]
