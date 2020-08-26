# codelist
> 基于ElementUI el-select二次封装的下拉框组件，结合后台字典表设计减少项目开发人员重复编写相同代码实现下拉框。
> 项目数据库设计有一张字典表，有字典编码值，字典名称，分类编码值等字段。
> 后端提供了一个公共接口通过分类的编码值，查询出该分类下所有数据。

## 后台接口说明

```json
QueryPath: /common/dictionary/queryDictionarylistByTypeCode?typeCode=xxx
Method: GET
return
-----------------------------------------
{
	"code": "1",
	"data": [{
		"dictionaryCode": "2402",
		"dictionaryName": "地区"
	}, {
		"dictionaryCode": "2404",
		"dictionaryName": "混合"
	}, {
		"dictionaryCode": "2401",
		"dictionaryName": "国际"
	}, {
		"dictionaryCode": "2403",
		"dictionaryName": "国内"
	}],
	"msg": "成功"
}
```
## 前端使用方式
### 安装依赖
```
npm install codelist --save
```
### Vue脚手架全局引用
```
//main.js中
import codelist from 'codelist'
Vue.use(codelist)
```
### 使用参数说明
1. code: 为分类编码值
2. v-model: 双向绑定的字典表编码值
3. @select： 返回的是字典编码值与字典名称对象
4. k： 返回数据下拉框指定的value值，默认dictionaryCode
5. l： 返回数据下拉框指定的label值，默认为dictionaryName
6. apiUrl： 可以改变默认的接口路径 /common/dictionary/queryDictionarylistByTypeCode
7. data： 本地数据赋值给下拉框
### 使用举例
#### 配置分类编码值发送到后台获取数据
```vue
<template>
  <div>
    <codelist code="region" v-model="code" @select="select" k="dictionaryCode" l="dictionaryName" apiUrl="/xx/xxx"></codelist>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      code:'2402'
    }
  },
  methods:{
    select(d){
      console.log(d)//{code: "2401", label: "国际"}
    }
  }
}
</script>
```
#### 前台写死下拉框数据
```
<template>
  <div id="app">
      <codelist :data="sexList" v-model="sex" ></codelist>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      sexList:[{
        'dictionaryCode':'man',
        'dictionaryName':'男'
      },{
        'dictionaryCode':'woman',
        'dictionaryName':'女'
      }],
      sex:'man'
    }
  }
}
</script>

```
## 特性
默认集成了ElementUI el-select的clearable与filterable特性
```
<el-select :value="value" placeholder="请选择" @input="change($event)" filterable size="mini" clearable>
  //...省略
  </el-select>
```