<template>
  <div class="border3">
    <h1>TodoForm</h1>
    <input
    type="text"
    v-model="todoTitle"
    @keyup.enter="createTodo">
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data: function () {
    return {
      todoTitle: null,
    }
  },
  methods: {
    createTodo: function () {
      this.$emit('create-todo', this.todoTitle)
      this.todoTitle = null
    }
  }
}
</script>

<style>
.border3 {
  border: solid 4px blue;
  text-align: center;
  margin: 20px;
  padding-bottom: 15px;
}

</style>