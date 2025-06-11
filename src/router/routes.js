export default [
  {
    path: '/profile',
    component: () => import('../views/UserProfile.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/AdminPanel.vue'),
    meta: { requiresAuth: true, role: 'admin' }
  },
  {
    path: '/login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/unauthorized',
    component: () => import('../views/Unauthorized.vue')
  }
]