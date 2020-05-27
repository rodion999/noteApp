import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)
// Vue.component("Modal");

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})