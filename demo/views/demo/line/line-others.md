## 其它

#### 样式调整

:::demo

```html
<template>
  <q-chart :data="lineData" :data-fields="dataFields">
    <q-line
      :attrs="attrs"
      :data="lineData"
      :data-fields="dataFields"
      :style-point="pointStyle"
      :style-point:hover="pointHoverStyle"
    />
    <q-axis :attrs="{orient:'left'}" :style-axis="false" :style-scale="false" />
    <q-axis :attrs="{orient:'bottom'}" />
    <q-legend
      :attrs="{align: ['center', 'bottom']}"
      :style-icon="{borderRadius:10}"
      :style-text="{fontSize:12}"
    />
    <q-tooltip :attrs="tooltipAttrs" />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: { smooth: true },
        lineData: [
          { product: '茶叶', year: '2016', sales: 81.2 },
          { product: '茶叶', year: '2017', sales: 121.2 },
          { product: '茶叶', year: '2018', sales: 41.2 },
          { product: '牛奶', year: '2016', sales: 89.2 },
          { product: '牛奶', year: '2017', sales: 50.6 },
          { product: '牛奶', year: '2018', sales: 80.2 },
          { product: '咖啡', year: '2016', sales: 35.2 },
          { product: '咖啡', year: '2017', sales: 79.6 },
          { product: '咖啡', year: '2018', sales: 61.2 },
          { product: '椰汁', year: '2016', sales: 55.2 },
          { product: '椰汁', year: '2017', sales: 69.6 },
          { product: '椰汁', year: '2018', sales: 21.2 }
        ],
        tooltipAttrs: {
          formatter: data => `${data.date} ${data.sales}`
        },
        dataFields: {
          row: 'year',
          value: 'sales',
          text: 'product'
        },
        pointStyle: { pointType: 'star', size: 8, strokeColor: 'transparent' },
        pointHoverStyle: function(attrs, data, i, j) {
          //设置symbol样式
          if (data.sales > 60) {
            return { scale: 1.4 }
          } else if (data.sales > 30) {
            return { fillColor: '#0ff' }
          } else {
            return { fillColor: '#0f0' }
          }
        }
      }
    }
  }
</script>
```

:::

#### 数据更新

:::demo

```html
<template>
  <q-chart :data="data" :data-fields="dataFields">
    <q-line :attrs="{smooth:true}" :style-point="{strokeColor:'transparent'}" />
    <q-axis :attrs="{orient:'left'}" :style-axis="false" :style-scale="false" />
    <q-axis :attrs="{orient:'bottom'}" />
    <q-legend :attrs="{align: ['center', 'bottom']}" />
    <q-tooltip :attrs="tooltipAttrs" />
  </q-chart>
</template>
<script>
  let num = 0
  export default {
    data: function() {
      return {
        data: [],
        lineData: [
          { product: '茶叶', year: '2016', sales: 81.2 },
          { product: '茶叶', year: '2017', sales: 121.2 },
          { product: '茶叶', year: '2018', sales: 41.2 },
          { product: '牛奶', year: '2016', sales: 89.2 },
          { product: '牛奶', year: '2017', sales: 50.6 },
          { product: '牛奶', year: '2018', sales: 80.2 },
          { product: '咖啡', year: '2016', sales: 35.2 },
          { product: '咖啡', year: '2017', sales: 79.6 },
          { product: '咖啡', year: '2018', sales: 61.2 },
          { product: '椰汁', year: '2016', sales: 55.2 },
          { product: '椰汁', year: '2017', sales: 69.6 },
          { product: '椰汁', year: '2018', sales: 21.2 }
        ],
        newData: [
          { product: '茶叶', year: '2016', sales: 181.2 },
          { product: '茶叶', year: '2017', sales: 51.2 },
          { product: '茶叶', year: '2018', sales: 31.2 },
          { product: '牛奶', year: '2016', sales: 59.2 },
          { product: '牛奶', year: '2017', sales: 179.6 },
          { product: '牛奶', year: '2018', sales: 130.2 },
          { product: '咖啡', year: '2016', sales: 135.2 },
          { product: '咖啡', year: '2017', sales: 69.6 },
          { product: '咖啡', year: '2018', sales: 91.2 },
          { product: '椰汁', year: '2016', sales: 85.2 },
          { product: '椰汁', year: '2017', sales: 59.6 },
          { product: '椰汁', year: '2018', sales: 31.2 }
        ],
        tooltipAttrs: {
          formatter: data => `${data.product} ${data.year} ${data.sales}`
        },
        dataFields: { row: 'year', value: 'sales', text: 'product' }
      }
    },
    created() {
      this.data = this.lineData
      setTimeout(this.changeData, 5000)
    },
    mounted() {},
    methods: {
      changeData() {
        if (num % 2 === 0) {
          this.data = this.newData
        } else {
          this.data = this.lineData
        }
        num++
        setTimeout(this.changeData, 5000)
      }
    }
  }
</script>
```

:::

#### 多图融合

:::demo

```html
<template>
  <q-chart :data="lineData" :data-fields="dataFields">
    <q-bar :attrs="{mouseDisabled:true}" />
    <q-line :attrs="{axisGap:true}" :style-point="pointStyle" />
    <q-axis :attrs="{orient:'left'}" />
    <q-axis :attrs="{orient:'bottom'}" />
    <q-legend :attrs="{align: ['center', 'bottom']}" />
    <q-tooltip :attrs="tooltipAttrs" />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        lineData: [
          { product: '茶叶', year: '2016', sales: 81.2 },
          { product: '茶叶', year: '2017', sales: 121.2 },
          { product: '茶叶', year: '2018', sales: 41.2 },
          { product: '牛奶', year: '2016', sales: 89.2 },
          { product: '牛奶', year: '2017', sales: 50.6 },
          { product: '牛奶', year: '2018', sales: 80.2 },
          { product: '咖啡', year: '2016', sales: 35.2 },
          { product: '咖啡', year: '2017', sales: 79.6 },
          { product: '咖啡', year: '2018', sales: 61.2 },
          { product: '椰汁', year: '2016', sales: 55.2 },
          { product: '椰汁', year: '2017', sales: 69.6 },
          { product: '椰汁', year: '2018', sales: 21.2 }
        ],
        tooltipAttrs: {
          formatter: data => `${data.product} ${data.year} ${data.sales}`
        },
        dataFields: { row: 'year', value: 'sales', text: 'product' },
        pointStyle: { strokeColor: '#fff' }
      }
    }
  }
</script>
```

:::
