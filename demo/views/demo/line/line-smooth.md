## Curve Line Chart 曲线折线图

:::demo

```html
<template>
  <q-chart :data="lineData" :data-fields="dataFields">
    <q-line :css-line="lineStyle" />
    <q-axis :attrs="{orient:'left'}" :css-axis="false" :css-scale="false" />
    <q-axis :attrs="{orient:'bottom'}" :css-grid="false" />
    <q-legend />
    <q-tooltip />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        lineData: [
          { date: '05-01', catgory: '图例一', sales: 15.2 },
          { date: '05-02', catgory: '图例一', sales: 39.2 },
          { date: '05-03', catgory: '图例一', sales: 51.2 },
          { date: '05-04', catgory: '图例一', sales: 65.2 },
          { date: '05-05', catgory: '图例一', sales: 55.2 },
          { date: '05-06', catgory: '图例一', sales: 75.2 },
          { date: '05-07', catgory: '图例一', sales: 85.2 },
          { date: '05-08', catgory: '图例一', sales: 65.2 },
          { date: '05-01', catgory: '图例二', sales: 20.2 },
          { date: '05-02', catgory: '图例二', sales: 49.2 },
          { date: '05-03', catgory: '图例二', sales: 57.2 },
          { date: '05-04', catgory: '图例二', sales: 55.2 },
          { date: '05-05', catgory: '图例二', sales: 75.2 },
          { date: '05-06', catgory: '图例二', sales: 95.2 },
          { date: '05-07', catgory: '图例二', sales: 90.2 },
          { date: '05-08', catgory: '图例二', sales: 85.2 }
        ],
        dataFields: {
          row: 'catgory',
          value: 'sales',
          text: 'date'
        },
        lineStyle: function(attrs, data, i) {
          if (i === 1) {
            return { smooth: true }
          }
        }
      }
    }
  }
</script>
```

:::
