## 基础柱状图

:::demo

```html
<template>
  <q-chart :data="barData" :data-fields="dataFields">
    <q-polarBar :attrs="attrs" />
    <q-tooltip />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          innerRadius: 0.1,
          radius: 0.8
        },
        barData: [
          { value: 6100, label: 'TOP1' },
          { value: 5200, label: 'TOP2' },
          { value: 4400, label: 'TOP3' },
          { value: 3700, label: 'TOP4' },
          { value: 2800, label: 'TOP5' },
          { value: 3000, label: 'TOP6' },
          { value: 5300, label: 'TOP7' },
          { value: 3400, label: 'TOP8' }
        ],
        dataFields: { value: 'value', text: 'label' }
      }
    }
  }
</script>
```

:::
