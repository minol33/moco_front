import {createRouter, createWebHistory} from "vue-router"

import Login from "../components/Login.vue";
import Main from "../components/Main.vue";

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: Login,
        meta: {
            hideHeaderAndSidebar: true
        }
    },
    // ----------------------------------- Intro -----------------------------------
    {
        path: "/",
        name: "Login", // 초기 로딩 페이지
        component: Login,
    },
    {
        path: "/main",
        name: "Main",
        component: Main,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some((record) => record.meta.requiresAuth)) {
//         const token = sessionStorage.getItem('accessToken')
//
//         if (!token) {
//             next({name: 'Login'})
//         } else {
//             next()
//         }
//     } else {
//         next()
//     }
// })

export default router
