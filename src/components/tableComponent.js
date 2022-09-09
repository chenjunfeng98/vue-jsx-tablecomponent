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
        /**
         * option 单项配置
         * tableData 表单组件保存表单输入后的键值对数据
         * */ 
        renderTable(option, tableData){
            const tableType = {
                input: () => (
                    <el-form-item label={option.label} label-position="right">
                        <el-input
                            style={{ width: (option.width || 260) + "px" }}
                            v-model={tableData[option.valueKey]}
                            placeholder={option.placeholder || '请输入内容'}
                        >
                        </el-input>
                    </el-form-item>
                ),
                select: () => (
                    <el-form-item label={option.label} label-position="right">
                        <el-select
                            style={{ width: (option.width || 260) + "px" }}
                            v-model={tableData[option.valueKey]} 
                            multiple={option.multiple || false}
                            placeholder={option.placeholder || '请选择内容'}
                        >
                            { 
                                option.selectOptions.map(item => (
                                    <el-option label={item.label} value={item.value}></el-option>
                                )) 
                            }
                        </el-select>
                    </el-form-item>
                ),
                
            }
            return tableType[option.type]();
        }
    },
}