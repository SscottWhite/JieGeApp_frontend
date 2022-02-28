<!--  -->
<template>
  <div>
    <form>
        <span>姓名：</span><input type="text" v-model.trim="loginData.username" placeholder="username"/><br/>
        <span>密码：</span><input type="password" v-model.trim="loginData.password" placeholder="password" /><br/>
        <input type="checkbox" value="y" name="isLogin">自动登陆<br/>
        <input type="button" value="提交" @click="upload" />
    </form>
  </div>
</template>

<script>
import utils from '../utils/axios'
import fetch from '../utils/fetch'

export default {
  name: 'LoginTable',
  data () {
    return {
      loginData:{
         username : "",
         password : ""
      }
    }
  },

  methods: {
     upload() {
        let successinfo = (response) => {
           alert(response.data.msg);
        }
        console.log(this.loginData)
        utils({
           method: "POST",
           url: "/vue/success",
           data: this.loginData,
           callback: (response) => {
               console.log(response.data.msg);
          }
        })
     },

     doFetch() {
         const responseBody = fetch('/vue/success', this.loginData, 'POST', 'axios')
         responseBody.then(res => {console.log(res)});
     }
  }
}
</script>

<style  scoped>

</style>
