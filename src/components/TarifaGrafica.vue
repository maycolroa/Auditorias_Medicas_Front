<template>
  <div class="p-6">
    <h2 class="text-xl font-bold">TIPOS DE TARIFAS</h2>
    <p class="text-gray-600">Junio de 2023</p>
    <div class="mt-4">
      <!-- Bar 1 -->
      <div class="flex items-center mb-4">
        <span class="w-8 mr-2">O</span>
        <div class="bg-purple-500 h-12 rounded-l-lg flex items-center justify-end" style="width: 70%;">
          <span class="mr-2 text-white">436,716</span>
        </div>
      </div>
      <!-- Bar 2 -->
      <div class="flex items-center mb-4">
        <span class="w-8 mr-2">S</span>
        <div class="bg-blue-500 h-12 rounded-l-lg flex items-center justify-end" style="width: 100%;">
          <span class="mr-2 text-white">632,192</span>
        </div>
      </div>
      <!-- Bar 3 -->
      <div class="flex items-center mb-4">
        <span class="w-8 mr-2">I</span>
        <div class="bg-blue-300 h-12 rounded-l-lg flex items-center justify-end" style="width: 53%;">
          <span class="mr-2 text-white">334,468</span>
        </div>
      </div>
      <!-- Bar 4 -->
      <div class="flex items-center mb-4">
        <span class="w-8 mr-2">s</span>
        <div class="bg-gray-500 h-12 rounded-l-lg flex items-center justify-end" style="width: 0.05%;">
          <span class="mr-2 text-white">334</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TarifaGrafica'
}
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
