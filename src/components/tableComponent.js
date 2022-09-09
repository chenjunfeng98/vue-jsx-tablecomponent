export default {
    name: 'tableComponent',
    // 接收option
    props: {
        options: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            //定义tableData用来保存表单输入后的键值对数据
            tableData: {}
        }
    },
    // 渲染函数
    render() {
        return (
            <div>
                <el-form inline>
                    {this.options.map(option => this.renderTable(option ,this.$data.tableData))}
                    <el-form-item>
                      <el-button type="primary" on-click={this.handleSubmit}>查询</el-button>
                    </el-form-item>
                    <el-form-item>
                      <el-button on-click={this.handleReset}>重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        )
    },
    methods: {
        // 点击查询按钮的时候触发父组件submit事件
        handleSubmit() {
            this.$emit("submit", this.tableData);
        },
          // 清空表单
        handleReset() {
            this.tableData = {};
            this.$emit("reset");
        },
        renderTable(option, tableData){
            const tableType = {
                input: () => (
                    <el-form-item label={option.label} label-position="right">
                        <el-input
                            style={{ width: option.width + "px" }}
                            v-model={tableData[option.valueKey]}
                            placeholder={option.placeholder}
                        >
                        </el-input>
                    </el-form-item>
                )
            }
            if(tableType[option.type]){
                return tableType[option.type]();
            }
        }
    },
}