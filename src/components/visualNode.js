import qcharts from '@qcharts/core'
import { bus } from '../utils'
export default function(name) {
  return {
    render() {
      null
    },
    props: {
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
      if (name) {
        const Shape = qcharts[name]
        this.visual = new Shape(this.attrs)
        Object.keys(this.$attrs).forEach(element => {
          let curAttr = this.$attrs[element]
          if (element.indexOf('theme') === 0) {
            this.visual.theme.set(curAttr)
          }
          if (element.indexOf('style-') !== -1) {
            this.visual.style(element.substr(6), curAttr)
          }
        })
        this.$vnode.componentOptions.listeners &&
          Object.keys(this.$vnode.componentOptions.listeners).forEach(
            element => {
              this.visual.on(
                element,
                this.$vnode.componentOptions.listeners[element]
              )
            }
          )

        this.name && this.global.renderedVisuals.set(this.name, this.visual)
        this[bus].emit('addVisuals', { visual: this.visual, rows: this.rows })
      }
    }
  }
}
