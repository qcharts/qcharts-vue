## Stacked Area Chart 取件面积图

:::demo

```html
<template>
  <q-chart :data="data" :data-fields="dataFields">
    <q-area :attrs="{smooth:true}" />
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
        data: [
          { date: '05-01', category: '图例一', sales: 15.2 },
          { date: '05-02', category: '图例一', sales: 39.2 },
          { date: '05-03', category: '图例一', sales: 31.2 },
          { date: '05-04', category: '图例一', sales: 65.2 },
          { date: '05-05', category: '图例一', sales: 55.2 },
          { date: '05-06', category: '图例一', sales: 75.2 },
          { date: '05-07', category: '图例一', sales: 95.2 },
          { date: '05-08', category: '图例一', sales: 65.2 },
          { date: '05-01', category: '图例二', sales: 10.2 },
          { date: '05-02', category: '图例二', sales: 30.2 },
          { date: '05-03', category: '图例二', sales: 25.2 },
          { date: '05-04', category: '图例二', sales: 70.2 },
          { date: '05-05', category: '图例二', sales: 45.2 },
          { date: '05-06', category: '图例二', sales: 56.2 },
          { date: '05-07', category: '图例二', sales: 70.2 },
          { date: '05-08', category: '图例二', sales: 45.2 }
        ],
        dataFields: { row: 'category', value: 'sales', text: 'date' }
      }
    }
  }
</script>
```

:::
