import Vue from 'vue'
import Router from 'vue-router'
import TabsManager from '@/components/TabsManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tabs',
      component: TabsManager
    }
  ]
})
