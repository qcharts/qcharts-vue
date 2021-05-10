(window.webpackJsonpQchartsVue=window.webpackJsonpQchartsVue||[]).push([[21],{126:function(s,a,t){"use strict";t.r(a);var n={components:{}},r=t(0),p=Object(r.a)(n,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("弧饼图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"<template>\n  <q-chart :data=\"pieData\" :data-fields=\"dataFields\">\n    <q-pie :attrs=\"attrs\" />\n    <q-legend />\n  </q-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        attrs: {\n          radius: 0.6,\n          innerRadius: 0.1,\n          startAngle: 180,\n          endAngle: 360\n        },\n        pieData: [\n          {\n            type: '污染源',\n            count: 4454\n          },\n\n          {\n            type: '消防场所',\n            count: 1239\n          },\n\n          {\n            type: '安全生产',\n            count: 3758\n          },\n\n          {\n            type: '治安场所',\n            count: 4300\n          }\n        ],\n        dataFields: { row: 'type', value: 'count' }\n      }\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-chart")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"pieData"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data-fields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-pie")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-legend")]),s._v(" />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-chart")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.6")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("startAngle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("180")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("endAngle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("360")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pieData")]),s._v(": [\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'污染源'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4454")]),s._v("\n          },\n\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'消防场所'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1239")]),s._v("\n          },\n\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'安全生产'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3758")]),s._v("\n          },\n\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'治安场所'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4300")]),s._v("\n          }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'type'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'count'")]),s._v(" }\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],1)}),[],!1,null,null,null);a.default=p.exports}}]);