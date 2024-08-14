<template>
  <BaseLayout>
    <template v-slot:header>
      <div class="header">
        <ButtonMenu />
        <FiltroComponent />
      </div>
    </template>

    <template v-slot:main>
      <div class="sub-header">
        <ButtonLimpar />
        <ButtonPesquisar />
      </div>
    </template>

    <template v-slot:footer>
      <div class="footer">
      </div>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import ButtonMenu from '@/components/ButtonMenu.vue';
import FiltroComponent from '@/components/FiltroComponent.vue';
import ButtonLimpar from '@/components/ButtonLimpar.vue';
import ButtonPesquisar from '@/components/ButtonPesquisar.vue';


export default {
  name: 'TelaV1',
  components: {
    BaseLayout,
    ButtonMenu,
    FiltroComponent,
    ButtonLimpar,
    ButtonPesquisar,
  }
};
</script>
