## 基础漏斗图

:::demo

```html
<template>
  <q-chart :data="data" :data-fields="dataFields">
    <q-funnel :attrs="attrs" />
    <q-tooltip />
    <q-legend :attrs="{align: ['center', 'bottom']}" />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          size: ['50%', '80%'],
          pos: ['25%', '10%'],
          align: 'center',
          formatter: d => `${d.value}`
        },
        data: [
          { value: 3721, label: '浏览网站' },
          { value: 3006, label: '放入购入车' },
          { value: 2505, label: '生成订单' },
          { value: 2151, label: '支付订金' },
          { value: 1782, label: '完成订单' },
          { value: 1503, label: '完成交易' },
          { value: 1204, label: '未完成交易' }
        ],

        dataFields: {
          row: 'label',
          value: 'value',
          text: 'label'
        }
      }
    }
  }
</script>
```

:::
