<template>
    <div class="row">
      <h4 style="font-family: 'Rubik Bubbles', cursive;">(putdown the movie that you want to see)</h4>
      <div class="col-2"></div>
      <div class="col-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control"
          placeholder="하나만" aria-label="하나만" aria-describedby="button-addon2"
          v-model="wishItem"
          @keyup.enter="createWishItem"
          >
          <button class="btn btn-outline-secondary" type="button" id="button-addon2"
          @click="createWishItem">Add</button>
        </div>
      </div>
<!-- 
      <b-input-group
      v-model="wishItem"
      @keyup.enter="createWishItem"
      class="mt-3">
        <template #append>
          <b-input-group-text><strong class="text-danger">!</strong></b-input-group-text>
        </template>
        <b-form-input></b-form-input>
      </b-input-group> -->


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