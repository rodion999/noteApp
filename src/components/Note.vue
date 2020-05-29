<template>
  <div>
    <h2 v-if="UrlId == 0">Создание заметки</h2>
    <h2 v-else>Редактирование заметки</h2>
    <div class="d-flex">
      <div class="panel">
        <div class="panel-heading">
          <span>{{Note.Name}}</span>
        </div>
        <div class="panel-body">
          <create-todo @on-new-todo="addTodo($event)" />
          <ul>
            <todo
              v-for="(todo, index) in Note.Todos"
              :key="index"
              :description="todo.description"
              :completed="todo.completed"
              @on-toggle="toggleTodo(todo)"
              @on-delete="deleteTodo(todo)"
              @on-edit="editTodo(todo, $event)"
            />
          </ul>
          <hr />
          <div class="d-flex-li">
            <button class="btn btn-primary" @click="saveNote(UrlId)">Сохранить</button>
            <button class="btn btn-danger" @click="showDeleteModal(UrlId)">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";
export default {
  name: "Note",
  components: {
    Todo,
    CreateTodo
  },
  mounted() {
    this.Note = this.$root.$data.findById(this.UrlId);
    if (!this.Note) {
      this.Note = {
        Id: null,
        Name: "Введите имя заметки",
        Todos: []
      };
    }
  },
  data() {
    return {
      UrlId: this.$route.params.id,
      todos: [],
      Note: {},
    };
  },
  methods: {
    addTodo(newTodo) {
      this.Note.Todos.push({ description: newTodo, completed: false });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(deletedTodo) {
      this.Note.Todos = this.Note.Todos.filter(todo => todo !== deletedTodo);
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
    }
  }
};
</script>

<style scoped>
</style>