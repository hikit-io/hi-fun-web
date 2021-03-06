import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import indexRouteInfo from "@/router/index/index";
import practiceRouteInfo from "@/router/practice/index"
import competitionRouteInfo from "@/router/competition"
import announcementRouteInfo from "@/router/announcement";
import registerRouteInfo from "@/router/register";
import aboutRouteInfo from "@/router/about";
import profileRouteInfo from "@/router/profile";
import adminRouteInfo from "@/router/admin";
import {articleRouteInfo} from "@/router/article";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        redirect: {
            path: '/index'
        },
        children: [
            indexRouteInfo,
            practiceRouteInfo,
            competitionRouteInfo,
            articleRouteInfo,
            aboutRouteInfo,

            registerRouteInfo,
            announcementRouteInfo,
            profileRouteInfo,
        ]
    },
    {
        path: '/e',
        component: () => import('@/components/editor/Editor.vue')
    },
    {
        path: '/split',
        component: () => import('@/views/Test.vue')
    },
    adminRouteInfo
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
