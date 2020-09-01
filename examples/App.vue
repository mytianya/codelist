<template>
  <div id="app">
      <codelist code="region" v-model="code" @select="selectData">
        <template slot-scope="scope">
          {{scope.k}}+{{scope.l}}
        </template>
      </codelist>
      <codelist :data="sexList" v-model="sex" ></codelist>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      code:undefined,
      sexList:[{
        'dictionaryCode':'man',
        'dictionaryName':'男'
      },{
        'dictionaryCode':'woman',
        'dictionaryName':'女'
      }],
      sex:'man'
    }
  },
  methods:{
    selectData(d){
      console.log(d)
    }
  }
}
</script>
