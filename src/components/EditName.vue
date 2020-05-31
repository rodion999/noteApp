<template>
  <div>
    <div class="panel-heading">
      <span v-if="!isEditing">{{propName}}</span>
      <form v-else @submit.prevent="finishEditing()">
        <input
          type="text"
          class="form-control-note"
          v-model="newName"
          @blur="finishEditing()"
        />
      </form>
      <div>
        <button @click="startEditing()" class="btn btn-icon edit">
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      propName: {
          type:String,
          default: ""
      }
  },
  data() {
    return {
      isEditing: false,
      newName: "",
    };
  },
  methods: {
    startEditing() {
      if (this.isEditing) {
        this.finishEditing();
      } 
      else {
        this.newName = this.propName;
        this.isEditing = true;
      }
    },
    finishEditing() {
      this.isEditing = false;
      this.$emit("on-edit-name", this.newName);
    },
  }
};
</script>

<style scoped>
</style>
