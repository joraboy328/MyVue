import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';




Vue.use(VueRouter);


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
];
const RouterConfig = {
    mode:'history',
    routes:routes
};

const router = new VueRouter(RouterConfig);
new Vue({
    el:'#app',
    router:router,
    store:store,
    render:h=>h(App)
});