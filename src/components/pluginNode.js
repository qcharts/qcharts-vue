import qcharts from '@qcharts/core'
import { bus } from '../utils'
export default function(name) {
  return {
    render() {
      null
    },
    props: {
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
        Object.keys(this.$attrs).forEach(element => {
          if (element.indexOf('style-') === -1) {
            return
          }
          this.plugin.style(element.substr(6), this.$attrs[element])
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
