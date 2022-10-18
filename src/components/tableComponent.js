
export default {
    name: "DynTableItems",
    props: {
      // 表格配置
      tableConfig: {
        type: Object
      },
      // 表格数据
      tableData: {
        type: Array,
        require: true
      },
      // 表格字段，用于展示
      tableHeader: {
        type: Array,
        require: true
      },
      total: {
        type: [String, Number],
        require: true
      },
      // 当前页数
      page: {
        type: Number,
        default: 1
      },
      // 每页显示条目个数
      pageSize: {
        type: Number,
        default: 10
      },
      // 每页显示个数选择器的选项设置
      pageSizes: {
        type: Array,
        default: () => [1, 20, 30, 40]
      }
    },
    render() {
      return (
        <div>
          <el-table border data={this.tableData} {...{attrs: this.tableConfig}}>
            {
              this.tableHeader.map(col => {
                return (
                  <el-table-column label={col.label} prop={col.prop} {...{attrs: col.options}}
                      // 插槽
                      scopedSlots={{
                        default: scope => {
                          return col.prop === 'render' ? col.render(scope.row, scope.$index) : fotmatter(scope.row, col.prop)
                        }
                      }}
                  >
                  </el-table-column>
                )
              })
            }
          </el-table>
          <el-pagination
            current-page={this.page}
            page-sizes={this.pageSizes}
            page-size={this.pageSize}
            layout="total, sizes, prev, pager, next"
            total={this.total}
            onsize-change={ (val) => { 
              this.$emit('pagination', val); 
              this.$emit('update:pageSize', val) 
            } }
            oncurrent-change={ (val) => { 
              this.$emit('pagination', val); 
              this.$emit('update:page', val);
            } }
          ></el-pagination>
        </div>
      )
    }
  }


// 格式化绑定参数格式 例如: prop = a.b.c
const fotmatter = (row, prop) => {
  const porpList = prop.split('.');
  let res = row;
  if(porpList.length > 1) {
    for(let item of porpList){
      res = res[item]
    }
    return res;
  }else {
    return row[prop]
  }
}
//   <table-component 
//   :table-data="userList"
//   :table-header="tableHeader"
//   :total="total"
//   :page.sync="page"
//   :pageSize.sync="pageSize"
//   @pagination="reflashList"
//   v-if="userList.length"></table-component>