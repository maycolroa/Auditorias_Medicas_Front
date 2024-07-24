import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router"
import { useAuthStore } from "../store/auth.store";

const isAuthenticatedGuard = (
  to:RouteLocationNormalized,
  from:RouteLocationNormalized,
  next:NavigationGuardNext
) => {
  const authStore = useAuthStore();
  
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    // Si el usuario no está autenticado, redirigir al login
    if (to.name !== 'auth') {
      next({ name: 'auth' });
      return;
    }
  }
  // Permitir la navegación
  next();
}

export default isAuthenticatedGuard
