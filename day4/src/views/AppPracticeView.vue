<template>
  <div>
    <h1>App</h1>
    <input type="text" id="app-data" v-model="appData">
    <h3>parentData: {{ appparent }}</h3>
    <h3>childData: {{ appchild }}</h3>
    <hr>
    <AppParent :appdata="appData" @parent-input-data="onParentInputChange" @child-input-change="onChildInputChange"/>
  </div>
</template>

<script>
import AppParent from '../components/AppParent.vue'
export default {
  name: 'AppPractice',
  components: {
    AppParent,
  },
  data() {
    return {
      appData: '',
      appparent: '',
      appchild: ''
    }
  }, 
  methods:{
    onParentInputChange(appparent) {
      this.appparent=appparent
    },
    onChildInputChange(appchild) {
      this.appchild=appchild
    }
  }
}
</script>

<style>

</style>

<!-- props
부모: 자식을 import, 등록, 데이터 바인딩
자식: 받은데이터 형식선언, 사용 -->