<template>
  <ul class="tasks">
    <li
      v-for="todo in todos"
      :key="todo.id"
      :class="{ completed: todo.completed }"
      class="task"
      @click="toggleTodo(todo.id)"
      @dblclick="deleteTodo(todo.id)"
    >
      {{ todo.task }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  },
  methods: {
    toggleTodo: function(id) {
      this.$store.dispatch("toggleTodo", id);
    },
    deleteTodo: function(id) {
      this.$store.dispatch("deleteTodo", id);
    }
  }
};
</script>

<style>
.tasks {
  padding-left: 1.5rem;
  list-style-type: none;
}
.task {
  margin-bottom: 0.5rem;
  color: #34495e;
  font-weight: bold;
}
.task:before {
  content: "\2002";
}
.task:hover {
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
  color: #41b883;
}
.completed:before {
  content: "\2714";
}
</style>
