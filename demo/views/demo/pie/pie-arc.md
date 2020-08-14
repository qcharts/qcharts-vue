## 弧饼图

:::demo

```html
<template>
  <q-chart :data="pieData" :data-fields="dataFields">
    <q-pie :attrs="attrs" />
    <q-legend />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          radius: 0.6,
          innerRadius: 0.1,
          startAngle: 180,
          endAngle: 360
        },
        pieData: [
          {
            type: '污染源',
            count: 4454
          },

          {
            type: '消防场所',
            count: 1239
          },

          {
            type: '安全生产',
            count: 3758
          },

          {
            type: '治安场所',
            count: 4300
          }
        ],
        dataFields: { row: 'type', value: 'count' }
      }
    }
  }
</script>
```

:::
