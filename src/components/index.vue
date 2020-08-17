<template>
  <div class="q-charts">
    <slot></slot>
  </div>
</template>
<script>
import { Chart,theme } from '@qcharts/core'
import { bus } from '../utils'
export default {
  name: 'q-chart',
  props: {
    data: { type: Array, default: () => {} },
    dataFields: { type: Object, default: () => {} },
    theme:{
      type:Object,
      default:()=>{}
    }
  },
  data: () => {
    return {
      // chart: null,
      visuals: [],
      plugins: []
    }
  },
  watch: {
    data: {
      deep: true,
      handler(data) {
        this.chart.source(data, this.dataFields)
      }
    }
  },
  created: function() {
    this[bus].on('addVisuals', data => {
      this.visuals.push(data)
    })
    this[bus].on('addPlugins', data => {
      this.plugins.push(data)
    })
  },
  mounted() {
    let chart = new Chart({
      container: this.$el
    })
    let data = this.data ? [...this.data] : []
    let dataFields = this.dataFields ? { ...this.dataFields } : {}
    chart.source(data, dataFields)
    const dataset = chart.dataset
    // this.$listeners &&
    //   Object.keys(this.$listeners).forEach(event => {
    //     this.chart.on(`chart:${event}`, this.$listeners[event])
    //   })
    if(this.theme){
      theme.set(this.theme)
    }
    let visuals = []
    let datasets = []
    this.visuals.forEach(element => {
      if (element.rows) {
        let source = dataset.selectRows(element.rows);
        Object.freeze(source)
        element.visual.source(source)
        datasets.push(dataset.selectRows(element.rows))
      }
       visuals.push(element.visual)
    })
    let plugins = []
    this.plugins.forEach(element => {
      plugins.push(element)
    })
    chart.append([...visuals, ...plugins])
    this.chart = chart
  },
  methods: {
  }
}
</script>
<style>
.q-charts {
  position: relative;
  height: 100%;
}
</style>
