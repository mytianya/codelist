import Vue from 'vue'
import App from './App.vue'
//import {Select,Option } from 'element-ui';
import codelist from './../packages/index'
Vue.use(codelist)
// Vue.component(Select.name, Select);
// Vue.component(Option.name,Option)
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
