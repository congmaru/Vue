<template>
  <div>
    <h1>AppParent</h1>
    <input type="text" id="app-parent" v-model="appParent" @input="onParentInputChange">
    <h3>appData: {{ appdata }}</h3>
    <h3>childData: {{ appchild }}</h3>
    <hr>
    <AppChild :appdata="appdata" :appParent="appParent" @child-input-change="onChildInputChange"/>
  </div>
</template>

<script>
import AppChild from '../components/AppChild.vue'
export default {
  name: 'AppParent',
  props: {
    appdata:String
  },
  components: {
    AppChild
  },
  data() {
    return {
      appParent: '',
      appchild: ''
    }
  },
  methods: {
    onChildInputChange(appchild) {
      this.appchild = appchild
      this.$emit('child-input-change',this.appchild)
    },
    onParentInputChange() {
      this.$emit('parent-input-data', this.appParent)
    }
  }
}
</script>

<style>

</style>