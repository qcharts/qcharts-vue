<template>
  <div class="q-charts">
    <slot></slot>
  </div>
</template>
<script>
import { Chart } from '@qcharts/core'
import { bus } from '../../utils'
export default {
  name: 'q-chart',
  props: {
    data: { type: Array, default: () => {} },
    dataFields: { type: Object, default: () => {} }
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
    let data = [...this.data]
    let dataFields = { ...this.dataFields }
    chart.source(data, dataFields)
    // debugger
    // this.$listeners &&
    //   Object.keys(this.$listeners).forEach(event => {
    //     this.chart.on(`chart:${event}`, this.$listeners[event])
    //   })
    // this.chart = chart
    let visual = []
    this.visuals.forEach(element => {
      element.rows &&
        element.visual.source(this.chart.dataset.selectRows(element.rows))
      visual.push(element.visual)
    })
    let plug = []
    this.plugins.forEach(element => {
      plug.push(element)
    })
    chart.append([...visual, ...plug])
    this.chart = chart
    // this.chart.render()
  },
  methods: {
    // append(element) {
    //   this.chart.$group.append(element)
    // }
  }
}
</script>
<style>
.q-charts {
  position: relative;
  height: 100%;
}
</style>
