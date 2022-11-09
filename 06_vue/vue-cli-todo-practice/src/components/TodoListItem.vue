<template>
  <li class="border2">
    {{ todo.title }}
    <button @click="deleteTodo">X</button>
  </li>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    deleteTodo: function () {
      this.$emit('delete-todo', this.todo)
    }
  }

}
</script>

<style>
.border2 {
  border : solid 2px rgb(0, 124, 0);
  margin: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>