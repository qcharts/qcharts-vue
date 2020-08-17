## 基础柱状图

:::demo

```html
<template>
  <q-chart :data="barData" :data-fields="dataFields">
    <q-bar />
    <q-axis :attrs="{orient:'left'}" :style-axis="false" :style-scale="false" />
    <q-axis :attrs="{orient:'bottom'}" :style-grid="false" />
    <q-tooltip />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        barData: [
          { value: 22, label: '05-01' },
          { value: 60, label: '05-02' },
          { value: 56, label: '05-03' },
          { value: 85, label: '05-04' },
          { value: 136, label: '05-05' },
          { value: 108, label: '05-06' },
          { value: 64, label: '05-07' },
          { value: 35, label: '05-08' }
        ],
        dataFields: { value: 'value', text: 'label' }
      }
    }
  }
</script>
```

:::
