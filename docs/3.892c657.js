(window.webpackJsonpQchartsVue=window.webpackJsonpQchartsVue||[]).push([[3],{111:function(s,a,t){"use strict";t.r(a);var r={components:{}},l=t(0),e=Object(l.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Basic Area Chart 基础面积图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"<template>\n  <q-chart :data=\"data\" :data-fields=\"dataFields\">\n    <q-area />\n    <q-axis :attrs=\"{orient:'left'}\" :style-axis=\"false\" :style-scale=\"false\" />\n    <q-axis :attrs=\"{orient:'bottom'}\" :style-grid=\"false\" />\n    <q-legend />\n    <q-tooltip />\n  </q-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        data: [\n          { date: '05-01', category: '图例一', sales: 15.2 },\n          { date: '05-02', category: '图例一', sales: 39.2 },\n          { date: '05-03', category: '图例一', sales: 31.2 },\n          { date: '05-04', category: '图例一', sales: 65.2 },\n          { date: '05-05', category: '图例一', sales: 55.2 },\n          { date: '05-06', category: '图例一', sales: 75.2 },\n          { date: '05-07', category: '图例一', sales: 95.2 },\n          { date: '05-08', category: '图例一', sales: 65.2 }\n        ],\n        dataFields: { row: 'category', value: 'sales', text: 'date' }\n      }\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-chart")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data-fields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-area")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-axis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{orient:'left'}\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style-axis")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style-scale")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-axis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{orient:'bottom'}\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style-grid")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-legend")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-tooltip")]),s._v(" />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-chart")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-01'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-02'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("39.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-03'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-04'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("65.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-05'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("55.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-06'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("75.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-07'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("95.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-08'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("65.2")]),s._v(" }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'category'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sales'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'date'")]),s._v(" }\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);