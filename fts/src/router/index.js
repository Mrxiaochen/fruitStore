import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Car from '@/components/Car'
import Classify from '@/components/Classify'
import Eat from '@/components/Eat'
import Mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/eat',
      name: 'Eat',
      component: Eat
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
