import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hellow2 from '@/components/hellow2'
import CaidanRouter from '@/components/caidanRouter'
import Jiazaigengduo from '@/components/jiazaigengduo'
Vue.use(Router);
// Vue.use(Element);
export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello,
      children:[
        {
            path:'/',
            name:'hellow2',
            component:Hellow2
        },
        {
            path:'/caidanRouter/:num',
            name:'caidanRouter',
            component:CaidanRouter,
          children:[
            {
              path:'/',
              name:'jiazaigengduo',
              component:Jiazaigengduo,
            }
          ]
        }
      ]
    },
  ]
})
