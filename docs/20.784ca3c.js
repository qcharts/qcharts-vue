(window.webpackJsonpQchartsVue=window.webpackJsonpQchartsVue||[]).push([[20],{134:function(s,a,t){"use strict";t.r(a);var r={components:{}},l=t(0),n=Object(l.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Curve Line Chart 曲线折线图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"<template>\n  <q-chart :data=\"lineData\" :data-fields=\"dataFields\">\n    <q-line :style-line=\"lineStyle\" />\n    <q-axis :attrs=\"{orient:'left'}\" :style-axis=\"false\" :style-scale=\"false\" />\n    <q-axis :attrs=\"{orient:'bottom'}\" :style-grid=\"false\" />\n    <q-legend />\n    <q-tooltip />\n  </q-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        lineData: [\n          { date: '05-01', catgory: '图例一', sales: 15.2 },\n          { date: '05-02', catgory: '图例一', sales: 39.2 },\n          { date: '05-03', catgory: '图例一', sales: 51.2 },\n          { date: '05-04', catgory: '图例一', sales: 65.2 },\n          { date: '05-05', catgory: '图例一', sales: 55.2 },\n          { date: '05-06', catgory: '图例一', sales: 75.2 },\n          { date: '05-07', catgory: '图例一', sales: 85.2 },\n          { date: '05-08', catgory: '图例一', sales: 65.2 },\n          { date: '05-01', catgory: '图例二', sales: 20.2 },\n          { date: '05-02', catgory: '图例二', sales: 49.2 },\n          { date: '05-03', catgory: '图例二', sales: 57.2 },\n          { date: '05-04', catgory: '图例二', sales: 55.2 },\n          { date: '05-05', catgory: '图例二', sales: 75.2 },\n          { date: '05-06', catgory: '图例二', sales: 95.2 },\n          { date: '05-07', catgory: '图例二', sales: 90.2 },\n          { date: '05-08', catgory: '图例二', sales: 85.2 }\n        ],\n        dataFields: {\n          row: 'catgory',\n          value: 'sales',\n          text: 'date'\n        },\n        lineStyle: function(attrs, data, i) {\n          if (i === 1) {\n            return { smooth: true }\n          }\n        }\n      }\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-chart")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"lineData"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data-fields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-line")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style-line")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"lineStyle"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-axis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{orient:'left'}\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style-axis")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style-scale")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-axis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{orient:'bottom'}\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style-grid")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-legend")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-tooltip")]),s._v(" />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-chart")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineData")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-01'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-02'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("39.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-03'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("51.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-04'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("65.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-05'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("55.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-06'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("75.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-07'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-08'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("65.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-01'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-02'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("49.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-03'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("57.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-04'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("55.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-05'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("75.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-06'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("95.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-07'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("90.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-08'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("catgory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85.2")]),s._v(" }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'catgory'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sales'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'date'")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineStyle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, data, i")]),s._v(") ")]),s._v("{\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (i === "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(") {\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("smooth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(" }\n          }\n        }\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);