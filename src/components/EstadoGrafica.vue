<template>
  <div class="w-full md:w-80 p-4">
    <div class="bg-white shadow-md rounded-lg border">
      <div class="p-4 border-b flex justify-between items-center">
        <div>
          <h6 class="text-xl font-bold uppercase mb-0">Tipo de prestador</h6>
          <span class="text-gray-600">Junio de 2023</span>
        </div>
        <div class="flex space-x-10">
          <button class="text-blue-500" @click="exportar">
            <i class="zmdi zmdi-download"></i>
          </button>
          <button class="text-blue-500" @click="toggleFullScreen">
            <i class="zmdi zmdi-fullscreen"></i>
          </button>
        </div>
      </div>
      <div class="p-4">
        <div v-if="display === 'table'" class="overflow-x-auto">
          <!-- Tu tabla aquí -->
        </div>
        <div v-else class="flex justify-around items-end mt-4" style="height: 400px;"> <!-- Ajusta la altura aquí -->
          <!-- Bar 1 -->
          <div class="flex flex-col items-center">
            <div class="bg-blue-300 w-16  rounded-t-lg flex items-end justify-center" style="height: 80%;"> <!-- Ajusta la altura aquí -->
              <span class="text-white mb-2">613,744</span>
            </div>
            <span class="mt-2">R</span>
          </div>
          <!-- Bar 2 -->
          <div class="flex flex-col items-center">
            <div class="bg-blue-500 w-16 rounded-t-lg flex items-end justify-center" style="height: 90%;"> <!-- Ajusta la altura aquí -->
              <span class="text-white mb-2">635,734</span>
            </div>
            <span class="mt-2">N</span>
          </div>
          <!-- Bar 3 -->
          <div class="flex flex-col items-center">
            <div class="bg-purple-500 w-16 rounded-t-lg flex items-end justify-center" style="height: 60%;"> <!-- Ajusta la altura aquí -->
              <span class="text-white mb-2">154,232</span>
            </div>
            <span class="mt-2">O</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TiposPrestador',
  data() {
    return {
      display: 'chart', // Cambia a 'table' para mostrar la tabla
      status: 'LOADED' // Cambia a 'LOADING' para simular el estado de carga
    };
  },
  methods: {
    exportar() {
      // Función de marcador de posición para la funcionalidad de exportación
      console.log('Exportar');
    },
    toggleFullScreen() {
      // Función de marcador de posición para la funcionalidad de pantalla completa
      console.log('Toggle Full Screen');
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
