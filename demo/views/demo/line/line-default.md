## 基础折线图

:::demo

```html
<template>
  <q-chart :data="lineData" :data-fields="dataFields">
    <q-line />
    <q-axis :attrs="{orient:'left'}" :style-axis="false" :style-scale="false" />
    <q-axis :attrs="{orient:'bottom'}" :style-grid="false" />
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
          { date: '05-03', catgory: '图例一', sales: 31.2 },
          { date: '05-04', catgory: '图例一', sales: 65.2 },
          { date: '05-05', catgory: '图例一', sales: 55.2 },
          { date: '05-06', catgory: '图例一', sales: 75.2 },
          { date: '05-07', catgory: '图例一', sales: 95.2 },
          { date: '05-08', catgory: '图例一', sales: 65.2 }
        ],
        tooltipAttrs: {
          formatter: data => `${data.date} ${data.sales}`
        },
        dataFields: { row: 'catgory', value: 'sales', text: 'date' },
        pointStyle: { strokeColor: '#fff' }
      }
    }
  }
</script>
```

:::
