<template>
  <div>
    <h2 v-if="UrlId == 0">Создание заметки</h2>
    <h2 v-else>Редактирование заметки</h2>
    <div class="d-flex">
      <div class="panel">
        <edit-name :propName="NewNote.Name" @on-edit-name="editName(NewNote, $event)"></edit-name>
        <div class="panel-body">
          <create-todo @on-new-todo="addTodo($event)" />
          <ul>
            <todo
              v-for="(todo, index) in NewNote.Todos"
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
            <button class="btn btn-info m-10" @click="showModal(Number(UrlId), 'cancel')" v-show="UrlId !=0">Отменить</button>
            <button
              class="btn btn-danger"
              @click="showModal(Number(UrlId), 'delete')"
              v-show="UrlId != 0"
            >Удалить</button>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-info" @click="back()">Назад</button>
    <modal :propModalName="ModalName" :propId="NoteId" @delete-note="deleteNote" @zeroing="setNoteId" @cancel-note="cancelNote"></modal>
  </div>
</template>
<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";
import Modal from "../components/Modal.vue";
import EditName from "../components/EditName.vue";
export default {
  name: "Note",
  components: {
    Todo,
    CreateTodo,
    Modal,
    EditName
  },
  mounted() {
    var data = JSON.parse(localStorage.getItem(Notes));
    this.Note = _.find(data, x => {
      return x.Id == this.UrlId;
    });
    if (!this.Note) {
      this.Note = {
        Id: null,
        Name: "Введите имя заметки",
        Todos: []
      };
    }
    this.NewNote = _.cloneDeep(this.Note);
  },
  data() {
    return {
      UrlId: this.$route.params.id,
      Note: {},
      NoteId: 0,
      ModalName: "",
      NewNote: {}
    };
  },
  methods: {
    addTodo(newTodo) {
      this.NewNote.Todos.push({ description: newTodo, completed: false });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(deletedTodo) {
      this.NewNote.Todos = this.NewNote.Todos.filter(
        todo => todo !== deletedTodo
      );
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
    },
    showModal(id, text) {
      this.NoteId = id;
      this.ModalName = text;
    },
    deleteNote(id) {
      this.$router.go(-1);
    },
    setNoteId() {
      this.NoteId = 0;
      this.ModalName = "";
    },
    saveNote(id) {
      var data = JSON.parse(localStorage.getItem("Notes"));
      if (id == 0) {
        var newId = data.length + 1;
        this.NewNote.Id = newId;
        data.push(this.NewNote);
      } else {
        _.chain(data)
          .find({ Id: id })
          .merge({}, this.NewNote)
          .value();
      }
      var serialObj = JSON.stringify(data);
      localStorage.setItem("Notes", serialObj);
      this.$router.go(-1);
    },
    editName(note, newName) {
      this.NewNote.Name = newName;
    },
    cancelNote() {
      this.NewNote = this.Note;
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
</style>