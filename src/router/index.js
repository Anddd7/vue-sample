import Vue from 'vue'
import Router from 'vue-router'
//import modules
import SubRouter from '@/components/subrouter'
//import pages
import Login from '@/pages/login'
import Home from '@/pages/index'
import NoteIndex from '@/pages/note/index'
import NoteInfo from '@/pages/note/info'
import NoteEdit from '@/pages/note/edit'

//define router
Vue.use(Router)
export default new Router({
  routes: [
    {
      name:'login',
      path: '/',
      component: Login
    },
    {
      name:'home',
      path: '/home',
      component: Home,
      meta:{keepAlive:true}
    },
    {
      path: '/note',
      component: SubRouter,
      children: [
        {
          path: '/',
          component: NoteIndex
        },
        {
          path: ':id/info',
          component: NoteInfo
        },
        {
          path: ':id/edit',
          component: NoteEdit
        }
      ]
    }
  ]
})
