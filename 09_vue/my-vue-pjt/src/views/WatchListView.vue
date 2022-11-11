<template>
  <div class="row">
    <h1>보고싶은영화를 써</h1>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="하나만" aria-label="하나만" aria-describedby="button-addon2"
      v-model="wishItem">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2"
      @click="createWishItem">Add</button>
    </div>
    <WatchListItem
    v-for="(wishitem,idx) in wishlist"
    :key = idx
    :wishitem = wishitem
    />
  </div>
</template>

<script>
import WatchListItem from '@/components/WatchListItem'
export default {
  name: 'WatchListView',
  components: {
    WatchListItem,
  },
  data() {
    return {
      wishItem : null
    }
  },
  methods: {
    createWishItem() {
      this.$store.commit('CREATE_WISH_ITEM', this.wishItem)
    }
  },
  computed: {
    wishlist() {
      return this.$store.state.wishlist
    }
  }
}
</script>

<style>

</style>