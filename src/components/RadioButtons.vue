<template>
  <div>
    <span class="filtro-texto">Filtro </span>
    <label>
      <input type="radio" value="bobinas" v-model="selectedType" @change="emitChange">
      <span class="radio-label"></span>
      Bobinas
    </label>
    <label>
      <input type="radio" value="fardos" v-model="selectedType" @change="emitChange">
      <span class="radio-label"></span>
      Fardos
    </label>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'RadioButtons',
  computed: {
    ...mapState(['selectedOption']),
    selectedType: {
      get() {
        return this.selectedOption;
      },
      set(value) {
        this.updateSelectedOption(value);
        this.$emit('selection-changed', value);
      }
    }
  },
  methods: {
    ...mapActions(['updateSelectedOption']),
    emitChange() {
      this.updateSelectedOption(this.selectedType);
    }
  }
};
</script>
