<template>
  <transition name="modal" v-if="isShowDeleteModal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container panel panel-danger">
          <div class="panel-heading modal-header">
            <slot name="header">Удалить заметку</slot>
          </div>
          <div class="panel-body modal-body">
            <slot name="body">Вы действительно хотите удалить заметку ?</slot>
          </div>
          <div class="panel-footer modal-footer">
            <slot name="footer">
              <button class="btn btn-primary modal-default-button" @click="deleteNote(propId)">Да</button>
              <button class="btn btn-danger modal-default-button" @click="hideModal(propId)">Нет</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "DeleteNote",
  props: {
    propId: {
      type: Number,
      default: 0
    }
  },
  watch: {
    propId: function() {
      if (this.propId != 0)
      this.showModal();
    },
  },
  data() {
    return {
      isShowDeleteModal: false,
    };
  },
  methods: {
    showModal() {
      if (!this.isShowDeleteModal) {
        this.isShowDeleteModal = true;
      } else {
        this.isShowDeleteModal = false;
      }
    },
    hideModal(id) {
      this.isShowDeleteModal = false;
      this.$emit("zeroing", 0)
    },
    deleteNote(id) {
      var data = JSON.parse(localStorage.getItem("Notes"));
      var res = _.remove(data, x => {
        return x.Id == id;
      });
      var serialObj = JSON.stringify(data);
      localStorage.setItem("Notes", serialObj);
      this.isShowDeleteModal = false;
      this.$emit("delete-note", id);
    }
  }
};
</script>
<style scoped>
.panel-danger {
  border-color: #ed5565 !important;
}
.panel-danger > .panel-heading {
  background-color: #ed5565 !important;
  border-color: #ed5565 !important;
  color: #ffffff;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 0 0 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  margin: 0 20px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-footer {
  display: flex;
  justify-content: center;
}
</style>
