# directive

## 安装依赖
```
npm install
```

### 本地运行
```
npm run dev
```

### 打包
```
npm run build
```

### Lints和修复文件
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
### 提示element ui依赖只是单纯的展示作用
### vue自定义全局命令用法：
```
main.js文件中引入：
import directive from "./directive/directive"
Vue.use(directive)
在组件中使用即可：
<el-button type="primary" v-monitor="{name:'查询事件',params:formInline}">查询</el-button>
```
### v-monitor中所传参数：
```
name:当前点击事件的名称
params:当前要调用的接口传的参数
```
### 全局指令路径：/src/directive/directive.js
```
name:当前点击事件的名称
params:当前要调用的接口传的参数
```
