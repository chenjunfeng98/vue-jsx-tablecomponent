<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TableComponent :options="options" @submit="submit" @reset="reset"/>
  </div>
</template>

<script>
import TableComponent from './components/tableComponent.js';

export default {
  name: 'App',
  components: {
    TableComponent
  },
  data () {
    return {
      options: [
        {
          type: "input",
          label: "版权方:",
          width: "260",
          placeholder: "请输入版权方",
          valueKey: "inputData"
        },
        {
          type: "select",
          label: "消息类型:",
          width: "260",
          placeholder: "请选择类型",
          multiple: true,
          valueKey: "selectData",
          // select的options 一般是从后台获取的
          selectOptions: [
            {
              label: "系统消息1",
              value: "1"
            },
            {
              label: "系统消息2",
              value: "2"
            }
          ]
        }
      ]
    }
  },
  methods: {
    submit(tableData){
      // 提交
      console.log(tableData);
    },
    reset(){
      // 重置
    },

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
