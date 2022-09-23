
// 已废弃
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
        // 同样也支持插槽写法，提高配置表单得灵活性
        const vNodes = this.$scopedSlots.default();
        // console.log(vNodes);
        return (
            <div>
                <el-form inline ref="componentFrom" props={{model: this.$data.tableData}}>
                    {this.options.map(option => this.renderTable(option))}
                    {/* 插槽 */}
                    {
                        vNodes.map((node) => {
                            console.log(node);
                            let label = node.componentOptions.propsData.label || '';
                            return (
                                <el-form-item label={label}>
                                    {node}
                                </el-form-item>
                            )
                        })
                    }
                    <el-form-item>
                      <el-button type="primary" on-click={() => {this.handleSubmit('componentFrom')}}>查询</el-button>
                    </el-form-item>
                    <el-form-item>
                      <el-button on-click={() => {this.handleReset('componentFrom')}}>重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        )
    },
    methods: {
        // 点击查询按钮的时候触发父组件submit事件
        handleSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if(valid){
                    this.$emit("submit", this.tableData);
                }else{
                    return false;
                }
            })
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
        renderTable(option){
            const tableType = {
                input: () => (
                    <el-form-item 
                        label={option.label} 
                        label-position="right" 
                        rules={option.rules || []}
                        prop={option.valueKey || ''} // 筛选条件相关字段
                    >
                        <el-input
                            style={{ width: (option.width || 260) + "px" }}
                            v-model={this.$data.tableData[option.valueKey]}
                            {...{attrs: option.otherOptions}}
                        >
                        </el-input>
                    </el-form-item>
                ),
                select: () => (
                    <el-form-item 
                        label={option.label} 
                        label-position="right" 
                        rules={option.rules || []}
                        prop={option.valueKey || ''} // 筛选条件相关字段
                    >
                        <el-select
                            style={{ width: (option.width || 260) + "px" }}
                            v-model={this.$data.tableData[option.valueKey]}
                        >
                            { 
                                option.selectOptions.map(item => (
                                    <el-option label={item.label} value={item.value}></el-option>
                                )) 
                            }
                        </el-select>
                    </el-form-item>
                ),
                timePicker: () => (
                    <el-form-item 
                        label={option.label} 
                        label-position="right" 
                        rules={option.rules || []}
                        prop={option.valueKey || ''} // 筛选条件相关字段
                    >
                        <el-time-picker
                            is-range={option.isRange || true}
                            v-model={this.$data.tableData[option.valueKey]}
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            placeholder="选择时间范围"
                        >    
                        </el-time-picker>
                    </el-form-item>
                ),
                datePicker: () => (
                    <el-form-item
                        label={option.label} 
                        label-position="right" 
                        rules={option.rules || []}
                        prop={option.valueKey || ''} // 筛选条件相关字段
                    >
                        <el-date-picker
                            v-model={this.$data.tableData[option.valueKey]}
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                        >
                        </el-date-picker>
                    </el-form-item>
                ),
                // 多选 多选绑定的值必须为数组
                checkGroup: () => {
                    // this.$set(this.$data.tableData, option.valueKey, []);
                    this.$data.tableData[option.valueKey] = [];
                    return(
                        <el-form-item
                            label={option.label} 
                            label-position="right"
                        >
                            <el-checkbox-group
                                style={{ width: (option.width || 260) + "px" }}
                                v-model={this.$data.tableData[option.valueKey]}
                            >
                                {   option.checkBoxs.map(item => <el-checkbox label={item.label} ></el-checkbox>)    }
                            </el-checkbox-group>
                        </el-form-item>
                    )
                },
                // 单选
                radioGroup: () => (
                    <el-form-item
                        label={option.label} 
                        label-position="right"
                    >
                        <el-radio-group
                            style={{ width: (option.width || 260) + "px" }}
                            v-model={this.$data.tableData[option.valueKey]}
                        >
                            {
                                option.radioBoxs.map(item => <el-radio label={item.label} ></el-radio>)
                            }
                        </el-radio-group>
                    </el-form-item>
                ),
            }
            // 自定义表单元素
            if(option.type == 'customize'){
                //
            }
            return tableType[option.type]();
        }
    }
}
