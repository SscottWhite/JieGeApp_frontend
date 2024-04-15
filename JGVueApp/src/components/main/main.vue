<!--  -->
<template>
  <div>
    <span>123</span>
    <child @newClick2="newClick3" ></child>
    <input type="text" v-model="msg" />
    <button @click="unwatch">watch</button>
  </div>
</template>

<script>
  import child from './main2.vue'

  export default{
    name:'main',
    data(){
      msg:""
    },
    components:{
      child
    },
    methods:{
      newClick3(value){
         console.log("看这:"+value)
      },
      unwatch(){
         this.$watch("msg",function(newvar,oldvar){
            console.log(newvar,oldvar)
         })
      }
    }
  }

</script>

<style  scoped>

</style>
