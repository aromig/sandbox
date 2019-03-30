<template>
  <div class="container">
    <h1>Todo List</h1>
    <div id="app">
      <div>
        <TodoNew />
        <TodoList />
      </div>
    </div>
    <img src="vue.svg" class="vue-logo" alt="Vue.js Logo" />
  </div>
</template>

<script>
import TodoNew from "@/components/TodoNew.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  components: {
    TodoNew,
    TodoList
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
html {
  font-family: "Open Sans", sans-serif;
  background: linear-gradient(-45deg, #6cfd9f, #6887ff);
  height: 100%;
  color: #333;
}
body {
  display: flex;
  height: 100%;
  margin: 0;
}
.container {
  width: 24rem;
  margin: auto;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}
h1 {
  text-align: center;
  margin-top: 0;
}
.vue-logo {
  display: block;
  width: 50px;
  margin: 0 auto;
}
</style>
