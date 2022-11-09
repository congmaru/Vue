<template>
  <div id="app" class="border0">
    <h1>App.vue</h1>
    <TodoList :todos='todos' @delete-todo="deleteTodo"/>
    <TodoForm @create-todo='createTodo'/>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
  // data는 리턴객체 기억★
  data: function () {
    return {
      todos: [
        {
          title: '',
        }
      ]
    }
  },
  methods: {
    createTodo: function (todoTitle) {
      //객체로 넣어야함!
      const todo = {
        title: todoTitle
      }
      this.todos.push(todo)
    },
    deleteTodo : function (todo) {
      //삭제
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style>
.border0 {
  border: solid 2px black;
  text-align: center;

}
</style>
