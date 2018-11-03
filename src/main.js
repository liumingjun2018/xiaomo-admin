import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Axios.defaults.baseURL='http://127.0.0.1:3000'
Vue.prototype.$axios = Axios;
Vue.config.devtools = true;
Vue.config.productionTip = true;
// Vue.prototype.$http = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
