<template>
  <div class="header">
    <ButtonMenu />
    <FiltroComponent />
  </div>
</template>

<script>
import ButtonMenu from '@/components/ButtonMenu.vue';
import FiltroComponent from '@/components/FiltroComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    ButtonMenu,
    FiltroComponent,
  }
}
</script>
