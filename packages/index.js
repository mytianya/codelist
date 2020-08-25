import codelist from './codelist'
const components=[
    codelist
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install=function(Vue){
    if(install.installed) return
    components.map(component=>Vue.component(component.name,component))

}
//判断是否直接引入文件
if(typeof window!='undefined' &&window.Vue){
    install(window.Vue)
}
export default{
    install,
    codelist
}