<template>
  <!-- Component -->
  <div class="flex h-screen">
    <!-- Left: Image -->
    <div class="hidden lg:flex items-center justify-center w-1/2 bg-gray-100">
      <img src="@/assets/imgLogin_1.png" alt="Placeholder Image" class="object-cover w-auto h-auto">
    </div>

    <!-- Right: Login Form -->
    <div class="flex items-center justify-center w-full lg:w-1/2 p-8 lg:px-36 md:px-52 sm:px-20 bg-white">
      <div>
        <h1 class="text-2xl font-semibold mb-4">Iniciar seción</h1>
        <form @submit.prevent="onLogin">
          <!-- Username Input -->
          <div class="mb-6">
            <label for="email" class="block text-gray-600">Correo</label>
            <input v-model="myForm.email" ref="emailInputRef" type="text" id="email" name="email"
              class="w-full border border-gray-300 rounded-md py-2 px-20 focus:outline-none focus:border-blue-500"
              autocomplete="off">
          </div>
          <!-- Password Input -->
          <div class="mb-6">
            <label for="password" class="block text-gray-600">Clave</label>
            <input v-model="myForm.password" ref="passwordInputRef" type="password" id="password" name="password"
              class="w-full border border-gray-300 rounded-md py-2 px-20 focus:outline-none focus:border-blue-500"
              autocomplete="off">
          </div>

          <!-- Login Button -->
          <button type="submit"
            class="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-md py-2 px-4 w-full">Ingresar</button>
        </form>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useAuthStore } from "../store/auth.store";
import { useToast } from "vue-toastification";
import router from "@/router";



const authStore = useAuthStore();
const toast = useToast()

const emailInputRef = ref<HTMLInputElement | null>(null);
const passwordInputRef = ref<HTMLInputElement | null>(null);


const myForm = reactive({
  email: '',
  password: '',
  rememberme: false,
});


const onLogin = async () => {
  if (myForm.email === '') {
    return emailInputRef.value?.focus();
  }

  if (myForm.password.length < 5) {
    return passwordInputRef.value?.focus();
  }

  const ok = await authStore.login(myForm.email, myForm.password);

  if (ok) {
    router.push({ name: 'home' }); // Asegúrate de usar el nombre correcto 'home'
  } else {
    toast.error('Usuario o Contraseña no son correctos');
  }

};


</script>