import qcharts from '@qcharts/core'
import { bus } from '../utils'
export default function(name) {
  return {
    render() {
      null
    },
    props: {
      color: { type: Array, default: () => [] },
      attrs: { type: Object, default: () => {} }
    },
    data: () => {
      return {
        plugin: null
      }
    },
    created: function() {
      if (name) {
        if (this.attrs && this.attrs.target) {
          for (let key of this.global.renderedVisuals.keys()) {
            if (key === this.attrs.target) {
              this.attrs.target = this.global.renderedVisuals.get(key)
              break
            }
          }
        }
        const Plug = qcharts[name]

        this.plugin = new Plug(this.attrs)
        // this.plugin.color(this.color)
        Object.keys(this.$attrs).forEach(element => {
          if (element.indexOf('css-') === -1) {
            return
          }
          this.plugin.style(element.substr(4), this.$attrs[element])
        })
        this.$vnode.componentOptions.listeners &&
          Object.keys(this.$vnode.componentOptions.listeners).forEach(
            element => {
              this.plugin.on(
                element,
                this.$vnode.componentOptions.listeners[element]
              )
            }
          )
        this[bus].emit('addPlugins', this.plugin)
      }
    }
  }
}
