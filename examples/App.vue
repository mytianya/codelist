<template>
  <div id="app">
      <codelist code="region" v-model="code" @select="selectData"></codelist>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      code:undefined
    }
  },
  methods:{
    selectData(d){
      console.log(d)
    }
  }
}
</script>
