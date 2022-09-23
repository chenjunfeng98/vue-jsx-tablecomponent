export default {
    name: "formComponent",
    functional: true,
    porps: {
        formItemConfigList: {
            type: Array,
            require: true
        }
    },
    render(h, context) {
        let { props, scopedSlots } = context;
        let { formItemConfigList } = props;
        // 获取插槽里面的VNode
        let vNodes = scopedSlots.default();
        return vNodes.map((node, idx) => {
            const formItemConfig = formItemConfigList[idx];
            return (
                <el-form-item prop={formItemConfig.prop} rules={formItemConfig.rules}>
                    <span slot="label">{formItemConfig.label}</span>
                    {node}
                </el-form-item>
            )
        })
    }
}