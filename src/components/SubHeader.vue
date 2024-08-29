<template>
  <div class="sub-header">
    <ButtonLimpar :disabled="!isButtonEnabled" @click="handleClear" />
    <ButtonPesquisar :disabled="!isButtonEnabled" @click="handleSearch" />
    <RadioButtons @selection-changed="handleSelectionChange" />
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
    RadioButtons
  },
  data() {
    return {
      isButtonEnabled: false,
      tempSelectedOption: null
    };
  },
  methods: {
    handleSelectionChange(selectedOption) {
      this.tempSelectedOption = selectedOption;
      this.isButtonEnabled = !!selectedOption;
    },
    handleClear() {
      this.tempSelectedOption = null;
      this.isButtonEnabled = false;
      this.$store.dispatch('clearSearch');
    },
    handleSearch() {
      if (this.tempSelectedOption) {
        this.$store.dispatch('updateSelectedOption', this.tempSelectedOption);
        this.$store.dispatch('performSearch');
      }
    }
  }
};
</script>
