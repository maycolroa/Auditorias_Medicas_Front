<template>
  <div>
    <h1 class="text-3xl font-bold">CAPITAL SALUD - CONTRATOS</h1>
    <p>Modulo de reservas tecnicas</p>

    <div class="mt-4 flex gap-1">
      <button
        class="flex-1 flex items-center justify-center px-6 py-3 rounded-none transition-colors duration-300 ease-in-out bg-gray-500 text-white text-lg"
        :class="{ 'bg-yellow-500': activeButton === 'general', 'bg-gray-500': activeButton !== 'general' }"
        @click="setActiveButton('general')"
      >
        <i class="fas fa-folder-open mr-2"></i>
        <span>General</span>
      </button>

      <button
        class="flex-1 flex items-center justify-center px-6 py-3 rounded-none transition-colors duration-300 ease-in-out bg-gray-500 text-white text-lg"
        :class="{ 'bg-yellow-500': activeButton === 'prestadores', 'bg-gray-500': activeButton !== 'prestadores' }"
        @click="setActiveButton('prestadores')"
      >
        <i class="fas fa-folder-open mr-2"></i>
        <span>Prestadores</span>
      </button>

      <button
        class="flex-1 flex items-center justify-center px-6 py-3 rounded-none transition-colors duration-300 ease-in-out bg-gray-500 text-white text-lg"
        :class="{ 'bg-yellow-500': activeButton === 'servicios', 'bg-gray-500': activeButton !== 'servicios' }"
        @click="setActiveButton('servicios')"
      >
        <i class="fas fa-folder-open mr-2"></i>
        <span>Servicios</span>
      </button>

      <button
        class="flex-1 flex items-center justify-center px-6 py-3 rounded-none transition-colors duration-300 ease-in-out bg-gray-500 text-white text-lg"
        :class="{ 'bg-yellow-500': activeButton === 'estructura', 'bg-gray-500': activeButton !== 'estructura' }"
        @click="setActiveButton('estructura')"
      >
        <i class="fas fa-folder-open mr-2"></i>
        <span>Estructura</span>
      </button>

      <button
        class="flex-1 flex items-center justify-center px-6 py-3 rounded-none transition-colors duration-300 ease-in-out bg-gray-500 text-white text-lg"
        :class="{ 'bg-yellow-500': activeButton === 'importar', 'bg-gray-500': activeButton !== 'importar' }"
        @click="setActiveButton('importar')"
      >
        <i class="fas fa-folder-open mr-2"></i>
        <span>Importar</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeButton: ''
    };
  },
  methods: {
    setActiveButton(buttonName) {
      this.activeButton = buttonName;
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para los botones */
</style>
