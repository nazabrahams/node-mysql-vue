import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/vue3-toastify.css";
import {useCookies} from 'vue-cookies'

axios.defaults.headers = $cookies.get('token')


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async loginUser({commit}, info){
      let {data} = await axios.post('http://localhost:5050/user/login')
      console.log(data);
      $cookies.set('token',data.token)
      if(data.message){
        toast("Login is succesful", { 

      
    }
},
  modules: {
    
  }
})


