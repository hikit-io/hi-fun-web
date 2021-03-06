import {RouteRecordRaw} from "vue-router";

const announceManage:RouteRecordRaw = {
    path:'announce',
    component:() => import('@/views/admin/AnnounceManage.vue')
}


const adminRouteInfo: RouteRecordRaw = {
    path: '/admin',
    name: 'Admin',
    meta: {
        title: "系统管理",
        isMenu: false
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/admin/Admin.vue'),
    children:[
        announceManage
    ],
}

export default adminRouteInfo
