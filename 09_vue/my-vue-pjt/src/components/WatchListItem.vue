<template>
  <div>
    <li
    @click="complete"
    :class="{'isSelected' : wishitem.isSelected }"
    >
      {{ wishitem.title }}
    </li>
  </div>
</template>

<script>
export default {
  name: 'WatchListItem',
  props:{
    wishitem : Object
  },
  methods: {
    complete() {
      this.$store.commit('COMPLETE', this.wishitem)
    }
  }
}
</script>

<style>
.isSelected {
  text-decoration: line-through;
}
</style>