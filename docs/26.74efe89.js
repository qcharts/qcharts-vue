(window.webpackJsonpqChartsVue=window.webpackJsonpqChartsVue||[]).push([[26],{138:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),l=Object(n.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("分组柱状图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"<template>\n  <q-chart :data=\"barData\" :data-fields=\"dataFields\">\n    <q-polarBar :attrs=\"attrs\" />\n    <q-tooltip />\n    <q-legend :attrs=\"{align: ['center', 'bottom']}\" />\n  </q-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        attrs: {\n          innerRadius: 0.3,\n          radius: 0.7,\n          groupPadAngle: Math.PI * 0.2\n        },\n        barData: [\n          {\n            product: '05-08',\n            year: '图例一',\n            sales: 3000\n          },\n          {\n            product: '05-08',\n            year: '图例二',\n            sales: 1000\n          },\n          {\n            product: '05-08',\n            year: '图例三',\n            sales: 2000\n          },\n          {\n            product: '05-09',\n            year: '图例一',\n            sales: 3000\n          },\n          {\n            product: '05-09',\n            year: '图例二',\n            sales: 1000\n          },\n          {\n            product: '05-09',\n            year: '图例三',\n            sales: 2000\n          },\n\n          {\n            product: '05-10',\n            year: '图例一',\n            sales: 1700\n          },\n          {\n            product: '05-10',\n            year: '图例二',\n            sales: 2400\n          },\n          {\n            product: '05-10',\n            year: '图例三',\n            sales: 3700\n          },\n\n          {\n            product: '05-11',\n            year: '图例一',\n            sales: 4200\n          },\n          {\n            product: '05-11',\n            year: '图例二',\n            sales: 2800\n          },\n          {\n            product: '05-11',\n            year: '图例三',\n            sales: 3100\n          },\n\n          {\n            product: '05-12',\n            year: '图例一',\n            sales: 5100\n          },\n          {\n            product: '05-12',\n            year: '图例二',\n            sales: 2500\n          },\n          {\n            product: '05-12',\n            year: '图例三',\n            sales: 350\n          }\n        ],\n        dataFields: {\n          row: 'year',\n          value: 'sales',\n          text: 'product'\n        }\n      }\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-chart")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"barData"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data-fields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-polarBar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-tooltip")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-legend")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{align: ['center', 'bottom']}\"")]),s._v(" />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-chart")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.3")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.7")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("groupPadAngle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".PI * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.2")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("barData")]),s._v(": [\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-08'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-08'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-08'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2000")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-09'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-09'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-09'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2000")]),s._v("\n          },\n\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-10'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1700")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-10'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2400")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-10'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3700")]),s._v("\n          },\n\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-11'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4200")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-11'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2800")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-11'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3100")]),s._v("\n          },\n\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-12'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5100")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-12'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2500")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-12'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("350")]),s._v("\n          }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'year'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sales'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'product'")]),s._v("\n        }\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],1)}),[],!1,null,null,null);a.default=l.exports}}]);