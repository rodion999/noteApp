import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Note from './components/Note.vue'
import NotFound from './views/NotFound.vue'
import './assets/css/style.css';
import _ from "lodash";

//For localstorage key
window.Notes = "Notes";
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Note/:id',
      name: 'Note',
      component: Note,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

if (!localStorage.getItem(Notes)) {
  localStorage.setItem(
    Notes, '[]');
}
new Vue({
  el: '#app',
  render: h => h(App),
  router
});