# codelist
对ElementUI下拉框的结合编码表的二次封装
> 基于ElementUI el-select二次封装的下拉框组件。
>
> 项目后台接口有一张字典表，类似字典编码值，字典名称，分类名称。
>
> 提供了一个公共接口通过分类的编码值，查询出该分类下所有数据

## 后台接口

```json
QueryPath: /xxx/xxx?type=xxxx
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
## 前端使用

```vue
code:为分类编码值
v-model 为绑定的字典表编码值
@select 返回的是字典编码值与字典名称
k 返回数据下拉框指定的value值，默认dictionaryCode
l 返回数据下拉框指定的label值，默认为dictionaryName
apiurl 可以改变默认的接口路径
<template>
  <div>
    <codelist code="region" v-model="code" @select="select" k="dictionaryCode" l="dictionaryName" ></codelist>
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

