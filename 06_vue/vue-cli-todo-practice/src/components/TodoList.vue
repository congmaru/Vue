<template>
  <div class="border">
    <h1>TodoList</h1>
    <ul v-for="(todo,idx) in todos" :key="idx">
      <TodoListItem :todo="todo" @delete-todo="deleteTodo"/>
    </ul>

  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue'

export default {
  name: 'TodoList',
  components : {
    TodoListItem,
  },
  props: {
    todos: Array,
  },
  methods: {
    deleteTodo : function (todo) {
      this.$emit('delete-todo',todo)
    }
  }

}
</script>

<style>
.border {
  border: solid 4px orange;
  text-align: center;
  margin: 20px;
}
</style>