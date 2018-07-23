import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]import Vue from 'vue'
  import Router from 'vue-router'
  import index from '@/views/index'

  Vue.use(Router)


let routes =  [

  {
    path: '',
    name: 'index',
    component: index
  }
];
const router = new Router({
  history: true,
  routes : routes
});


router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {//如果未匹配到路由
  from.name ? next({ name:from.name }) : next('/');//如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
} else {
  next();//如果匹配到正确跳转
}
});

export default router
})
