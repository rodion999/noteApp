import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Note from './components/Note.vue'
import NotFound from './views/NotFound.vue'
//For local storage key
const Notes = "Notes";
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
      path: '/Note/:id',
      name: 'Note',
      component: Note,
      // props: true,
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
    Notes, '{}');
}
recordLocalStorageObject();
new Vue({
  el: '#app',
  render: h => h(App),
  router
});

function recordLocalStorageObject() {
  var notesData = [
    {
      Id: 1,
      Name: "Поход в магазин",
      Todo: ["Огурцы 1кг", "Помидоры 1кг", "Фрукты 1кг", "Мясо 1кг", "Сыр"]
    },
    {
      Id: 2,
      Name: "Что сделать",
      Todo: [
        "Тестовое задание",
        "Показать свои знания",
        "Понравиться начальству"
      ]
    },
    {
      Id: 3,
      Name: "Расход",
      Todo: ["Бензин", "Подарки", "Отпуск", "Покупка дома"]
    },
    {
      Id: 4,
      Name: "Доход",
      Todo: [
        "Работа",
        "Бизнес-онлайн",
        "Инвестирование",
        "Самообразование",
        "Пасивный заработок"
      ]
    },
    {
      Id: 5,
      Name: "Знания",
      Todo: ["С#", "JavaScript", "Vue.js", "HTML5", "CSS3"]
    }
  ];

  var serialObj = JSON.stringify(notesData);

  localStorage.setItem("Notes", serialObj);
};