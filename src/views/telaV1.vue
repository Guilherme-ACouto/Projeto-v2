<template>
  <BaseLayout>
    <template v-slot:header>
      <HeaderComponent />
    </template>

    <template v-slot:main>
      <SubHeader />
      <GridComponent />
    </template>

    <template v-slot:footer>
      <FooterComponent />
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import SubHeader from '@/components/SubHeader.vue';
import GridComponent from '@/components/GridComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'TelaV1',
  components: {
    BaseLayout,
    HeaderComponent,
    SubHeader,
    GridComponent,
    FooterComponent,
  }
};
</script>
