<template>
  <div class="sub-header">
    <ButtonLimpar />
    <ButtonPesquisar />
    <RadioButtons />
  </div>
</template>

<script>
import ButtonLimpar from '@/components/ButtonLimpar.vue';
import ButtonPesquisar from '@/components/ButtonPesquisar.vue';
import RadioButtons from '@/components/RadioButtons.vue';

export default {
  name: 'SubHeader',
  components: {
    ButtonLimpar,
    ButtonPesquisar,
    RadioButtons,
  }
}
</script>
