<template>
  <BaseLayout>
    <template v-slot:header>
      <HeaderComponent />
    </template>

    <template v-slot:main>
      <SubHeader />
    </template>

    <template v-slot:footer>
      <div class="footer">
      </div>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import SubHeader from '@/components/SubHeader.vue';

export default {
  name: 'TelaV1',
  components: {
    BaseLayout,
    HeaderComponent,
    SubHeader,
  }
};
</script>
