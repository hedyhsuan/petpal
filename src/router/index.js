import { createRouter, createWebHashHistory } from 'vue-router'

// import HomeView from '../views/HomeView.vue'
// 可以分開寫也可以寫在下面

const routes = [
  {
    path: '/',
    component: () => import('../views/frontend/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/frontend/HomeView.vue')
      },
      {
        path: 'shelter',
        component: () => import('../views/frontend/ShelterView.vue'),
        children: [
          {
            path: 'allselter',
            component: () => import('../views/frontend/AllShelterView.vue')
          },
          {
            path: ':id',
            component: () => import('../views/frontend/SingleView.vue')
          }
        ]
      },

      {
        path: 'cart',
        component: () => import('../views/frontend/CartView.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/frontend/CheckoutView.vue')
      },
      {
        path: '/order/:id',
        component: () => import('../views/frontend/OrderView.vue')
      },
      {
        path: 'favorite',
        component: () => import('../views/frontend/FavoriteView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/frontend/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/backend/BackView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/AdminProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/backend/AdminOrders.vue')
      }

    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
  // router-link啟用時的bootstrap css 讓畫面中啟用的選項自帶active功能
})

export default router
