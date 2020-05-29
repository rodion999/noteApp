import _ from 'lodash';

export default {
  Notes: [
    {
      Id: 1,
      Name: "Поход в магазин",
      Todos: [
        { description: "Огурцы 1кг", completed: true },
        { description: "Помидоры 1кг", completed: false },
        { description: "Фрукты 1кг", completed: false },
        { description: "Мясо 1кг", completed: false },
        { description: "Сыр", completed: false }
      ]
    },
    {
      Id: 2,
      Name: "Что сделать",
      Todos: [
        { description: "Тестовое задание", completed: false },
        { description: "Показать свои знания", completed: false },
        { description: "Понравиться начальству", completed: false }
      ]
    },
    {
      Id: 3,
      Name: "Расход",
      Todos: [
        { description: "Бензин", completed: false },
        { description: "Подарки", completed: true },
        { description: "Отпуск", completed: false },
        { description: "Покупка дома", completed: false }
      ]
    },
    {
      Id: 4,
      Name: "Доход",
      Todos: [
        { description: "Работа", completed: false },
        { description: "Бизнес-онлайн", completed: false },
        { description: "Инвестирование", completed: false },
        { description: "Самообразование", completed: false },
        { description: "Пасивный заработок", completed: false },
      ]
    },
    {
      Id: 5,
      Name: "Знания",
      Todos: [
        { description: "С#", completed: false },
        { description: "JavaScript", completed: false },
        { description: "Vue.js", completed: false },
        { description: "HTML5", completed: false },
        { description: "CSS3", completed: false }
      ]
    }
  ],

  findById(id) {
    var result = _.find(this.Notes, { "Id": id })
    return result;
  },
}

