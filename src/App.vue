<template>
  <div id="app">
    <img src="./assets/logo.png" width="60px" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.d-flex {
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
}
.panel {
  margin: 10px;
  background-color: #fff;
  border: 1px solid #1c84c6;
  border-radius: 4px;
}

.panel-heading {
  font-size: 15px;
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: #1c84c6;
  border-color: #1c84c6;
  border-width: 1px;
  color: #ffffff;
}
.panel-body {
  padding: 15px;
}
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 13px;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-primary {
  color: #fff;
  background-color: #1ab394;
  border-color: #1ab394;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary.focus {
  background-color: #18a689;
  border-color: #18a689;
  color: #ffffff;
}
.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-danger:hover,
.btn-danger:focus,
.btn-danger.focus {
  color: #fff;
  background-color: #ec4758;
  border-color: #ec4758;
}
.btn-info {
  color: #fff;
  background-color: #23c6c8;
  border-color: #23c6c8;
}
.btn-info:hover,
.btn-info:focus,
.btn-info.focus {
  color: #fff;
  background-color: #21b9bb;
  border-color: #21b9bb;
}
@media only screen and (max-width : 480px) {
    .d-flex{
      flex-flow: column;
    }
}
</style>
