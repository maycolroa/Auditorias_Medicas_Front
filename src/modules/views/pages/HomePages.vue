<template>
  <div>
    <h1 class="text-3xl font-bold">Bienvenido</h1>
    <p>Modulo de reservas tecnicas</p>
    <div class="flex justify-between mt-5 p-7">
      <img src="@/assets/famisanar.png" alt="Logo Famisanar" class="h-24" />
      <img src="@/assets/logo_ia.png" alt="Logo IA" class="h-24" />
    </div>
    <div class="grid grid-cols-3 gap-4 mt-1">
      <div v-for="item in menuItems" :key="item.name" class="bg-white shadow-md rounded-lg p-2 flex flex-col items-center">
        <img :src="item.icon" :alt="item.name" class="h-12 mb-1" />
        <span class="text-xl font-semibold">{{ item.name }}</span>
        <router-link :to="item.path" class="mt-1 bg-emerald-500 text-white px-4 py-1 rounded hover:bg-emerald-400">
          Ir a {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import contratosIcon from '@/assets/contrato.png';
import autorizacionesIcon from '@/assets/autorizaciones.png';
import facturasIcon from '@/assets/facturas.png';
import pagosIcon from '@/assets/pagos.png';
import incapacidadesIcon from '@/assets/incapacidades.png';
import proyeccionesIcon from '@/assets/proyecciones.png';

export default {
  name: 'HomePages',
  data() {
    return {
      menuItems: [
        { name: 'Contrato', icon: contratosIcon, path: '/contrato' },
        { name: 'Autorizaciones', icon: autorizacionesIcon, path: '/autorizaciones' },
        { name: 'Facturas', icon: facturasIcon, path: '/facturas' },
        { name: 'Pagos', icon: pagosIcon, path: '/pagos' },
        { name: 'Incapacidades', icon: incapacidadesIcon, path: '/incapacidades' },
        { name: 'Proyecciones', icon: proyeccionesIcon, path: '/proyecciones' },
      ],
    };
  },
};
</script>

<style scoped>
/* Estilos específicos si es necesario */
</style>
