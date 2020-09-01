import  cd from './src/codelist.vue'
import options from './src/options.js'
const codelist={
    install(Vue,op){
        if(op.baseURL){
            options.baseURL=op.baseURL
        }
        if(op.defaultURL){
            options.defaultURL=op.defaultURL
        }
        console.log(options)
        Vue.component(cd.name,cd)
    }
}
if(typeof window!=='undefined' &&window.Vue){
    window.Vue.use(codelist)
}
export default codelist