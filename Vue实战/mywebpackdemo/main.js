import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';




Vue.use(VueRouter);

<<<<<<< HEAD
/*
=======

// 路由配置
>>>>>>> 3b142daec2339d4cd655c40f58d14975b81dbb75
const Routers = [
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/about',
        meta: {
            title: '关于'
        },
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    
    {
        path: '*',
        redirect: '/index'
    }
];*/

const Routers = [
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/about',
        meta: {
            title: '关于'
        },
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/index'
    }
];


const RouterConfig = {
<<<<<<< HEAD
    mode:'history',
    routes:Routers
=======
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
>>>>>>> 3b142daec2339d4cd655c40f58d14975b81dbb75
};
const router = new VueRouter(RouterConfig);

<<<<<<< HEAD
new Vue({
    el:'#app',
    router:router,
    render:h=>{
        return h(App)
    }
});

/*
new Vue({
    el: '#app',
=======
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',

    
>>>>>>> 3b142daec2339d4cd655c40f58d14975b81dbb75
    router: router,
    render: h => {
        return h(App)
    }
<<<<<<< HEAD
});
*/
=======
});
>>>>>>> 3b142daec2339d4cd655c40f58d14975b81dbb75
