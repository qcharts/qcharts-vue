(window.webpackJsonpQchartsVue=window.webpackJsonpQchartsVue||[]).push([[49],{138:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),l=Object(n.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("基础坐标轴")]),s._v(" "),t("block-demo",{attrs:{tip:"基础坐标",source:"<template>\n  <s-chart :data=\"lineData\" :data-fields=\"dataFields\">\n    <s-line :style-label=\"labelStyle\" :style-scale=\"scaleStyle\" />\n    <s-axis :attrs=\"{orient:'left'}\" />\n    <s-axis />\n  </s-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        lineData: [\n          { month: 'Jan', city: 'London', value: 3.9 },\n          { month: 'Feb', city: 'London', value: 4.2 },\n          { month: 'Mar', city: 'London', value: 5.7 },\n          { month: 'Apr', city: 'London', value: 8.5 },\n          { month: 'May', city: 'London', value: 11.9 },\n          { month: 'Jun', city: 'London', value: 15.2 }\n        ],\n        dataFields: { row: 'city', value: 'value', text: 'month' },\n        labelStyle:function(attrs,data,i){\n          if(i%2 === 0){\n              return false\n            }else{\n              if(data.text.indexOf('A')===0){\n                return {\n                  rotate:45,\n                  translate:[-5,-5],\n                  anchor:[0,0],\n                  color:'#00f'\n                }\n              }else{\n                return {color:'#f00'}\n              }\n            }\n        },\n        scaleStyle: function(attrs,data,i){\n          if(i%2 === 0){\n              return false\n            }\n        }\n      }\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("<template>\n  "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"lineData"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data-fields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-line")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style-label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"labelStyle"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style-scale")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"scaleStyle"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-axis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{orient:'left'}\"")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-axis")]),s._v(" />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")])]),s._v("\n</template>\n"),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineData")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jan'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3.9")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Feb'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Mar'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5.7")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Apr'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8.5")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'May'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("11.9")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jun'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15.2")]),s._v(" }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'city'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'month'")]),s._v(" },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("labelStyle")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs,data,i")]),s._v(")")]),s._v("{\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(i%"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(" === "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("){\n              "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n            }"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v("{\n              "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(data.text.indexOf("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'A'")]),s._v(")==="),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("){\n                "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rotate")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v(",\n                  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("translate")]),s._v(":[-"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(",-"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("],\n                  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("anchor")]),s._v(":["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("],\n                  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#00f'")]),s._v("\n                }\n              }"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v("{\n                "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#f00'")]),s._v("}\n              }\n            }\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scaleStyle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs,data,i")]),s._v(")")]),s._v("{\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(i%"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(" === "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("){\n              "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n            }\n        }\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")])]),s._v("\n")])])])],1)}),[],!1,null,null,null);a.default=l.exports}}]);