## Nested Pie Chart 嵌套饼图

:::demo

```html
<template>
  <q-chart :data="pieData" :data-fields="dataFields">
    <q-pie :attrs="attrs" :rows="rows" />
    <q-pie :attrs="attrs2" :rows="rows2" />
    <q-legend />
  </q-chart>
</template>
<script>
  const { theme } = qcharts
  const data = [
    { value: 204, name: '图例一' },
    { value: 451, name: '图例二' },
    { value: 347, name: '图例三' },
    { value: 256, name: '图例四' },

    { value: 2790, name: '图例1' },
    { value: 2548, name: '图例2' },
    { value: 1350, name: '图例3' },
    { value: 3100, name: '图例4' },
    { value: 2340, name: '图例5' },
    { value: 1350, name: '图例6' },
    { value: 2450, name: '图例7' },
    { value: 1550, name: '图例8' },
    { value: 3450, name: '图例9' },
    { value: 2750, name: '图例10' }
  ]
  const colors1 = ['#5982F6', '#59CB74', '#DA65CC', '#FC6980']
  const colors2 = [
    '#47A1FF',
    '#6CD3FF',
    '#A2E5FF',
    '#4DCCCB',
    '#3FDDC7',
    '#ADDF84',
    '#FBD54A',
    '#FFB952',
    '#F79452',
    '#E37474'
  ]
  const colors = colors1.concat(colors2)
  theme.set({ colors })
  export default {
    data: function() {
      return {
        pieData: data,
        attrs: { radius: 0.4 },
        pieColor: colors1,
        rows: data.slice(0, 4).map(d => d.name),
        attrs2: {
          innerRadius: 0.5,
          radius: 0.7
        },
        pieColor2: colors2,
        rows2: data.slice(4).map(d => d.name),
        dataFields: { row: 'name', value: 'value' },
        legendAttrs: { orient: 'vertical', align: ['right', 'center'] },
        textStyle: attrs => ({ color: '#fff', text: attrs.name })
      }
    }
  }
</script>
```

:::
