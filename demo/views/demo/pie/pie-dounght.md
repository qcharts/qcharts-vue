## Donut Chart 环图

:::demo

```html
<template>
  <q-chart :data="pieData" :data-fields="dataFields">
    <q-pie :attrs="attrs" />
    <q-legend :attrs="legendAttrs" />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          radius: 0.6,
          innerRadius: 0.4
        },
        pieData: [
          {
            year: '2001',
            population: 41.8
          },
          {
            year: '2002',
            population: 38
          },
          {
            year: '2003',
            population: 33.7
          },
          {
            year: '2004',
            population: 30.7
          },
          {
            year: '2005',
            population: 25.8
          },
          {
            year: '2006',
            population: 31.7
          },
          {
            year: '2007',
            population: 33
          },
          {
            year: '2008',
            population: 46
          },
          {
            year: '2009',
            population: 38.3
          },
          {
            year: '2010',
            population: 28
          }
        ],
        dataFields: { row: 'year', value: 'population' },
        legendAttrs: { orient: 'vertical', align: ['right', 'center'] }
      }
    }
  }
</script>
```

:::
