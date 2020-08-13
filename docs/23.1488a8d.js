(window.webpackJsonpqChartsVue=window.webpackJsonpqChartsVue||[]).push([[23],{152:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),l=Object(n.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Nested Pie Chart 嵌套饼图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"<template>\n  <q-chart :data=\"pieData\" :data-fields=\"dataFields\">\n    <q-pie\n      :attrs=\"attrs\"\n      :rows=\"rows1\"\n      :color=\"pieColor\"\n      :css-text=\"textStyle\"\n    />\n    <q-pie\n      :attrs=\"attrs2\"\n      :rows=\"rows2\"\n      :color=\"pieColor2\"\n      :css-guideline=\"true\"\n      :css-guideText=\"{fontSize: '12px'}\"\n    />\n    <q-legend\n      :color=\"legendColor\"\n      :attrs=\"legendAttrs\"\n      :css-icon=\"legendIconStyle\"\n      :css-text=\"legendTextStyle\"\n    />\n  </q-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        pieData: [\n          { value: 204, name: '图例一' },\n          { value: 451, name: '图例二' },\n          { value: 347, name: '图例三' },\n          { value: 256, name: '图例四' },\n\n          { value: 2790, name: '图例1' },\n          { value: 2548, name: '图例2' },\n          { value: 1350, name: '图例3' },\n          { value: 3100, name: '图例4' },\n          { value: 2340, name: '图例5' },\n          { value: 1350, name: '图例6' },\n          { value: 2450, name: '图例7' },\n          { value: 1550, name: '图例8' },\n          { value: 3450, name: '图例9' },\n          { value: 2750, name: '图例10' }\n        ],\n        attrs: { radius: 0.4, size: ['80%', '100%'], pos: [0, 0] },\n        rows1: ['图例一', '图例二', '图例三', '图例四'],\n        pieColor: ['#5982F6', '#59CB74', '#DA65CC', '#FC6980'],\n        attrs2: {\n          innerRadius: 0.5,\n          radius: 0.7,\n          size: ['80%', '100%'],\n          pos: [0, 0]\n        },\n        rows2: [\n          '图例1',\n          '图例2',\n          '图例3',\n          '图例4',\n          '图例5',\n          '图例6',\n          '图例7',\n          '图例8',\n          '图例9',\n          '图例10'\n        ],\n        pieColor2: [\n          '#47A1FF',\n          '#6CD3FF',\n          '#A2E5FF',\n          '#4DCCCB',\n          '#3FDDC7',\n          '#ADDF84',\n          '#FBD54A',\n          '#FFB952',\n          '#F79452',\n          '#E37474'\n        ],\n        dataFields: { row: 'name', value: 'value' },\n        legendColor: [\n          '#5982F6',\n          '#59CB74',\n          '#DA65CC',\n          '#FC6980',\n          '#47A1FF',\n          '#6CD3FF',\n          '#A2E5FF',\n          '#4DCCCB',\n          '#3FDDC7',\n          '#ADDF84',\n          '#FBD54A',\n          '#FFB952',\n          '#F79452',\n          '#E37474'\n        ],\n        legendAttrs: { orient: 'vertical', align: ['right', 'center'] },\n        textStyle: attrs => ({ color: '#fff', text: attrs.name }),\n        legendIconStyle: (attrs, d, i) => ({\n          marginTop: i > 0 ? 10 : 0\n        }),\n        legendTextStyle: (attrs, d, i) => ({\n          marginTop: i > 0 ? 10 : 0\n        })\n      }\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-chart")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"pieData"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data-fields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-pie")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rows1"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"pieColor"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-text")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"textStyle"')]),s._v("\n    />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-pie")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs2"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rows2"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"pieColor2"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-guideline")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-guideText")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{fontSize: '12px'}\"")]),s._v("\n    />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-legend")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"legendColor"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"legendAttrs"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-icon")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"legendIconStyle"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-text")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"legendTextStyle"')]),s._v("\n    />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("q-chart")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pieData")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("204")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("451")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("347")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("256")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例四'")]),s._v(" },\n\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2790")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例1'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2548")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例2'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1350")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例3'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3100")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例4'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2340")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例5'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1350")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例6'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2450")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例7'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1550")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例8'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3450")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例9'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2750")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例10'")]),s._v(" }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.4")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'80%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("], "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("] },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rows1")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例四'")]),s._v("],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pieColor")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#5982F6'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#59CB74'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#DA65CC'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FC6980'")]),s._v("],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs2")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.7")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'80%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("],\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rows2")]),s._v(": [\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例1'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例2'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例3'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例4'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例5'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例6'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例7'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例8'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例9'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例10'")]),s._v("\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pieColor2")]),s._v(": [\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#47A1FF'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#6CD3FF'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#A2E5FF'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#4DCCCB'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#3FDDC7'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#ADDF84'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FBD54A'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FFB952'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#F79452'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#E37474'")]),s._v("\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(" },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("legendColor")]),s._v(": [\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#5982F6'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#59CB74'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#DA65CC'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FC6980'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#47A1FF'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#6CD3FF'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#A2E5FF'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#4DCCCB'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#3FDDC7'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#ADDF84'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FBD54A'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FFB952'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#F79452'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#E37474'")]),s._v("\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("legendAttrs")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("] },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("textStyle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs")]),s._v(" =>")]),s._v(" ({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#fff'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": attrs.name }),\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("legendIconStyle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, d, i")]),s._v(") =>")]),s._v(" ({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("marginTop")]),s._v(": i > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n        }),\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("legendTextStyle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, d, i")]),s._v(") =>")]),s._v(" ({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("marginTop")]),s._v(": i > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n        })\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],1)}),[],!1,null,null,null);a.default=l.exports}}]);