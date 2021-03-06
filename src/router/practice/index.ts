import {RouteRecordRaw} from "vue-router";

const practiceRouteInfo: RouteRecordRaw = {
    path: '/practice',
    name: 'Practice',
    meta: {
        title: "算法练习",
        banner: "",
        isMenu: true
    },
    component: () => import('@/views/practice/Practice.vue'),
    children: [
        {
            path: '',
            component: () => import('@/views/practice/ListPanel.vue')
        },
        {
            path: 'woker',
            component: () => import('@/views/practice/Woker.vue' )
        },
        {
            path: 'detail',
            component: () => import('@/views/practice/Content.vue' )
        }
    ]
}

export default practiceRouteInfo
