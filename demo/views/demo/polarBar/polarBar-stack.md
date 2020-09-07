## 堆叠柱状图

:::demo

```html
<template>
  <q-chart :data="barData" :data-fields="dataFields">
    <q-polarBar :attrs="attrs" />
    <q-tooltip />
    <q-legend :attrs="{align: ['center', 'bottom']}" />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          stack: true,
          radius: 0.8,
          groupPadAngle: 10
        },
        barData: [
          {
            product: '05-08',
            year: '图例一',
            sales: 30
          },
          {
            product: '05-08',
            year: '图例二',
            sales: 15
          },
          {
            product: '05-08',
            year: '图例三',
            sales: 20
          },
          {
            product: '05-09',
            year: '图例一',
            sales: 30
          },
          {
            product: '05-09',
            year: '图例二',
            sales: 17
          },
          {
            product: '05-09',
            year: '图例三',
            sales: 20
          },

          {
            product: '05-10',
            year: '图例一',
            sales: 17.57
          },
          {
            product: '05-10',
            year: '图例二',
            sales: 24
          },
          {
            product: '05-10',
            year: '图例三',
            sales: 37.54
          },

          {
            product: '05-11',
            year: '图例一',
            sales: 41
          },
          {
            product: '05-11',
            year: '图例二',
            sales: 28
          },
          {
            product: '05-11',
            year: '图例三',
            sales: 21
          },

          {
            product: '05-12',
            year: '图例一',
            sales: 14
          },
          {
            product: '05-12',
            year: '图例二',
            sales: 25
          },
          {
            product: '05-12',
            year: '图例三',
            sales: 35
          },

          {
            product: '05-13',
            year: '图例一',
            sales: 44
          },
          {
            product: '05-13',
            year: '图例二',
            sales: 25
          },
          {
            product: '05-13',
            year: '图例三',
            sales: 10
          },

          {
            product: '05-14',
            year: '图例一',
            sales: 25
          },
          {
            product: '05-14',
            year: '图例二',
            sales: 25
          },
          {
            product: '05-14',
            year: '图例三',
            sales: 10
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
