<template>
  <div>
    <h1 class="text-3xl font-bold">Bienvenido</h1>
    <p class="mb-10">Modulo de Auditorias Medicas</p>
    <div class="grid grid-cols-3 gap-4 mt-1">
      <div v-for="item in menuItems" :key="item.name"
        class="bg-white shadow-md rounded-lg p-10 flex flex-col items-center">
        <img :src="item.image" :alt="item.name" class="h-12 mb-1" />
        <span class="text-xl font-semibold">{{ item.name }}</span>
        <router-link :to="item.path" class="mt-1 bg-emerald-500 text-white px-4 py-1 rounded hover:bg-emerald-400">
          Ir a {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import capitalSaludImage from '@/assets/capitalsaludlogo.png';
import famisanarImage from '@/assets/famisanarlogo.png';
import compensarImage from '@/assets/compensarlogo.png';


export default {
  name: 'HomePages',
  data() {
    return {
      menuItems: [
        { name: 'CapitalSalud', image: capitalSaludImage, prestadores: 30, ubicacion: 'Cundinamarca, Antioquia', path: '/capitalSalud' },
        { name: 'Famisanar', image: famisanarImage, prestadores: 20, ubicacion: 'Bolivar, La Guajira', path: '/famisanar' },
        { name: 'Compensar', image: compensarImage, prestadores: 40, ubicacion: 'Cundinamarca', path: '/compensar' },
      ],
    };
  },
};
</script>
