<template>
<div class="view">
  <div class="count">
    总数：{{count}}
  </div>
  <button type="button" name="button" @click="add">增加</button>
  <input type="number" v-model="num">
  <p>
    <ul>
      <router-link :to="{ path:'/' }" tag="li">index</router-link>
      <router-link :to="{ path:'/page2' }" tag="li">page2</router-link>
    </ul>
  </p>
</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      num: 0
    }
  },
  computed: {
    ...mapState({
      count () {
        const [ state ] = arguments
        return state.count
      }
    })
  },
  mounted () {
    console.log(this.$router)
  },
  methods: {
    add () {
      this.$store.dispatch('addAction', parseFloat(this.num))
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
