<template>
  <BaseLayout>
    <template v-slot:header>
      <FancyButton>
        Menu
      </FancyButton>
    </template>

    <template v-slot:footer>
      <p></p>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import FancyButton from '@/components/FancyButton.vue';

export default {
  name: 'TelaV1',
  components: {
    BaseLayout,
    FancyButton
  }
};
</script>
