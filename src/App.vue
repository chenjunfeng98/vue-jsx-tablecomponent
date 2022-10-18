<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <table-component
      :table-data="table_data"
      :table-header="table_columns"
      :total="total"
      :tableConfig="tableConfig"
    ></table-component>
  </div>
</template>

<script>
import TableComponent from "./components/tableComponent.js";

export default {
  name: "App",
  components: {
    TableComponent,
  },
  data() {
    return {
      table_data: [
        {
          package_info: {
            package_year: {
              update_time: 0,
              vip_day_count: 200,
              vip_day_use: 0,
            },
            package_month: {
              update_time: 0,
              vip_day_count: 22,
              vip_day_use: 0,
            },
          },
          use_date: "2022-01-16",
          sp_id: "甘肃移动拉贝少儿",
          is_enable: true,
          create_by: "chenjunfeng",
          update_at: "2022-10-17 16:58:59",
        },
        {
          package_info: {
            package_year: {
              update_time: 0,
              vip_day_count: 206,
              vip_day_use: 0,
            },
            package_month: {
              update_time: 0,
              vip_day_count: 66,
              vip_day_use: 0,
            },
          },
          use_date: "2022-01-17",
          sp_id: "甘肃移动拉贝少儿",
          is_enable: true,
          create_by: "chenjunfeng",
          update_at: "2022-10-17 17:29:40",
        },
        {
          package_info: {
            package_year: {
              update_time: 0,
              vip_day_count: 206,
              vip_day_use: 0,
            },
            package_month: {
              update_time: 0,
              vip_day_count: 55,
              vip_day_use: 0,
            },
          },
          use_date: "2022-01-18",
          sp_id: "甘肃移动拉贝少儿",
          is_enable: false,
          create_by: "chenjunfeng",
          update_at: "2022-10-17 17:29:44",
        },
        {
          package_info: {
            package_year: {
              update_time: 0,
              vip_day_count: 205,
              vip_day_use: 0,
            },
            package_month: {
              update_time: 0,
              vip_day_count: 55,
              vip_day_use: 0,
            },
          },
          use_date: "2022-05-16",
          is_enable: true,
          sp_id: "甘肃移动拉贝少儿",
          create_by: "chenjunfeng",
          update_at: "2022-10-17 17:29:46",
        },
        {
          package_info: {
            package_year: {
              update_time: 0,
              vip_day_count: 106,
              vip_day_use: 0,
            },
            package_month: {
              update_time: 0,
              vip_day_count: 65,
              vip_day_use: 0,
            },
          },
          use_date: "2022-05-17",
          is_enable: true,
          sp_id: "甘肃移动拉贝少儿",
          create_by: "chenjunfeng",
          update_at: "2022-10-17 17:29:48",
        },
        {
          package_info: {
            package_year: {
              update_time: 0,
              vip_day_count: 10,
              vip_day_use: 0,
            },
            package_month: {
              update_time: 0,
              vip_day_count: 10,
              vip_day_use: 0,
            },
          },
          use_date: "2022-10-01",
          is_enable: true,
          sp_id: "甘肃移动拉贝少儿",
          create_by: "chenjunfeng",
          createdAt: "2022-10-17T08:52:31.027Z",
          update_at: "2022-10-17 17:31:22",
        },
        {
          package_info: {
            package_year: {
              update_time: 0,
              vip_day_count: 10,
              vip_day_use: 0,
            },
            package_month: {
              update_time: 0,
              vip_day_count: 10,
              vip_day_use: 0,
            },
          },
          use_date: "2022-10-31",
          sp_id: "甘肃移动拉贝少儿",
          is_enable: true,
          create_by: "chenjunfeng",
          update_at: "2022-10-17 17:30:25",
          createdAt: "2022-10-17T09:30:25.756Z",
        },
      ],
      table_columns: [
        {
            label: '渠道名', 
            prop: 'sp_id',
            options: {
              width: '200'
            }
        },
        {
            label: '使用日期', 
            prop: 'use_date',
            options: {
              width: '200'
            }
        },
        {
            label: '月包设置数量',
            prop: 'package_info.package_month.vip_day_count',
            options: {
              width: '200',
              sortable: true
            }
        },
        {
            label: '月包使用数量',
            prop: 'package_info.package_month.vip_day_use',
            options: {
              width: '200'
            }
        },
        {
            label: '年包设置数量',
            prop: 'package_info.package_year.vip_day_count',
            options: {
              width: '200'
            }
        },
        {
            label: '年包使用数量',
            prop: 'package_info.package_year.vip_day_use',
            options: {
              width: '200'
            }
        },
        {
            label: '最近操作人',
            prop: 'create_by',
            options: {
              width: '200'
            }
        },
        {
            label: '最近操作时间',
            prop: 'update_at',
            options: {
              width: '200',
              sortable: true
            }
        },
        {
            label: '操作', 
            prop: 'render',
            options: {
              fixed: "right",
              width: "150px"
            },
            render: (row, idx) => {
                return ((h) => {
                  return (
                    <div>
                      <el-button onClick={() => {console.log(row)} } size="mini">修改</el-button>
                      <el-button onClick={() => {console.log(row)}} size="mini" type="danger" >删除</el-button>
                    </div>
                  );
                })(this.$createElement)
            }
        },
      ],
      total: 10,
      tableConfig: {
        height: "300"
      }
    };
  },
  methods: {
    //
  },
};
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
