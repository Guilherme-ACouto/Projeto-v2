<template>
  <FancyButton class="limpar" :disabled="disabled">
    <i class="fa-solid fa-x" style="color: #c80e0e;"></i>
  </FancyButton>
</template>

<script>
import FancyButton from '@/components/FancyButton.vue';

export default {
  name: 'ButtonLimpar',
  components: {
    FancyButton,
  },
  props: {
    disabled: Boolean
  }
};
</script>
