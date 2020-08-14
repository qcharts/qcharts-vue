export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '饼图',
    path: 'default',
    component: () => import('./pie-default.md')
  },
  {
    title: '嵌套饼图',
    path: 'nest',
    component: () => import('./pie-nest.md')
  },
  {
    title: '环图',
    path: 'dounght',
    component: () => import('./pie-dounght.md')
  },
  {
    title: '弧饼图',
    path: 'arc',
    component: () => import('./pie-arc.md')
  }
]
