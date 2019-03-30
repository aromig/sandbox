<template>
  <form @submit.prevent="addTodo">
    <input
      class="todo-input"
      type="text"
      placeholder="Enter a new task"
      v-model="task"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: "",
      newId: 0
    };
  },
  methods: {
    addTodo: function() {
      this.$store.dispatch("addTodo", this);
      this.newId++;
      this.task = "";
    }
  }
};
</script>

<style>
.todo-input {
  font-family: "Open Sans", sans-serif;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  border-radius: 0.25rem;
  border-style: none;
  border: solid 1px lightgray;
  box-sizing: border-box;
}
</style>
