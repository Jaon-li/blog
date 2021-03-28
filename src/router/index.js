import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import index from '../views/index/index.vue'
import login from '../views/login/login.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: login
    },
    {
        path: '/Home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Home
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})


export default router
