<template>
  <div class="flex h-auto bg-gray-200">
    <div
      @mouseover="expandSidebar"
      @mouseleave="collapseSidebar"
      :class="['transition-all duration-300', { 'w-64': isExpanded, 'w-20': !isExpanded }]"
      class="bg-gray-800 text-white flex flex-col"
    >
      <div class="flex items-center justify-center h-20">
        <span class="text-2xl font-bold">Admin</span>
      </div>
      <ul class="flex flex-col mt-10">
        <li v-for="item in menuItems" :key="item.name" class="flex items-center h-12 px-6 hover:bg-gray-700">
          <router-link :to="item.path" class="flex items-center w-full">
            <i :class="[item.icon, 'w-6 h-6']"></i>
            <span v-if="isExpanded" class="ml-4">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SidebarMenu',
  setup() {
    const isExpanded = ref(false);
    const menuItems = [
      { name: 'Home', icon: 'fas fa-home', path: '/' },
      { name: 'Contrato', icon: 'fas fa-file-contract', path: '/contrato' },
      { name: 'Autorizaciones', icon: 'fas fa-key', path: '/autorizaciones' },
      { name: 'Facturas', icon: 'fas fa-file-invoice-dollar', path: '/facturas' },
      { name: 'Incapacidades', icon: 'fas fa-procedures', path: '/incapacidades' },
      { name: 'Pagos', icon: 'fas fa-credit-card', path: '/pagos' },
      { name: 'Proyecciones', icon: 'fas fa-chart-line', path: '/proyecciones' },
      { name: 'Reservas', icon: 'fas fa-bookmark', path: '/reservas' },
      { name: 'Triángulos', icon: 'fas fa-exclamation-triangle', path: '/triangulos' },
    ];

    const expandSidebar = () => {
      isExpanded.value = true;
    };

    const collapseSidebar = () => {
      isExpanded.value = false;
    };

    return {
      isExpanded,
      menuItems,
      expandSidebar,
      collapseSidebar,
    };
  },
});
</script>

<style scoped>
.fas {
  font-size: 1.5rem;
}
</style>
