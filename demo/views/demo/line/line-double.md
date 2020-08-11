## Double Line Chart 双折线图

:::demo

```html
<template>
  <q-chart :data="lineData" :data-fields="dataFields">
    <q-line
      :data="lineData"
      :data-fields="dataFields"
      :css-point="pointStyle"
    />
    <q-axis :attrs="{orient:'left'}" :css-axis="false" :css-scale="false" />
    <q-axis :attrs="{orient:'bottom'}" />
    <q-legend
      :attrs="{align: ['center', 'bottom']}"
      :css-icon="{borderRadius:10}"
      :css-text="{fontSize:12}"
    />
    <q-tooltip :attrs="tooltipAttrs" />
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
        tooltipAttrs: {
          title: function(data) {
            return data[0].date
          },
          formatter: data => `${data.date} ${data.sales}`
        },
        dataFields: {
          row: 'catgory',
          value: 'sales',
          text: 'date'
        },
        pointStyle: { strokeColor: '#fff' }
      }
    }
  }
</script>
```

:::
