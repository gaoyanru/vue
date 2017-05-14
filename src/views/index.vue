<template>
<div class="view">
  <div class="count">
    总数：{{count}}
  </div>
  <button type="button" name="button" @click="subtract">减少</button>
  <p>
    <ul>
      <router-link :to="{ path:'/page2' }" tag="li">page2</router-link>
    </ul>
  </p>
</div>
</template>
<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  mounted () {
    console.log(this.$router)
  },
  methods: {
    subtract () {
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
