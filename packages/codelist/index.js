import codelist from './src/codelist.vue'
codelist.install=function(Vue){
    Vue.component(codelist.name,codelist)
}
export default codelist