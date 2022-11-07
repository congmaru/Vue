<template>  
<!-- 컴포넌트를 구성하는 최상위 태그가 하나만 꼭있어야 함. 여기부터 렌더링되는 것 -->
  <div class="border"> 
    <h1>This is My Component. 그렇다.</h1>
    <MyComponentItem
    static-props="MyComponent에서 보낸 데이터"
    :dynamic-props="dynamicProps"
    @mom-foood="parentGetEvent"
    @child-input="getdynamicData"
    />
    <!-- 바인딩해줘야 동적으로 묶여 부모쪽이 업데이트되면 자식도 업데이트됌  -->
    

  </div>
</template>

<script>
//<등록하기> 1. 불러오기
import MyComponentItem from '@/components/MyComponentItem'
export default {
  name: 'MyComponent',
  components: {
    //2. 등록하기
    MyComponentItem,
  },
  data: function () {
    return {
      dynamicProps: '이건 동적인 데이터',
      // 리턴으로 감싸주지 않으면 데이터가 독립적이지 않게 된다는 정도만 알아둬라.
    }
  },
  methods: {
    parentGetEvent: function (childData) {
      console.log('시켜먹자')
      console.log(childData)
    },
    getdynamicData: function (data) {
      console.log(`사용자가 입력한 값은 ${data}입니다`)
    }
  }
  }
</script>

<style>
  .border {
    border: solid 1px black;
  }
</style>