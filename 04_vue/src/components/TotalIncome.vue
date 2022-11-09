<template>
  <div>
    <h2>종합소득금액 : {{ income }}</h2>
    <h2>종합소득공제 : (-) 150 만원 </h2>
    <h2>과세표준 : {{ taxBase }} 만원</h2>
    <hr>
    <TaxRate :tax-credit="taxCredit" :tax-base="taxBase"/>
  </div>
</template>

<script>
import TaxRate from '../components/TaxRate.vue'
export default {
  name: 'TotalIncome',
  components : {
    TaxRate
  },
  props: {
    income: Number,
    taxCredit: Number,
  },
  data() {
    return {
    }
  },
  computed: {
    taxBase() {
      return this.income - 150 >= 0 ? this.income -150 : 0
    }
  }
}
</script>

<style>

</style>