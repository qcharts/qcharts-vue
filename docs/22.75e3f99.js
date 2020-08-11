(window.webpackJsonpCatChartsVue=window.webpackJsonpCatChartsVue||[]).push([[22],{142:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),p=Object(n.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Basic Pie Chart 基本饼图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"<template>\n  <s-chart :data=\"pieData\" :data-fields=\"dataFields\">\n    <s-pie\n      :attrs=\"attrs\"\n      :css-guideline=\"true\"\n      :css-guideText=\"true\"\n      :css-sector=\"{lineWidth: 1, strokeColor: '#fff'}\"\n    />\n    <s-legend :attrs=\"legendAttrs\" />\n  </s-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        attrs: {\n          radius: 0.6\n        },\n        pieData: [\n          {\n            year: '2001',\n            population: 41.8\n          },\n          {\n            year: '2002',\n            population: 38\n          },\n          {\n            year: '2003',\n            population: 33.7\n          },\n          {\n            year: '2004',\n            population: 30.7\n          },\n          {\n            year: '2005',\n            population: 25.8\n          },\n          {\n            year: '2006',\n            population: 31.7\n          },\n          {\n            year: '2007',\n            population: 33\n          },\n          {\n            year: '2008',\n            population: 46\n          },\n          {\n            year: '2009',\n            population: 38.3\n          },\n          {\n            year: '2010',\n            population: 28\n          },\n          {\n            year: '2011',\n            population: 42.5\n          },\n          {\n            year: '2012',\n            population: 30.3\n          },\n          {\n            year: '2013',\n            population: 56\n          },\n          {\n            year: '2014',\n            population: 74\n          },\n          {\n            year: '2015',\n            population: 80\n          },\n          {\n            year: '2016',\n            population: 74\n          },\n          {\n            year: '2017',\n            population: 62\n          },\n          {\n            year: '2018',\n            population: 54\n          },\n          {\n            year: '2019',\n            population: 27\n          },\n          {\n            year: '2020',\n            population: 41\n          }\n        ],\n        dataFields: { row: 'year', value: 'population' },\n        legendAttrs: { orient: 'vertical', align: ['right', 'center'] }\n      }\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"pieData"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data-fields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-pie")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-guideline")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-guideText")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-sector")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{lineWidth: 1, strokeColor: '#fff'}\"")]),s._v("\n    />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-legend")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"legendAttrs"')]),s._v(" />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.6")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pieData")]),s._v(": [\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2001'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("41.8")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2002'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2003'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.7")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2004'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.7")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2005'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25.8")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2006'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.7")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2007'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2008'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("46")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2009'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38.3")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2010'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("28")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2011'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("42.5")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2012'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.3")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2013'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("56")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2014'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("74")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2015'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2016'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("74")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2017'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("62")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2018'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("54")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2019'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("27")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2020'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("41")]),s._v("\n          }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'year'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'population'")]),s._v(" },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("legendAttrs")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("] }\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],1)}),[],!1,null,null,null);a.default=p.exports}}]);