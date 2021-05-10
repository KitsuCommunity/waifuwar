import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Vote'
import Results from '@/pages/Results'
import Memes from '@/pages/Meme'
import FantasyLeague from '@/pages/FantasyLeague'
import error404 from '@/pages/Error404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    },
    {
      path: '/memes',
      name: 'Memes',
      component: Memes
    },
    {
      path: '/fantasyleague',
      name: 'Fantasy League',
      component: FantasyLeague
    },
    {
      path: '/*',
      name: 'Error 404',
      component: error404
    }
  ]
})