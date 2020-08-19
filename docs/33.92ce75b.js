;(window.webpackJsonpQchartsVue = window.webpackJsonpQchartsVue || []).push([
  [33],
  {
    104: function(t, v, _) {
      'use strict'
      _.r(v)
      var e = { components: {} },
        r = _(0),
        a = Object(r.a)(
          e,
          function() {
            var t = this.$createElement
            this._self._c
            return this._m(0)
          },
          [
            function() {
              var t = this,
                v = t.$createElement,
                _ = t._self._c || v
              return _('section', [
                _('h2', [t._v('Chart 图表主体')]),
                t._v(' '),
                _('p', [
                  t._v(
                    'CatChartsVue 基于 Vue 为用户封装了常用图表组件，方便用户来构建图表。'
                  )
                ]),
                t._v(' '),
                _('h3', [t._v('组件构成')]),
                t._v(' '),
                _('p', [
                  t._v(
                    'CatChartsVue 由图表 Chart，图表绘制部分 Visual，图表插件部分 Plugin 组成。其中 Chart 是容器，Visual 绘制图表主体，如饼图，折线图等，Plugin 为图表相关插件，如 axis，tooltip 等，如下图'
                  )
                ]),
                t._v(' '),
                _('p', { attrs: { align: 'center' } }, [
                  _('img', {
                    attrs: {
                      src: 'http://p6.qhimg.com/t0137055a27f367470b.png',
                      alt: 'chart-structure',
                      height: '400'
                    }
                  })
                ]),
                t._v(' '),
                _('table', [
                  _('thead', [
                    _('tr', [
                      _('th', [t._v('名称')]),
                      t._v(' '),
                      _('th', [t._v('说明')]),
                      t._v(' '),
                      _('th', [t._v('其它')])
                    ])
                  ]),
                  t._v(' '),
                  _('tbody', [
                    _('tr', [
                      _('td', [t._v('Chart')]),
                      t._v(' '),
                      _('td', [
                        t._v(
                          '图表组件，申明使用 QchartsVue,作为 QchartsVue 的绘图容器，包裹其它的组件 '
                        ),
                        _('code', { pre: !0 }, [t._v('<s-chart></s-chart>')])
                      ]),
                      t._v(' '),
                      _('td')
                    ]),
                    t._v(' '),
                    _('tr', [
                      _('td', [t._v('Visual')]),
                      t._v(' '),
                      _('td', [
                        t._v('绘图组件，其中包含各种图表，如：'),
                        _('code', { pre: !0 }, [t._v('<s-line />')]),
                        t._v(' '),
                        _('code', { pre: !0 }, [t._v('<s-bar />')]),
                        t._v(' '),
                        _('code', { pre: !0 }, [t._v('<s-pie />')]),
                        t._v(' '),
                        _('code', { pre: !0 }, [t._v('<s-radar />')]),
                        t._v(' '),
                        _('code', { pre: !0 }, [t._v('<s-area />')]),
                        t._v(' '),
                        _('code', { pre: !0 }, [t._v('<s-column />')]),
                        t._v(' '),
                        _('code', { pre: !0 }, [t._v('<s-gauge />')]),
                        t._v(' '),
                        _('code', { pre: !0 }, [t._v('<s-funnel />')]),
                        t._v('等等')
                      ]),
                      t._v(' '),
                      _('td')
                    ]),
                    t._v(' '),
                    _('tr', [
                      _('td', [t._v('Plugin')]),
                      t._v(' '),
                      _('td', [
                        t._v('绘图插件，其中包含各种插件，如：'),
                        _('code', { pre: !0 }, [t._v('<s-tooltip />')]),
                        t._v(' '),
                        _('code', { pre: !0 }, [t._v('s-legend />')]),
                        t._v(' '),
                        _('code', { pre: !0 }, [t._v('<s-axis />')]),
                        t._v(' 等等')
                      ]),
                      t._v(' '),
                      _('td')
                    ])
                  ])
                ]),
                t._v(' '),
                _('h3', [t._v('属性')]),
                t._v(' '),
                _('table', [
                  _('thead', [
                    _('tr', [
                      _('th', [t._v('名称')]),
                      t._v(' '),
                      _('th', [t._v('属性')])
                    ])
                  ]),
                  t._v(' '),
                  _('tbody', [
                    _('tr', [
                      _('td', [t._v('Chart')]),
                      t._v(' '),
                      _('td', [
                        t._v('size: '),
                        _('code', { pre: !0 }, [t._v("['100%','100%']")]),
                        t._v(' 图表大小'),
                        _('br'),
                        t._v(' pos: '),
                        _('code', { pre: !0 }, [t._v('[0,0]')]),
                        t._v(' 图表位置 '),
                        _('br'),
                        t._v(' data:'),
                        _('code', { pre: !0 }, [t._v('[]')]),
                        t._v(' 数据，一维数据，所有 visual 结构相同 '),
                        _('br'),
                        t._v(' data-fields:'),
                        _('code', { pre: !0 }, [
                          t._v("{row:'type1',col:'type2',value:'type3'}")
                        ]),
                        t._v('数据字段对应关系')
                      ])
                    ]),
                    t._v(' '),
                    _('tr', [
                      _('td', [t._v('Visual')]),
                      t._v(' '),
                      _('td', [
                        t._v('attrs:'),
                        _('code', { pre: !0 }, [t._v('{}')]),
                        t._v('属性,各个 visual 特有 '),
                        _('br'),
                        t._v(' css-xxx:'),
                        _('code', { pre: !0 }, [t._v('{} | function')]),
                        t._v(' 属性设置,各个 visual 特有')
                      ])
                    ]),
                    t._v(' '),
                    _('tr', [
                      _('td', [t._v('Plugin')]),
                      t._v(' '),
                      _('td', [
                        t._v('attrs:'),
                        _('code', { pre: !0 }, [t._v('{}')]),
                        t._v(' 属性,各个 Plugin 特有 '),
                        _('br'),
                        t._v('css-xxx: '),
                        _('code', { pre: !0 }, [t._v('{} | function')]),
                        t._v(' 属性设置,各个 Plugin 特有')
                      ])
                    ])
                  ])
                ])
              ])
            }
          ],
          !1,
          null,
          null,
          null
        )
      v.default = a.exports
    }
  }
])
