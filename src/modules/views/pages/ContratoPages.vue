<template>
  <div>
    <HeaderBotonContrato />
    <CasillaInformacionContrato />
    <div class="flex space-x-4 mt-1">
      <TarifaGrafica />
      <EstadoGrafica />
    </div>
  </div>
</template>

<script>
import HeaderBotonContrato from '@/components/HeaderBotonContrato.vue';
import CasillaInformacionContrato from '@/components/CasillaInformacionContrato.vue';
import TarifaGrafica from '@/components/TarifaGrafica.vue';
import EstadoGrafica from '@/components/EstadoGrafica.vue';

export default {
  components: {
    HeaderBotonContrato,
    CasillaInformacionContrato,
    TarifaGrafica,
    EstadoGrafica,
  }
};
</script>

<style scoped>
/* Estilos específicos para esta página */
</style>
