<template>
  <div>
    <h2>Ваши заметки</h2>
    <div class="mb-20">
      <button class="btn btn-info" @click="editNote(0)">Создать заметку</button>
      <button class="btn btn-info" @click="recordLocalStorageDemoData">Демо данные</button>
    </div>
    <div class="d-flex">
      <div class="panel" v-for="note in getNotes" :key="note.Id">
        <div class="panel-heading">
          <span>{{ note.Name }}</span>
        </div>
        <div class="panel-body">
          <ul>
            <li
              v-for="(value,index) in note.Todos.slice(0,2)"
              :key="index"
              :class="value.completed == true ? 'completed' : '' "
            >{{ value.description }}</li>
          </ul>
          <hr />
          <button class="btn btn-primary" @click="editNote(note.Id)">Редактировать</button>
          <button class="btn btn-danger" @click="showModal(note.Id)">Удалить</button>
        </div>
      </div>
    </div>
    <delete-note :propId="NoteId" @delete-note="deleteNote" @zeroing="setNoteId"></delete-note>
  </div>
</template>
<script>
import Note from "../components/Note.vue";
import DeleteNote from "../components/DeleteNote.vue";
export default {
  name: "Home",
  created() {
    this.Notes = JSON.parse(localStorage.getItem("Notes"));
  },
  computed: {
    getNotes: function() {
      return this.Notes;
    }
  },
  data() {
    return {
      NoteId: 0,
      Notes: []
    };
  },
  components: {
    DeleteNote,
    Note
  },
  methods: {
    editNote(el) {
      this.$router.push({ name: "Note", params: { id: el } });
    },
    showModal(id) {
      this.NoteId = id;
    },
    deleteNote(id) {
      _.remove(this.Notes, x => {
        return x.Id == id;
      });
      this.$forceUpdate()
    },
    setNoteId() {
      this.NoteId = 0;
    },
    recordLocalStorageDemoData() {
      var demo = [
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
            { description: "Пасивный заработок", completed: false }
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
      ];
      var serialObj = JSON.stringify(demo);
      localStorage.setItem("Notes", serialObj);
      this.Notes = JSON.parse(localStorage.getItem("Notes"));
    }
  }
};
</script>
<style scoped>
</style>