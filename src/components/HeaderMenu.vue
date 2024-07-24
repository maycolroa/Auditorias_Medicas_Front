<template>
  <header class="flex items-center h-14 p-6 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
    <div class="flex items-center">
      <img src="@/assets/logo.png" alt="Logo" class="h-7 mr-4" />
      <!-- Otros contenidos del header si los hay -->
    </div>
    <div class="ml-auto flex items-center space-x-4 cursor-pointer">
      <span>Maycol Roa</span>
      <img src="@/assets/user.png" alt="Logo" class="h-10 mr-4" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderMenu',
});
</script>

<style scoped>
/* Estilos específicos del header */
</style>
