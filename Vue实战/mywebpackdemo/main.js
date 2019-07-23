import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue'

Vue.use(VueRouter);
Vue.use(Vuex);

const Routers = [
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
]
const store = new Vuex.Store({
    state:{
        count:0
    }
});
const RouterConfig = {
    mode:'history',
    routes:Routers
};
const router = new VueRouter(RouterConfig);
new Vue({
    el:'#app',
    router:router,
    store:store,
    render:h=>h(App)
});