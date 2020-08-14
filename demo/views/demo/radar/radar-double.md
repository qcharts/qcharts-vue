## 双色雷达图

:::demo

```html
<template>
  <q-chart :data="radarData" :data-fields="dataFields">
    <q-radar
      :css-point="false"
      :css-section="{opacity:0.3}"
      :css-point="pointStyle"
    />
    <q-legend :attrs="{align: ['center', 'bottom']}" />
  </q-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        radarData: [
          { label: '分类一', category: '类别一', value: 19 },
          { label: '分类二', category: '类别一', value: 74 },
          { label: '分类三', category: '类别一', value: 40 },
          { label: '分类四', category: '类别一', value: 46 },
          { label: '分类五', category: '类别一', value: 30 },
          { label: '分类六', category: '类别一', value: 62 },

          { label: '分类一', category: '类别二', value: 69 },
          { label: '分类二', category: '类别二', value: 14 },
          { label: '分类三', category: '类别二', value: 70 },
          { label: '分类四', category: '类别二', value: 26 },
          { label: '分类五', category: '类别二', value: 50 },
          { label: '分类六', category: '类别二', value: 52 }
        ],
        dataFields: { row: 'category', value: 'value', text: 'label' },
        pointStyle: d => ({
          d:
            'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z',
          normalize: true,
          fillColor: '#f37',
          lineWidth: 20,
          scale: 0.05,
          pointType: 'path'
        })
      }
    }
  }
</script>
```

:::
