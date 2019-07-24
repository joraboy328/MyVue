import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import index from './views/index.vue';
import about from './views/about.vue';



Vue.use(VueRouter);
//Vue.use(Vuex);
const routes = [
    {
        path:'/index',component:index
    },
    {
        path:'/about',component:about
    }
]
/*
const routes = [
    {
        path : '/index',
        component:(resolve) => require(['./views/index.vue'],resolve)
    },
    {
        path : '/about',
        component:(resolve) => require(['./views/about.vue'],resolve)
    },
    {
        path:'*',
        redirect:'/index'
    }
]*/
/*
const store = new Vuex.Store({
    state:{
        count:0
    }
});
*/
const RouterConfig = {
    mode:'history',
    routes:routes
};
/*
const router = new VueRouter({
    routes:routes
});
export default router;
*/
const router = new VueRouter(RouterConfig);
new Vue({
    el:'#app',
    router:router,
    store:store,
    render:h=>h(App)
});