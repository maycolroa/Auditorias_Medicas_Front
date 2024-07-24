import isAuthenticatedGuard from '@/modules/auth/guards/is-uthenticated.guards';
import NotFound from '@/modules/common/pages/NotFound.vue';
import HomePages from '@/modules/views/pages/HomePages.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    //lading
    {
      path: '/',
      name: 'lading',
      component: () => import('@/modules/views/layouts/LandingLayout.vue'),
      beforeEnter: isAuthenticatedGuard,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePages,
          meta: { requiresAuth: true }
        },
        {
          path: '/autorizaciones',
          name: 'autorizaciones',
          component: () => import('@/modules/views/pages/AutorizacionesPages.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/contrato',
          name: 'contrato',
          component: () => import('@/modules/views/pages/ContratoPages.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/facturas',
          name: 'facturas',
          component: () => import('@/modules/views/pages/FacturasPages.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/incapacidades',
          name: 'incapacidades',
          component: () => import('@/modules/views/pages/IncapacidadesPages.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/pagos',
          name: 'pagos',
          component: () => import('@/modules/views/pages/PagosPages.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/proyecciones',
          name: 'proyecciones',
          component: () => import('@/modules/views/pages/ProyeccionesPages.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/reservas',
          name: 'reservas',
          component: () => import('@/modules/views/pages/ReservasPages.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/triangulos',
          name: 'triangulos',
          component: () => import('@/modules/views/pages/TriangulosPages.vue'),
          meta: { requiresAuth: true }
        },
      ]
    },
    // auth
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/modules/auth/pages/LoginPages.vue'),
    },

    // Not found
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    }
  ]
})

export default router;
