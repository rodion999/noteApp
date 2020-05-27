<template>
  <div>
    <h2>Ваши заметки</h2>
    <div class="mb-20">
      <button class="btn btn-info" @click="editNote(0)">Создать заметку</button>
    </div>
    <div class="d-flex">
      <div class="panel" v-for="note in Notes" :key="note.Id">
        <div class="panel-heading">
          <span>{{ note.Name }}</span>
        </div>
        <div class="panel-body">
          <ul>
            <li v-for="(value,index) in note.Todo.slice(0,2)" :key="index">{{ value }}</li>
          </ul>
          <hr />
          <button class="btn btn-primary" @click="editNote(note.Id)">Редактировать</button>
          <button class="btn btn-danger" @click="showDeleteModal(note.Id)">Удалить</button>
        </div>
      </div>
      <delete-note
        :isShowDeleteModal="isShowDeleteModal"
        :id="NoteId"
        @close-modal="closeDeleteModal"
        @delete-note="deleteNote"
      ></delete-note>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import Note from "../components/Note.vue";
import DeleteNote from "../components/DeleteNote.vue";
export default {
  name: "Home",
  created() {
    this.Notes = JSON.parse(localStorage.getItem("Notes"));
  },
  data() {
    return {
      isShowDeleteModal: false,
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

    showDeleteModal(id) {
      if (!this.isShowDeleteModal) {
        this.isShowDeleteModal = true;
      } else {
        this.isShowDeleteModal = false;
      }
      this.NoteId = id;
    },

    closeDeleteModal() {
      this.isShowDeleteModal = false;
    },

    deleteNote(id) {
      var res = _.remove(this.Notes, x => {
        return x.Id != id;
      });
      this.Notes = res;
      var serialObj = JSON.stringify(this.Notes);
      localStorage.setItem("Notes", serialObj);
      this.isShowDeleteModal = false;
    }
  }
};
</script>
<style scoped>
ul {
  text-align: left;
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  margin-bottom: 8px;
}
.mb-20 {
  margin-bottom: 20px;
}
</style>