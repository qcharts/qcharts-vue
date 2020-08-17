## 分组图

:::demo

```html
<template>
  <q-chart :data="groupData" :data-fields="dataFields">
    <q-bar :attrs="attrs" />
    <q-axis :attrs="{orient:'left'}" :style-grid="false" />
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
          barWidth: 12
        },
        groupData: [
          {
            product: '05-12',
            year: '图例一',
            sales: 3000
          },
          {
            product: '05-12',
            year: '图例二',
            sales: 3500
          },
          {
            product: '05-12',
            year: '图例三',
            sales: 2000
          },
          {
            product: '05-13',
            year: '图例一',
            sales: 5800
          },
          {
            product: '05-13',
            year: '图例二',
            sales: 4200
          },
          {
            product: '05-13',
            year: '图例三',
            sales: 2700
          },
          {
            product: '05-14',
            year: '图例一',
            sales: 2600
          },
          {
            product: '05-14',
            year: '图例二',
            sales: 1800
          },
          {
            product: '05-14',
            year: '图例三',
            sales: 3800
          },
          {
            product: '05-15',
            year: '图例一',
            sales: 3400
          },
          {
            product: '05-15',
            year: '图例二',
            sales: 5100
          },
          {
            product: '05-15',
            year: '图例三',
            sales: 4300
          },
          {
            product: '05-16',
            year: '图例一',
            sales: 3100
          },
          {
            product: '05-16',
            year: '图例二',
            sales: 3400
          },
          {
            product: '05-16',
            year: '图例三',
            sales: 2100
          }
        ],
        dataFields: {
          row: 'year',
          value: 'sales',
          text: 'product'
        }
      }
    }
  }
</script>
```

:::
