## 基础条形图

:::demo

```html
<template>
  <q-chart :data="data" :data-fields="dataFields">
    <q-bar :attrs="{transpose:true}" />
    <q-axis :attrs="{orient:'left'}" :style-grid="false" />
    <q-axis :attrs="{orient:'bottom'}" />
    <q-tooltip />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          transpose: true,
          barWidth: 18
        },
        data: [
          { value: 6100, label: 'TOP1' },
          { value: 5200, label: 'TOP2' },
          { value: 4400, label: 'TOP3' },
          { value: 3700, label: 'TOP4' },
          { value: 2800, label: 'TOP5' },
          { value: 2000, label: 'TOP6' },
          { value: 1300, label: 'TOP7' },
          { value: 400, label: 'TOP8' }
        ],
        dataFields: { row: '*', value: 'value', text: 'label' }
      }
    }
  }
</script>
```

:::
