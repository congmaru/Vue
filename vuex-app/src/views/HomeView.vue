<template>
  <div class="home">


    {{ todoList }}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  computed: {
    todoList() {
      return this.$store.state.todo.list
      // store의 state 중 todo의 list를 가져옴.
    }
  }
}
</script>
