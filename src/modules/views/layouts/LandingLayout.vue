<template>
  <div class="flex flex-col h-screen">
    <HeaderMenu />
    <div class="flex flex-1">
      <SidebarMenu />
      <router-view class="flex-1 p-4 bg-gray-100" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
import SidebarMenu from '@/components/SildebarMenu.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderMenu,
    SidebarMenu,
  },
});
</script>
