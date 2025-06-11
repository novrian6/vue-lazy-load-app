import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { getUser } from '../auth'
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const user = getUser()
  if (to.meta.requiresAuth) {
    if (!user) return next('/login')
    if (to.meta.role && user.role !== to.meta.role) {
      return next('/unauthorized')
    }
  }
  next()
})
export default router