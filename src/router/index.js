import Vue from 'vue'
import Router from 'vue-router'
import Loca1 from '@/components/Loca1/Loca1'
import Loca2 from '@/components/Loca2/Loca2'
import Loca3 from '@/components/Loca3/Loca3'
import Loca4 from '@/components/Loca4/Loca4'
import Loca1Detail from '@/components/Loca1/Loca1Detail'
import Loca1Main from '@/components/Loca1/Loca1Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Loca1

    },
    {
      path: '/loca1',
      name: 'Loca1',
      component: Loca1,
      children: [
        { path: 'main', component: Loca1Main },
        { path: ':id', component: Loca1Detail }
      ]
    },
    {
      path: '/loca2',
      name: 'Loca2',
      component: Loca2
    },
    {
      path: '/loca3',
      name: 'Loca3',
      component: Loca3
    },
    {
      path: '/loca4',
      name: 'Loca4',
      component: Loca4
    }
  ]
})
