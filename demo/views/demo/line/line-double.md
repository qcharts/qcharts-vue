## Double Line Chart 双折线图

:::demo

```html
<template>
  <q-chart :data="lineData" :data-fields="dataFields">
    <q-line />
    <q-axis :attrs="{orient:'left'}" :css-axis="false" :css-scale="false" />
    <q-axis :attrs="{orient:'bottom'}" :css-grid="false" />
    <q-legend
      :attrs="{align: ['center', 'bottom']}"
      :css-icon="{borderRadius:10}"
      :css-text="{fontSize:12}"
    />
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
          { date: '05-07', catgory: '图例一', sales: 95.2 },
          { date: '05-08', catgory: '图例一', sales: 65.2 },
          { date: '05-01', catgory: '图例二', sales: 20.2 },
          { date: '05-02', catgory: '图例二', sales: 49.2 },
          { date: '05-03', catgory: '图例二', sales: 57.2 },
          { date: '05-04', catgory: '图例二', sales: 55.2 },
          { date: '05-05', catgory: '图例二', sales: 75.2 },
          { date: '05-06', catgory: '图例二', sales: 95.2 },
          { date: '05-07', catgory: '图例二', sales: 110.2 },
          { date: '05-08', catgory: '图例二', sales: 85.2 }
        ],
        dataFields: {
          row: 'catgory',
          value: 'sales',
          text: 'date'
        }
      }
    }
  }
</script>
```

:::
