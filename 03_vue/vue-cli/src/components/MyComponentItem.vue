<template>
  <div>
    <h3>MyComponent의 하위 컴포넌트</h3>
    <p>{{ staticProps }}</p>
    <p>{{ dynamicProps }}</p>
    <button @click="childToParent">클릭!</button>
    <input
    type="text"
    v-model="childInputData"
    @keyup.enter="childInput">
  </div>
</template>

<script>
export default {
  //<생성하기> 1. 파일생성 2.이름등록 3. 최상위 요소 만들기
  name: 'MyComponentItem',
  // 어떤 props를 받는지 선언
  props: {
    staticProps: String,
    dynamicProps: String
  },
  data: function () {
    return {
      childInputData: null,
  }
},
  methods: {
    childToParent: function () {
      // 버튼이 눌렸다는 것을 부모에게 알리는 기능
      this.$emit('mom-foood','부모한테 보내는 메세지')
    },
    childInput: function () {
      this.$emit('child-input', this.childInputData)
    }
  }
}
</script>

<style>

</style>