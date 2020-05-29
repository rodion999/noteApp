<template>
  <li class="d-flex-li">
    <span :class="{ completed }" @click="$emit('on-toggle')" v-if="!isEditing">
      <span>{{ description }}</span>
    </span>
    <form v-else @submit.prevent="finishEditing()">
      <input type="text" class="form-control" v-model="newTodoDescription" @blur="finishEditing()" ref="newTodo" />
    </form>
    <div>
      <button @click="startEditing()" class="btn btn-icon edit">
          <i class="fa fa-pencil" aria-hidden="true"></i>
      </button>
      <button @click="$emit('on-delete')" class="btn btn-icon trash">
          <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      newTodoDescription: ""
    };
  },
  props: {
    description: String,
    completed: Boolean
  },
  methods: {
    startEditing() {
      if (this.isEditing) {
        this.finishEditing();
      } else {
        this.newTodoDescription = this.description;
        this.isEditing = true;
        this.$nextTick(() => this.$refs.newTodo.focus());
      }
    },
    finishEditing() {
      this.isEditing = false;
      this.$emit("on-edit", this.newTodoDescription);
    }
  }
};
</script>

<style scoped>

</style>
