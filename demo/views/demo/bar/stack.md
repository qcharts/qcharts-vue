## 堆叠图

:::demo

```html
<template>
  <q-chart :data="data" :data-fields="dataFields">
    <q-bar :attrs="attrs" />
    <q-axis :attrs="{orient:'left'}" :css-grid="false" />
    <q-axis :attrs="{orient:'bottom'}" />
    <q-legend />
    <q-tooltip />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          transpose: true,
          stack: true,
          barWidth: 20
        },
        data: [
          {
            data: '05-12',
            type: '图例一',
            value: 11
          },
          {
            data: '05-12',
            type: '图例二',
            value: 12.2
          },
          {
            data: '05-13',
            type: '图例一',
            value: 28
          },
          {
            data: '05-13',
            type: '图例二',
            value: 31
          },
          {
            data: '05-14',
            type: '图例一',
            value: 36
          },
          {
            data: '05-14',
            type: '图例二',
            value: 18
          },
          {
            data: '05-15',
            type: '图例一',
            value: 58
          },
          {
            data: '05-15',
            type: '图例二',
            value: 30.2
          },
          {
            data: '05-16',
            type: '图例一',
            value: 86.2
          },
          {
            data: '05-16',
            type: '图例二',
            value: 41.2
          },
          {
            data: '05-17',
            type: '图例一',
            value: 71.2
          },
          {
            data: '05-17',
            type: '图例二',
            value: 45.2
          },
          {
            data: '05-18',
            type: '图例一',
            value: 41.2
          },
          {
            data: '05-18',
            type: '图例二',
            value: 22.2
          },
          {
            data: '05-19',
            type: '图例一',
            value: 16.2
          },
          {
            data: '05-19',
            type: '图例二',
            value: 20.2
          }
        ],
        dataFields: { row: 'type', value: 'value', text: 'data' }
      }
    }
  }
</script>
```

:::
