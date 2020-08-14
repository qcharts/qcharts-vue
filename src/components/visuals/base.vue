<template></template>
<script>
import {
  Bar,
  Pie,
  Line,
  Radar,
  Area,
  Funnel,
  Gauge,
  Scatter,
  PolarBar
} from '@qcharts/core'
import { bus } from '../../utils'
// import global from '../global.vue'
const visualObject = {
  'q-line': Line,
  'q-bar': Bar,
  'q-pie': Pie,
  'q-radar': Radar,
  'q-area': Area,
  'q-funnel': Funnel,
  'q-scatter': Scatter,
  'q-gauge': Gauge,
  'q-polarBar': PolarBar
}
/**
 * 所有组件的基类
 * 用于定义通用props, methods 等属性
 */
export default {
  props: {
    color: { type: Array, default: () => [] },
    rows: { type: String | Array, default: null },
    attrs: { type: Object, default: () => {} },
    name: { type: String, default: '' }
  },
  data: () => {
    return {
      visual: null
    }
  },
  created: function() {
    if (
      this.$vnode.componentOptions.tag &&
      visualObject[this.$vnode.componentOptions.tag]
    ) {
      const Shape = visualObject[this.$vnode.componentOptions.tag]

      this.visual = new Shape(this.attrs)
      // this.id && this.visual.id=1
      // this.visual.color(this.color)
      Object.keys(this.$attrs).forEach(element => {
        if (element.indexOf('css-') === -1) {
          return
        }
        this.visual.style(element.substr(4), this.$attrs[element])
      })
      this.$vnode.componentOptions.listeners &&
        Object.keys(this.$vnode.componentOptions.listeners).forEach(element => {
          this.visual.on(
            element,
            this.$vnode.componentOptions.listeners[element]
          )
        })

      this.name && this.global.renderedVisuals.set(this.name, this.visual)
      this[bus].emit('addVisuals', { visual: this.visual, rows: this.rows })
    }
  }
}
</script>
