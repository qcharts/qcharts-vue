## 刻度

:::demo

```html
<template>
  <q-chart>
    <q-gauge :attrs="attrs" :css-title="{fontSize: 36}" />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          min: 0,
          max: 10,
          tickStep: 1,
          tickLength: -10,
          percent: 7.3
        }
      }
    }
  }
</script>
```

:::

## 刻度上文字

:::demo

```html
<template>
  <q-chart >
    <q-gauge :attrs="attrs" :css-title="{fontSize:36}" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          min: 0,
          max: 10,
          percent:7.3,
          tickStep: 1,
          tickLength: 10,
          labelOffset: 20,
        }
      }
    }
  }
</script>
```

:::
