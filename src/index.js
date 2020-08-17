import Chart from './components'
import { bus } from './utils'
import global from './global.js'
import pluginNode from './components/pluginNode'
import visualNode from './components/visualNode'
import qcharts from '@qcharts/core'
const BlackList = [
  'h',
  'version',
  'BaseVisual',
  'BasePlugin',
  'Chart',
  'Dataset',
  'Global',
  'Axis',
  'Tooltip',
  'Legend'
]
const visualsNames = Object.keys(qcharts).filter(t => BlackList.indexOf(t) < 0)
const pluginsNames = ['Axis', 'Tooltip', 'Legend']
const components = [
  { name: 'Chart', component: Chart },
  ...visualsNames.map(name => ({
    name,
    component: visualNode(name)
  })),
  ...pluginsNames.map(name => ({
    name,
    component: pluginNode(name)
  }))
]

// eslint-disable-next-line no-undef
const version = require('../package.json').version
// 整体插件机制
const QchartsVue = {
  version: version,
  install: Vue => {
    components.map(k => {
      let name = k.name.replace(k.name[0], k.name[0].toLocaleLowerCase())
      Vue.component(`q-${name}`, k.component)
    })
    const Bus = new Vue({
      methods: {
        emit(event, ...args) {
          this.$emit(event, ...args)
        },
        on(event, callback) {
          this.$on(event, callback)
        },
        off(event, callback) {
          this.$off(event, callback)
        }
      }
    })
    Vue.prototype[bus] = Bus //事件总线放在原型上
    Vue.prototype.global = global
  }
}

export default QchartsVue
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(QchartsVue)
}
