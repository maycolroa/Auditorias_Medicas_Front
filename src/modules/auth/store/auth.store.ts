import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { AuthStatus, type User } from '../interface'
import { LoginActions } from '../actions';

export const useAuthStore = defineStore('auth', () => {
  const authStatus = ref<AuthStatus>(AuthStatus.UnAuthenticate);
  const user = ref<User | undefined>();

  const login = async (email: string, password: string) => {
    try {
      const loginResp = await LoginActions(email, password);
      if (!loginResp.ok) {
        logout();
        return false;
      }
  
      user.value = loginResp.user; // Almacenas el usuario retornado
      // token.value = loginResp.token;  // Esta línea se puede omitir si decides no usar token
      authStatus.value = AuthStatus.Authenticated; // Marca al usuario como autenticado
  
      return true;
    } catch (error) {
      console.error('Login error:', error);
      logout();
      return false;
    }
  };

  const logout = () => {
    authStatus.value = AuthStatus.UnAuthenticate;
    user.value = undefined;
  };

  return {
    user,
    authStatus,
    isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),
    login,
    logout,
  }
});
