## 定义样式

:::demo

```html
<template>
  <q-chart :data="data" :data-fields="dataFields">
    <q-funnel :attrs="rightAttrs" />
    <q-funnel :attrs="leftAttrs" />
    <q-tooltip />
    <q-legend />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        leftAttrs: {
          clientRect: {
            left: '50%',
            top: '20%',
            width: '25%',
            height: '70%'
          },
          align: 'left',
          pyramid: true
        },
        rightAttrs: {
          clientRect: {
            left: '22%',
            top: '20%',
            width: '25%',
            height: '70%'
          },
          align: 'right',
          pyramid: true
        },
        data: [
          { value: 3350, label: '直接访问' },
          { value: 3000, label: '邮件营销' },
          { value: 2440, label: '联盟广告' },
          { value: 1648, label: '搜索引擎' },
          { value: 1550, label: '视频广告' }
        ],

        dataFields: {
          row: 'label',
          col: 'value',
          value: 'value',
          text: 'label'
        }
      }
    }
  }
</script>
```

:::
