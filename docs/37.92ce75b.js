;(window.webpackJsonpQchartsVue = window.webpackJsonpQchartsVue || []).push([
  [37],
  {
    105: function(s, a, t) {
      'use strict'
      t.r(a)
      var r = { components: {} },
        p = t(0),
        l = Object(p.a)(
          r,
          function() {
            var s = this.$createElement
            this._self._c
            return this._m(0)
          },
          [
            function() {
              var s = this,
                a = s.$createElement,
                t = s._self._c || a
              return t('section', [
                t('h2', [s._v('快速开始')]),
                s._v(' '),
                t('h3', [s._v('特点')]),
                s._v(' '),
                t('p', [
                  s._v('CatChartsVue 是一个基于 '),
                  t(
                    'a',
                    {
                      attrs: {
                        target: '_blank',
                        href: 'https://www.spritejs.com'
                      }
                    },
                    [s._v('spritejs')]
                  ),
                  s._v(' , '),
                  t(
                    'a',
                    {
                      attrs: {
                        target: '_blank',
                        href: 'https://www.npmjs.com/package/@qcharts/core'
                      }
                    },
                    [s._v('qcharts')]
                  ),
                  s._v(' 封装的 '),
                  t(
                    'a',
                    { attrs: { target: '_blank', href: 'https://vuejs.org/' } },
                    [s._v('Vue')]
                  ),
                  s._v(' 图表库，可以让用户以组件的形式组合出各种图表。 '),
                  t(
                    'a',
                    {
                      attrs: {
                        target: '_blank',
                        href: 'https://www.spritejs.com/qcharts-vue/'
                      }
                    },
                    [s._v('→ 详细文档')]
                  )
                ]),
                s._v(' '),
                t('h3', [s._v('如何使用')]),
                s._v(' '),
                t('p', [
                  s._v(
                    '1.通过 npm 获取 CatChartsVue，我们提供了 CatChartsVue npm 包，通过下面的命令即可完成安装，Demo：'
                  ),
                  t(
                    'a',
                    {
                      attrs: {
                        target: '_blank',
                        href: 'https://github.com/yaotaiyang/qcharts-vue-demo'
                      }
                    },
                    [s._v('Quickstart')]
                  )
                ]),
                s._v(' '),
                t('pre', { pre: !0 }, [
                  t(
                    'code',
                    {
                      pre: !0,
                      attrs: { 'v-pre': '', class: 'language-shell' }
                    },
                    [s._v('npm install q-charts-vue --save\n')]
                  )
                ]),
                s._v(' '),
                t('pre', { pre: !0 }, [
                  t(
                    'code',
                    {
                      pre: !0,
                      attrs: { 'v-pre': '', class: 'language-javascript' }
                    },
                    [
                      t('span', { pre: !0, attrs: { class: 'hljs-comment' } }, [
                        s._v('// 通过模块引入的方式使用CatCharts')
                      ]),
                      s._v('\n'),
                      t('span', { pre: !0, attrs: { class: 'hljs-keyword' } }, [
                        s._v('import')
                      ]),
                      s._v(' * '),
                      t('span', { pre: !0, attrs: { class: 'hljs-keyword' } }, [
                        s._v('as')
                      ]),
                      s._v(' CatChartsVue '),
                      t('span', { pre: !0, attrs: { class: 'hljs-keyword' } }, [
                        s._v('from')
                      ]),
                      s._v(' '),
                      t('span', { pre: !0, attrs: { class: 'hljs-string' } }, [
                        s._v("'qcharts-vue'")
                      ]),
                      s._v('\nVue.use(CatChartsVue)\n')
                    ]
                  )
                ]),
                s._v(' '),
                t('p', [
                  s._v(
                    '2.通过 cdn 获取 QchartsVue，通过下面的标签引入 QchartsVue，因为 QchartsVue 依赖 Vue 与 spritejs，所以需要先引入这两个'
                  )
                ]),
                s._v(' '),
                t('pre', { pre: !0 }, [
                  t(
                    'code',
                    { pre: !0, attrs: { 'v-pre': '', class: 'language-html' } },
                    [
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('script')
                        ]),
                        s._v(' '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('src')
                        ]),
                        s._v('='),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [
                            s._v(
                              '"https://cdn.jsdelivr.net/npm/vue/dist/vue.js"'
                            )
                          ]
                        ),
                        s._v('>')
                      ]),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('script')
                        ]),
                        s._v('>')
                      ]),
                      s._v('\n'),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('script')
                        ]),
                        s._v(' '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('src')
                        ]),
                        s._v('='),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [
                            s._v(
                              '"https://unpkg.com/spritejs/dist/spritejs.min.js"'
                            )
                          ]
                        ),
                        s._v('>')
                      ]),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('script')
                        ]),
                        s._v('>')
                      ]),
                      s._v('\n'),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('script')
                        ]),
                        s._v(' '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('src')
                        ]),
                        s._v('='),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [
                            s._v(
                              '"https://unpkg.com/@qcharts/core/dist/index.js"'
                            )
                          ]
                        ),
                        s._v('>')
                      ]),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('script')
                        ]),
                        s._v('>')
                      ]),
                      s._v('\n'),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('script')
                        ]),
                        s._v(' '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('src')
                        ]),
                        s._v('='),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v('"https://unpkg.com/qcharts-vue/lib/index.js"')]
                        ),
                        s._v('>')
                      ]),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('script')
                        ]),
                        s._v('>')
                      ]),
                      s._v('\n')
                    ]
                  )
                ]),
                s._v(' '),
                t('pre', { pre: !0 }, [
                  t(
                    'code',
                    {
                      pre: !0,
                      attrs: { 'v-pre': '', class: 'language-javascript' }
                    },
                    [
                      t('span', { pre: !0, attrs: { class: 'hljs-comment' } }, [
                        s._v('// 通过cdn的方式使用CatChartsVue')
                      ]),
                      s._v('\nVue.use(CatChartsVue)\n')
                    ]
                  )
                ]),
                s._v(' '),
                t('h3', [s._v('开始绘制图表')]),
                s._v(' '),
                t('p', [s._v('完成一个 CatChartsVue 的组件或者页面')]),
                s._v(' '),
                t('pre', { pre: !0 }, [
                  t(
                    'code',
                    { pre: !0, attrs: { 'v-pre': '', class: 'language-html' } },
                    [
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('template')
                        ]),
                        s._v('>')
                      ]),
                      s._v('\n  '),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('div')
                        ]),
                        s._v(' '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('class')
                        ]),
                        s._v('='),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v('"chart"')]
                        ),
                        s._v('>')
                      ]),
                      s._v('\n    '),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('s-chart')
                        ]),
                        s._v(' '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v(':data')
                        ]),
                        s._v('='),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v('"lineData"')]
                        ),
                        s._v(' '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v(':data-fields')
                        ]),
                        s._v('='),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v('"dataFields"')]
                        ),
                        s._v(' '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v(':size')
                        ]),
                        s._v('='),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v('"[700,600]"')]
                        ),
                        s._v('>')
                      ]),
                      s._v('\n      '),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('s-line')
                        ]),
                        s._v(' '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v(':attrs')
                        ]),
                        s._v('='),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v('"attrs"')]
                        ),
                        s._v(' />')
                      ]),
                      s._v('\n      '),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('s-axis')
                        ]),
                        s._v(' '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v(':attrs')
                        ]),
                        s._v('='),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v('"{orient:\'left\'}"')]
                        ),
                        s._v(' />')
                      ]),
                      s._v('\n      '),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('s-axis')
                        ]),
                        s._v(' '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v(':attrs')
                        ]),
                        s._v('='),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v('"{orient:\'bottom\'}"')]
                        ),
                        s._v(' />')
                      ]),
                      s._v('\n      '),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('s-tooltip')
                        ]),
                        s._v(' '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v(':attrs')
                        ]),
                        s._v('='),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v('"tooltipAttrs"')]
                        ),
                        s._v(' />')
                      ]),
                      s._v('\n    '),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('s-chart')
                        ]),
                        s._v('>')
                      ]),
                      s._v('\n  '),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('div')
                        ]),
                        s._v('>')
                      ]),
                      s._v('\n'),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('template')
                        ]),
                        s._v('>')
                      ]),
                      s._v('\n'),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('script')
                        ]),
                        s._v('>')
                      ]),
                      t('span', { pre: !0, attrs: { class: 'javascript' } }, [
                        s._v('\n  '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-keyword' } },
                          [s._v('export')]
                        ),
                        s._v(' '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-keyword' } },
                          [s._v('default')]
                        ),
                        s._v(' {\n    '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('data')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-function' } },
                          [
                            t(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-keyword' } },
                              [s._v('function')]
                            ),
                            s._v('('),
                            t('span', {
                              pre: !0,
                              attrs: { class: 'hljs-params' }
                            }),
                            s._v(') ')
                          ]
                        ),
                        s._v('{\n      '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-keyword' } },
                          [s._v('return')]
                        ),
                        s._v(' {\n        '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('attrs')
                        ]),
                        s._v(': {\n          '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('pos')
                        ]),
                        s._v(': ['),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'10%'")]
                        ),
                        s._v(', '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'10%'")]
                        ),
                        s._v('],\n          '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('size')
                        ]),
                        s._v(': ['),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'80%'")]
                        ),
                        s._v(', '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'80%'")]
                        ),
                        s._v(']\n        },\n        '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('lineData')
                        ]),
                        s._v(': [\n          { '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('date')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'05-01'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('catgory')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'图例一'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('sales')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-number' } },
                          [s._v('15.2')]
                        ),
                        s._v(' },\n          { '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('date')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'05-02'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('catgory')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'图例一'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('sales')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-number' } },
                          [s._v('39.2')]
                        ),
                        s._v(' },\n          { '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('date')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'05-03'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('catgory')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'图例一'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('sales')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-number' } },
                          [s._v('31.2')]
                        ),
                        s._v(' },\n          { '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('date')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'05-04'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('catgory')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'图例一'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('sales')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-number' } },
                          [s._v('65.2')]
                        ),
                        s._v(' },\n          { '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('date')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'05-05'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('catgory')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'图例一'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('sales')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-number' } },
                          [s._v('55.2')]
                        ),
                        s._v(' },\n          { '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('date')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'05-06'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('catgory')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'图例一'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('sales')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-number' } },
                          [s._v('75.2')]
                        ),
                        s._v(' },\n          { '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('date')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'05-07'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('catgory')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'图例一'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('sales')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-number' } },
                          [s._v('95.2')]
                        ),
                        s._v(' },\n          { '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('date')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'05-08'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('catgory')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'图例一'")]
                        ),
                        s._v(', '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('sales')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-number' } },
                          [s._v('65.2')]
                        ),
                        s._v(' }\n        ],\n        '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('tooltipAttrs')
                        ]),
                        s._v(': {\n          '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('formatter')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-function' } },
                          [
                            t(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-params' } },
                              [s._v('data')]
                            ),
                            s._v(' =>')
                          ]
                        ),
                        s._v(' '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [
                            s._v('`'),
                            t(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-subst' } },
                              [s._v('${data.data}')]
                            ),
                            s._v('-'),
                            t(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-subst' } },
                              [s._v('${data.catgory}')]
                            ),
                            s._v('-'),
                            t(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-subst' } },
                              [s._v('${data.sales}')]
                            ),
                            s._v('`')
                          ]
                        ),
                        s._v('\n        },\n        '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('dataFields')
                        ]),
                        s._v(': {\n          '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('row')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'catgory'")]
                        ),
                        s._v(',\n          '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('value')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'sales'")]
                        ),
                        s._v(',\n          '),
                        t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                          s._v('text')
                        ]),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-string' } },
                          [s._v("'date'")]
                        ),
                        s._v('\n        }\n      }\n    }\n  }\n')
                      ]),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('script')
                        ]),
                        s._v('>')
                      ]),
                      s._v('\n'),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('style')
                        ]),
                        s._v('>')
                      ]),
                      t('span', { pre: !0, attrs: { class: 'css' } }, [
                        s._v('\n  '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-selector-class' } },
                          [s._v('.chart')]
                        ),
                        s._v(' {\n    '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-attribute' } },
                          [s._v('height')]
                        ),
                        s._v(': '),
                        t(
                          'span',
                          { pre: !0, attrs: { class: 'hljs-number' } },
                          [s._v('600px')]
                        ),
                        s._v(';\n  }\n')
                      ]),
                      t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                          s._v('style')
                        ]),
                        s._v('>')
                      ]),
                      s._v('\n')
                    ]
                  )
                ]),
                s._v(' '),
                t('p', [s._v('一张折线图就绘制成功')]),
                s._v(' '),
                t('img', {
                  attrs: {
                    src:
                      'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/base-line.png',
                    width: '400'
                  }
                })
              ])
            }
          ],
          !1,
          null,
          null,
          null
        )
      a.default = l.exports
    }
  }
])
