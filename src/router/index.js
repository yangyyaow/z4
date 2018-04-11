import Vue from 'vue'
import Router from 'vue-router'


import index from '../views/VIndex'
import DAka from '../views/DAka'
import Login from '../views/Login'
import Regsider from '../views/Register'
import Personal from '../views/Personal'
import ClockInView from '../views/ClockInView'
import Ranking from '../views/Ranking'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path:'/DAka',
      name:'DAka',
      component:DAka
    },{
      path:'/login',
      name:'Login',
      component:Login
    },{
      path:'/regisder',
      name:'Regisder',
      component:Regsider
    },{
      path:'/personal',
      name:'Personal',
      component:Personal
    },
    {
      path:'/clock-in-view/:id ',
      name:'ClockInView',
      component:ClockInView
    },
    {
      path:'/ranking',
      name:'Ranking',
      component:Ranking
    }
  ]
})

export default router
