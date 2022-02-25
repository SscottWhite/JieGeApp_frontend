import { createApp } from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'
import LoginTable from './login/LoginTable'

createApp(LoginTable).use(store).use(router).mount('#app')
