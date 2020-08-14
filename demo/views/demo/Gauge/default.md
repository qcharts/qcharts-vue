## Basic Gauge 仪表盘

:::demo

```html
<template>
  <q-chart>
    <q-gauge :attrs="attrs" :css-title="{fontSize:36}" />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          min: 0,
          max: 100,
          percent: 60,
          lineWidth: 20,
          tickStep: 10
        }
      }
    },
    mounted() {
      setTimeout(() => {
        this.attrs = {
          min: 0,
          max: 100,
          percent: 45,
          lineWidth: 20,
          tickStep: 10
        }
      }, 3000)
    }
  }
</script>
```

:::
