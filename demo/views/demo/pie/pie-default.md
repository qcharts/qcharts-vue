## Basic Pie Chart 基本饼图

:::demo

```html
<template>
  <s-chart :data="pieData" :data-fields="dataFields">
    <s-pie
      :attrs="attrs"
      :css-guideline="true"
      :css-guideText="true"
      :css-sector="{lineWidth: 1, strokeColor: '#fff'}"
    />
    <s-legend :attrs="legendAttrs" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          radius: 0.6
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
          },
          {
            year: '2011',
            population: 42.5
          },
          {
            year: '2012',
            population: 30.3
          },
          {
            year: '2013',
            population: 56
          },
          {
            year: '2014',
            population: 74
          },
          {
            year: '2015',
            population: 80
          },
          {
            year: '2016',
            population: 74
          },
          {
            year: '2017',
            population: 62
          },
          {
            year: '2018',
            population: 54
          },
          {
            year: '2019',
            population: 27
          },
          {
            year: '2020',
            population: 41
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
