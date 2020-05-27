<template>
  <div>
    <div v-if="UrlId == 0">
      <h2>Создание заметки</h2>
    </div>
    <div v-else>
      <h2>Редактирование заметки</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "Note",
  data() {
    return {
      UrlId: this.$route.params.id
    };
  }
};
</script>
<style scoped>
</style>