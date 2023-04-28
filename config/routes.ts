export default [
  {path: '/user', name: '用户页面', layout: false, routes: [{path: '/user/login', component: './User/Login'}]},
  {path: '/welcome', name: '欢迎页面', icon: 'smile', component: './Welcome'},
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理页面',
    routes: [
      {path: '/admin', name: '管理页面', redirect: '/admin/sub-page'},
      {path: '/admin/sub-page', name: '管理页面', component: './Admin'},
    ],
  },
  {icon: 'table', path: '/list', component: './TableList'},
  {path: '/', name: '欢迎页面',redirect: '/welcome'},
  {path: '*', name: '404',layout: false, component: './404'},
];
