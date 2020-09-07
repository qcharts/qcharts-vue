### 图表介绍

PolarBar Chart, 柱状图和条形图定义方式均为`<q-polarBar/>`

### attrs 属性

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名        | 类型    | 默认值  | 描述                               |
| ------------- | ------- | ------- | ---------------------------------- |
| innerRadius   | Number  | `0`     | 内半径比例，0-1 之间               |
| radius        | Number  | `1`     | 外半径比例，0-1 之间               |
| groupPadAngle | Number  | `0`     | 两组扇形之间间距,角度表示          |
| stack         | Boolean | `false` | 是否设置为堆叠图，二维数据无法堆叠 |
| stackGap      | Number  | `0`     | 堆叠图中柱子间距,单位为像素        |
| padAngle      | Number  | `0`     | 扇形之间间距,角度表示              |

### style 属性

组件中可以自定义 css 属性的元素如下表：

| 名称                 | 基本类型 | 描述         |
| -------------------- | -------- | ------------ |
| css-backgroundpillar | 面       | 背景柱子样式 |
| css-pillar           | 面       | 柱子样式     |
