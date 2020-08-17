## 基础雷达图

:::demo

```html
<template>
  <q-chart :data="radarData" :data-fields="dataFields">
    <q-radar
      :style-section="{opacity:0.3}"
      :style-section:hover="{opacity: 0.8,lineWidth:2,strokeColor:'red'}"
    />
    <q-tooltip />
    <q-legend />
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
        dataFields: { row: 'category', value: 'value', text: 'label' }
      }
    }
  }
</script>
```

:::
