<template>
  <div class="d-flex">
    <div class="note-block" v-for="note in notes" :key="note.Id">
      <h4>{{ note.Name }}</h4>
      <hr />
        <ul v-for="(value,key) in note.Todo.slice(0,2)" :key="key">
          <li>{{ key + 1 }} - {{ value }}</li>
        </ul>
      <hr />
      <div class="btn-block">
        <button @click="editNote(note.Id)">Редактировать</button>
        <button id="show-modal" @click="deleteNote(note.Id)">Удалить</button>
      </div>
    </div>
    <delete-note :isShowDeleteModal = "isShowDeleteModal" @close-modal="closeModal"></delete-note>
  </div>
</template>
<script>
import DeleteNote from "../components/DeleteNote.vue";
export default {
  name: "Note",
  data: () => ({
    isShowDeleteModal: false,
    notes: [
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
    ]
  }),
  components: {
    DeleteNote,
  },
  methods: {
    editNote(id) {},
    deleteNote(id) {
      if (!this.isShowDeleteModal) {
        this.isShowDeleteModal = true;
      } else {
        this.isShowDeleteModal = false;
      }
    },
    closeModal() {
      this.isShowDeleteModal = false;
    }
  }
};
</script>
<style scoped>
.d-flex {
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
}
h4 {
  margin: 0;
}
.note-block {
  margin: 20px 10px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 260px;
  padding: 15px;
  min-height: 150px;
}
ul {
  text-align: left;
  font-weight: 600;
  list-style: none;
  padding: 0;
}
li {
  margin: 10px 0 0 0;
}
.btn-block {
  display: flex;
  justify-content: space-between;
}
</style>