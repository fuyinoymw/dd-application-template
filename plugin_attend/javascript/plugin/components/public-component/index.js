/**
 * public-component是统一的组件导出页面。
 * 目前考勤场域有三种组件，对应开发目录为：
 *  翻牌页： card-template
 *  Tab页： tab-tempalate
 *  组件： component-template
 *  */ 
import { getSdk, getLifecycleSdk } from "../../api/sdk";

Component({
  data: {},
  props: {
    bizType: "card",
    componentName: "",
    componentProps: {
      // config.json文件中定义的props可以从componentProps中获取，这里可以设置默认值。如果有在设计器里修改，则会被新值覆盖。
    },
    config: {
      corpId: "", // 可以通过this.props.config.corpId 获取当前工作台用户的企业corpId
      
    },
  },
  didMount() {
    console.log('');
    getLifecycleSdk().didMount(this.props.componentName);
    // 这里读到的props，和config.json文件中定义的props相对应，详见config.json文件说明
    const props = this.props.componentProps;
    // 业务代码写到下方
  },
  didUpdate() {
    getLifecycleSdk().didUpdate(this.props.componentName);
    // 业务代码写到下方
  },

  didUnmount() {
    getLifecycleSdk().didUnmount(this.props.componentName);
    // 业务代码写到下方
  },
  methods: {},
});
