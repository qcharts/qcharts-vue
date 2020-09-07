### 图表介绍

Column Char、Bar Chart, 柱状图和条形图定义方式均为`<q-bar/>`，可设置 attrs 中的 transpose 属性来决定绘制柱状图或者条形图。

### attrs 属性

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名      | 类型    | 默认值                               | 描述                                                                                |
| ----------- | ------- | ------------------------------------ | ----------------------------------------------------------------------------------- |
| barWidth    | Number  | 根据 size 宽度均匀绘制               | 描述柱形宽度                                                                        |
| clientRect  | Object  | {top,right,bottom,left,width,height} | 设置了 width,heigh,优先与 bottom,right                                              |
| splitNumber | Number  | 0                                    | 坐标轴的分割段数，用来计算柱子的最大高度，在设置坐标轴的 splitNumber 属性时同步加上 |
| stack       | Boolean | false                                | 是否设置为堆叠图，二维数据无法堆叠                                                  |
| stackGap    | Number  | 0                                    | 堆叠图中柱子间距                                                                    |
| transpose   | Boolean | false                                | 是否设置为条形图                                                                    |

### style 属性

组件中可以自定义 css 属性的元素如下表：

| 名称                 | 描述                  |
| -------------------- | --------------------- |
| css-backgroundpillar | 背景柱子样式          |
| css-pillar           | 柱子样式              |
| css-pillar:hover     | 鼠标 hover 时柱子样式 |
| css-text             | 文本样式              |

使用方法可在[样式调整 demo](#/demo/column/others)中查看
