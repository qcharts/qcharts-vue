(window.webpackJsonpQchartsVue=window.webpackJsonpQchartsVue||[]).push([[15],{150:function(s,t,a){"use strict";a.r(t);var n={components:{}},r=a(0),e=Object(r.a)(n,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("Basic Gauge 仪表盘")]),s._v(" "),a("block-demo",{attrs:{tip:"",source:'<template>\n  <q-chart>\n    <q-gauge :attrs="attrs" :style-title="{fontSize:36}" />\n  </q-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        attrs: {\n          min: 0,\n          max: 100,\n          percent: 60,\n          lineWidth: 20,\n          tickStep: 10\n        }\n      }\n    },\n    mounted() {\n      setTimeout(() => {\n        this.attrs = {\n          min: 0,\n          max: 100,\n          percent: 45,\n          lineWidth: 20,\n          tickStep: 10\n        }\n      }, 3000)\n    }\n  }\n<\/script>\n'}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-chart")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-gauge")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style-title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"{fontSize:36}"')]),s._v(" />")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-chart")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tickStep")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("\n        }\n      }\n    },\n    mounted() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("setTimeout")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".attrs = {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tickStep")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("\n        }\n      }, "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(")\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);