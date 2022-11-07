<template>
  <div>
    <h1>AppChild</h1>
    <input type="text" id="app-child" v-model="appChild" @input="onChildInputChange">
    <h3>appData: {{ appdata }}</h3>
    <h3>parentData: {{ appParent }}</h3>
    <h3>childData: {{ appChild }}</h3>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'AppChild',
  props: {
    appdata: String,
    appParent: String
  },
  data() {
    return {
      appChild: '',
    }
  },
  methods: {
    // 위아래 모두 동일한 방법. event.target.value값이 곧 input값
    // onChildInputChange(event) {
    //   this.$emit('app-child', event.target.value)
    // },
    onChildInputChange() {
      this.$emit('child-input-change', this.appChild)
    }
  }
  }
</script>

<style>

</style>