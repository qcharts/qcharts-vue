## Nightingle Rose Chart 南丁格尔玫瑰图

:::demo

```html
<template>
  <q-chart :data="pieData" :data-fields="dataFields">
    <q-pie
      :attrs="attrs"
      :style-guideline="true"
      :style-guideText="true"
      :style-sector="{lineWidth: 1, strokeColor: '#fff'}"
    />
    <q-legend
      :attrs="legendAttrs"
      :style-icon="iconStyle"
      :style-text="textStyle"
    />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          radius: 0.8,
          rose: true
        },
        pieData: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 280, name: '联盟广告' },
          { value: 254, name: '视频广告' },
          { value: 200, name: '搜索引擎' }
        ],
        dataFields: { row: 'name', value: 'value' },
        legendAttrs: { orient: 'vertical', align: ['right', 'center'] },
        iconStyle: (attrs, d, i) => ({
          borderRadius: 10,
          marginTop: i > 0 ? 15 : 0
        }),
        textStyle: (attrs, d, i) => ({ marginTop: i > 0 ? 15 : 0 })
      }
    }
  }
</script>
```

:::
