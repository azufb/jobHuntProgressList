import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../src/components/home.vue'
import Signup from '../src/components/signup.vue'
import Signin from '../src/components/signin.vue'
import Signout from '../src/components/signout.vue'
import Progress from '../src/components/progressManage.vue'
import firebase from 'firebase'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin
    },
    {
        path: "/signout",
        name: "signout",
        component: Signout
    },
    {
        path: "/progress",
        name: "progress",
        component: Progress,
        meta: { requiresAuth: true }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(recode => recode.meta.requiresAuth);
    if (requiresAuth && !(await firebase.getCurrentUser())) {
        next({ path: '/signin', query: { redirect: to.fullPath }});
    } else {
        next();
    }
});

export default router;