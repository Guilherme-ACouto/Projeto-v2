<template>
  <div>
    <label>
      <input type="radio" value="bobina" v-model="selectedOption" />
      <span class="radio-label"></span>
    </label>
    <label>
      <input type="radio" value="fardo" v-model="selectedOption" />
      <span class="radio-label"></span>
    </label>
    
    <div>
      Filtro: {{ selectedOption }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioButtons',
  data() {
    return {
      selectedOption: '', // Armazena a opção selecionada
    };
  }
};
</script>

