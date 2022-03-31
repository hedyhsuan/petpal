import { createRouter, createWebHashHistory } from 'vue-router'

// import HomeView from '../views/HomeView.vue'
// 可以分開寫也可以寫在下面

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'shelter',
        component: () => import('../views/ShelterView.vue'),
        children: [
          {
            path: 'allselter',
            component: () => import('../views/AllShelterView.vue')
          },
          {
            path: ':id',
            component: () => import('../views/SingleView.vue')
          }
        ]
      },

      {
        path: 'cart',
        component: () => import('../views/CartView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/BackView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/AdminProducts.vue')
      },
      {
        path: 'coupon',
        component: () => import('../views/AdminCoupon.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  // router-link啟用時的bootstrap css 讓畫面中啟用的選項自帶active功能
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }

})

export default router
