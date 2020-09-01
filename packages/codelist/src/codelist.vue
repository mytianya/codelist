<template>
  <el-select :value="value" placeholder="请选择" @input="change($event)" filterable size="mini" clearable>
    <el-option
      v-for="item in list"
      :key="item.dictionaryCode"
      :label="item.dictionaryName"
      :value="item.dictionaryCode"
      :disabled="item.disabled"
    >
    <slot :k="item.dictionaryCode" :l="item.dictionaryName"></slot>
    </el-option>
  </el-select>
</template>
<script>
import options from './options'
import axios from 'axios'
export default {
  name: "codelist",
  data() {
    return {
      list: [],
    };
  },
  props: {
    code: {
      required: false,
      type: String,
    },
    value: {
      type: [String, Object],
    },
    apiUrl: {
      required: false,
      type: String,
      default: options.defaultURL,
    },
    k: {
      type: String,
      required: false,
      default: "dictionaryCode",
    },
    l: {
      type: String,
      required: false,
      default: "dictionaryName",
    },
    data: {
      type: [Array],
      default: undefined,
    },
    baseURL:{
      type:String,
      default:''
    }
  },
  methods: {
    load() {
      const res = new Array();
      const k = this.k;
      const l = this.l;
      axios.get(options.baseURL+'/'+this.apiUrl,{
        params:{
          typeCode:this.code
        }
      }).then(resp=>{
       var data = resp.data.data;
          for (var i = 0; i < data.length; i++) {
            res.push({
              dictionaryCode: data[i][k],
              dictionaryName: data[i][l],
            });
          }
      })
      this.list = Object.assign(res, {});
    },
    change(val) {
      this.$emit("input", val);
      let obj = this.list.find((item) => {
        return item.dictionaryCode === val;
      });
      this.$emit("select", {
        code: obj.dictionaryCode,
        label: obj.dictionaryName,
      });
    },
  },
  created() {
    if (!this.data) {
      this.load();
    }else{
      this.list=Object.assign(this.data,{});
    }
  },
};
</script>