<template>
  <div>
    <h1>소득세 계산기</h1>
    <div>
      <label for="income">연봉 입력 (만원) : </label>
      <input type="number" id="income" v-model.number="income">
    </div>
    <div>
      <label for="tax-credit">세액감면액 (만원) : </label>
      <input type="number" id="tax-credit" v-model.number="taxCredit">
    </div>
    <!-- <hr>
    <div>
      <h2>종합소득금액 : {{ income }}</h2>
      <h2>종합소득공제 : (-) 150 만원 </h2>
      <h2>과세표준 : {{ income-150 }} 만원 </h2>
    </div> -->
    <hr>
    <!-- props,computed사용한 버전 -->
    <TotalIncome :income="income" :tax-credit="taxCredit"/>
    <hr>
  </div>
</template>

<script>
import TotalIncome from '../components/TotalIncome.vue'
export default {
  name: "CalculatorView",
  components: {
    TotalIncome
  },
  data() {
    return {
      income: 0,
      taxCredit: 0
    }
  },
}
</script>

<style>

</style>