# dataset

qcharts 内置了 `数据集（dataset）` 用于单独管理数据，从而使得多个组件可以复用一份数据以及数据驱动组件变化，同时还可以更加自由地指定数据到视觉的映射。

> `dataset` 属于内置组件，无需显式地声明调用。

## 使用

`dataset` 需要设置数据源，同时需要指定 `row`、`value` 等特殊维度属性便可完成数据处理。

:::demo

```javascript
<template>
  <s-chart :data="barData" :data-fields="dataFields" >
    <s-bar />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-legend :attrs="{align: ['center', 'top']}" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        barData: [
          {
            product: '05-08',
            year: '图例一',
            sales: 42
          },
          {
            product: '05-08',
            year: '图例二',
            sales: 78.2
          },
          {
            product: '05-08',
            year: '图例三',
            sales: 62
          },
          {
            product: '05-09',
            year: '图例一',
            sales: 80
          },
          {
            product: '05-09',
            year: '图例二',
            sales: 108
          },
          {
            product: '05-09',
            year: '图例三',
            sales: 64
          },
          {
            product: '05-10',
            year: '图例一',
            sales: 36
          },
          {
            product: '05-10',
            year: '图例二',
            sales: 91
          },
          {
            product: '05-10',
            year: '图例三',
            sales: 56
          }
        ],

        dataFields: {  row: 'year', value: 'sales' }
      }
    }
  }
</script>
```

:::

### datset 的维度

`dataset` 在设置数据源的同时也需要指定一些维度，才能完成数据处理。

- **row**: `行数据` 划分依据字段，`dataset` 会按照 `row` 字段的值对数据进行数据分组。例如上方的柱形图中指定 `row` 为 `year`，则 `dataset` 会将 `year` 相同的数据聚为一组。
- **col**: `列数据` 划分依据字段，同 `row`。
- **value**: `dataset` 处理数据数值的依据字段。不设置将导致 `dataset` 无法处理数据中的数值，从而导致后续图表无法渲染，故必须设置。
- **text**: 该字段用于标记数据的文本字段。默认情况下为 `row` （或 `col`） 所指定的字段。

<br>

由于 `qcharts` 中的图表以及相关插件默认都是按照 `行数据（layoutBy='row'）` 进行渲染，所以 `row` 和 `col` 在大部分场景下是重复的，只需要设置 `row`。

### 按行（或按列）映射

`dataset` 可以同时指定 `row` 和 `col` 分组数据，所以图表的渲染便有了 2 种模式取值：

- **row**: 默认值，取 dataset 的 行数据。
- **col**: 取 dataset 的 列数据。

:::demo

```javascript
<template>
  <s-chart :data="barData" :data-fields="dataFields">
    <s-bar :attrs="{size:['80%','30%']}"  />
    <s-axis :attrs="{orient:'left'}" :style-axis="false" :style-scale="false" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-legend :attrs="{align: ['center','default']}"  />
    <s-bar
      :name="'bar1'"
      :attrs="attrs2"
    />
    <s-legend :attrs="{layoutBy: 'col',align: ['center','center']}"  />
    <s-axis :attrs="{layoutBy: 'col',target:'bar1', orient:'bottom'}" />
     <s-axis :attrs="{layoutBy: 'col',target:'bar1', orient:'left'}" :style-axis="false" :style-scale="false"/>
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs1:{
          size: ['80%', '30%']
        },
        attrs2: {
          layoutBy: 'col',
          pos: ['10%', '60%'],
          size: ['80%', '30%']
        },
        barData: [
          {
            product: '茶叶',
            year: '2016',
            sales: 81.2
          },
          {
            product: '茶叶',
            year: '2017',
            sales: 121.2
          },
          {
            product: '茶叶',
            year: '2018',
            sales: 41.2
          },
          {
            product: '牛奶',
            year: '2016',
            sales: 85.2
          },
          {
            product: '牛奶',
            year: '2017',
            sales: 79.6
          },
          {
            product: '牛奶',
            year: '2018',
            sales: 81.2
          },
          {
            product: '咖啡',
            year: '2016',
            sales: 65.2
          },
          {
            product: '咖啡',
            year: '2017',
            sales: 59.6
          },
          {
            product: '咖啡',
            year: '2018',
            sales: 61.2
          },
          {
            product: '椰汁',
            year: '2016',
            sales: 35.2
          },
          {
            product: '椰汁',
            year: '2017',
            sales: 79.6
          },
          {
            product: '椰汁',
            year: '2018',
            sales: 21.2
          }
        ],
        dataFields: {
          row: 'year',
          col: 'product',
          value: 'sales'
        }
      }
    }
  }
</script>

```

:::
