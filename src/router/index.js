import Vue from 'vue'
import Router from 'vue-router'
import index from '@/sections/index'
import cart from '@/sections/cart'
import furniture from '@/sections/furniture'
import decor from '@/sections/decor'
import SideMainLayout from '@/layout/SideMainLayout'
import Home from '@/sections/home'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: SideMainLayout,
            children: [{
                    path: '/',
                    component: Home
                },
                {
                    path: '/shop',
                    component: index
                },
                {
                    path: '/furniture',
                    name: 'furniture',
                    component: furniture
                },
                {
                    path: '/decor',
                    name: 'decor',
                    component: decor
                }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart
        }
    ]
})