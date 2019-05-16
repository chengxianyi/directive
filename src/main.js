import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import directive from "./directive/directive"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element, directive)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
