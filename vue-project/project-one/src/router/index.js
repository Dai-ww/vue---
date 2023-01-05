import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect:'/login',
            component: () => import('@/components/Login')
        },
        {
            path: '/login',
            name:'Login',
            component: () => import('@/components/Login')
        },
        {
            path: '*',
            name:'NotFound',
            component: () => import('@/components/NotFound')
        },
        {
            path: '/home',
            name:'Home',
            component: ()=>import('@/components/Home')
            // 异步组件写法
            // component: resolve => require(['@/components/Home'], resolve)
        }
    ],
    mode: 'history'
})