(window.webpackJsonpCatChartsVue=window.webpackJsonpCatChartsVue||[]).push([[49],{131:function(n,t,a){"use strict";a.r(t);var e={components:{}},l=a(0),o=Object(l.a)(e,function(){var n=this.$createElement,t=this._self._c||n;return t("section",[t("h2",[this._v("基础坐标轴")]),this._v(" "),t("block-demo",{attrs:{tip:"基础坐标",source:"<template>\n  <s-chart :data=\"lineData\" :data-fields=\"dataFields\">\n    <s-line :css-label=\"labelStyle\" :css-scale=\"scaleStyle\" />\n    <s-axis :attrs=\"{orient:'left'}\" />\n    <s-axis />\n  </s-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        lineData: [\n          { month: 'Jan', city: 'London', value: 3.9 },\n          { month: 'Feb', city: 'London', value: 4.2 },\n          { month: 'Mar', city: 'London', value: 5.7 },\n          { month: 'Apr', city: 'London', value: 8.5 },\n          { month: 'May', city: 'London', value: 11.9 },\n          { month: 'Jun', city: 'London', value: 15.2 }\n        ],\n        dataFields: { row: 'city', value: 'value', text: 'month' },\n        labelStyle:function(attrs,data,i){\n          if(i%2 === 0){\n              return false\n            }else{\n              if(data.text.indexOf('A')===0){\n                return {\n                  rotate:45,\n                  translate:[-5,-5],\n                  anchor:[0,0],\n                  color:'#00f'\n                }\n              }else{\n                return {color:'#f00'}\n              }\n            }\n        },\n        scaleStyle: function(attrs,data,i){\n          if(i%2 === 0){\n              return false\n            }\n        }\n      }\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[this._v("<template>\n  <s-chart :data=\"lineData\" :data-fields=\"dataFields\">\n    <s-line :css-label=\"labelStyle\" :css-scale=\"scaleStyle\" />\n    <s-axis :attrs=\"{orient:'left'}\" />\n    <s-axis />\n  </s-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        lineData: [\n          { month: 'Jan', city: 'London', value: 3.9 },\n          { month: 'Feb', city: 'London', value: 4.2 },\n          { month: 'Mar', city: 'London', value: 5.7 },\n          { month: 'Apr', city: 'London', value: 8.5 },\n          { month: 'May', city: 'London', value: 11.9 },\n          { month: 'Jun', city: 'London', value: 15.2 }\n        ],\n        dataFields: { row: 'city', value: 'value', text: 'month' },\n        labelStyle:function(attrs,data,i){\n          if(i%2 === 0){\n              return false\n            }else{\n              if(data.text.indexOf('A')===0){\n                return {\n                  rotate:45,\n                  translate:[-5,-5],\n                  anchor:[0,0],\n                  color:'#00f'\n                }\n              }else{\n                return {color:'#f00'}\n              }\n            }\n        },\n        scaleStyle: function(attrs,data,i){\n          if(i%2 === 0){\n              return false\n            }\n        }\n      }\n    }\n  }\n<\/script>\n")])])])],1)},[],!1,null,null,null);t.default=o.exports}}]);