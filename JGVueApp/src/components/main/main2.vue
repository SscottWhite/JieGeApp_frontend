<!--  -->
<template>
  <div>
    <button @click='newClick'>here</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    newClick(){
           this.$emit('newClick2',88)
        }
  }
}
</script>

<style  scoped>

</style>
