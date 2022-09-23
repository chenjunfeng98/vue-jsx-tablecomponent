<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TableComponent :options="options" @submit="submit" @reset="reset">
      <template v-slot>
        <el-input label="选中" placeholder="请输入内容" @focus="getFocus" clearable>
          <template slot="prepend">Http://</template>
        </el-input>
        <el-link type="primary">主要链接</el-link>
      </template>
    </TableComponent>
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
    // 自定义规则
    let checkInput = (rule, value, callback)=>{
      const reg = /^\d+$/;
      if(!value){
        callback(new Error('年龄不能为空'))
      }else if (!reg.test(value)) {
        callback(new Error("年龄必须为数字"));
      }else{
        callback();
      } 
    }
    return {
      options: [
        {
          type: "input",
          label: "版权方:",
          width: "260",
          valueKey: "inputData",
          otherOptions: {
            'show-password': true,
            'clearable': true,
            'placeholder': "请输入版权方"
          },
          rules: [
            { required: true, validator: checkInput, trigger: 'blur'}
          ]
        },
        {
          type: "select",
          label: "消息类型:",
          width: "260",
          valueKey: "selectData",
          otherOptions: {
            placeholder: "请选择类型",
            multiple: false
          },
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
          ],
          rules: [
            { required: true, message: '必填项', trigger: 'blur'}
          ]
        },
        {
          type: 'timePicker',
          label: '选择时间',
          valueKey: "timePickerData",
          rules: [
            { required: true, message: '必填项', trigger: 'change'}
          ]
        },
        {
          type: 'datePicker',
          label: '选择日期',
          valueKey: "datePickerData",
          otherOptions: {
            // valueFormat: "yyyy-MM-dd",
          },
          rules: [
            { required: true, message: '必填项', trigger: 'change'}
          ]
        },
        {
          type: 'radioGroup',
          label: '单选',
          valueKey: "radioGroupData",
          radioBoxs: [
            { label: '美食/餐厅线上活动' },
            { label: '线下主题活动' }
          ]
        },
        {
          type: 'checkGroup',
          label: '多选',
          valueKey: "checkGroupData",
          checkBoxs: [
            { label: '美食/餐厅线上活动' },
            { label: '线下主题活动' }
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
    getFocus(){
      console.log('我被选中啦')
    }
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
