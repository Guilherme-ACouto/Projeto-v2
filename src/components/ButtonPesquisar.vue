<template>
  <FancyButton class="pesquisar" :disabled="disabled">
    <i class="fa-solid fa-magnifying-glass" style="color: #74C0FC;"></i>
  </FancyButton>
</template>

<script>
import FancyButton from '@/components/FancyButton.vue';

export default {
  name: 'ButtonPesquisar',
  components: {
    FancyButton,
  },
  props: {
    disabled: Boolean
  }
};
</script>
