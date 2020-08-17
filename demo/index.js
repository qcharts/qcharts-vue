import Vue from 'vue'
import * as Vuep from 'vuep'
import App from './App.vue'
import router from './router'
import BlockDemo from './components/BlockDemo.vue'
import QchartsVue from '../src/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'highlight.js/styles/xcode.css'

Vue.config.productionTip = false
Vue.use(QchartsVue)
Vue.use(
  Vuep,
  {
    mode: 'application/javascript',
    extraKeys: {
      'Ctrl-Space': 'autocomplete'
    },
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    lineNumbers: true,
    lineWrapping: false,
    theme: 'default'
  } /*, { codemirror options } */
)

Vue.component('block-demo', BlockDemo)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
