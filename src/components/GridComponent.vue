<template>
  <div class="grid-component">
    <table v-if="searchResult && columns.length > 0 && displayedItems.length > 0">
      <thead>
        <tr>
          <th 
            v-for="(column, index) in columns" 
            :key="index" 
            :class="headerClass"
          >
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(item, index) in displayedItems" 
          :key="index"
        >
          <td 
            v-for="(column, colIndex) in columns" 
            :key="colIndex"
          >
            {{ item[column] || '' }}
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Sem resultado</p>

    <!-- Popup para fardos sem itens -->
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <p>Não há itens para serem exibidos.</p>
        <button @click="closePopup">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { bobinas } from '@/bobinasData.js'; // Importa os dados das bobinas
import { fardos } from '@/fardosData.js'; // Certifique-se que o nome do arquivo está correto

export default {
  name: 'GridComponent',
  computed: {
    ...mapState(['searchResult']),
    columns() {
      return this.searchResult === 'bobinas' 
        ? this.bobinaColumns 
        : this.searchResult === 'fardos' 
          ? this.fardoColumns 
          : [];
    },
    headerClass() {
      return this.searchResult === 'bobinas' 
        ? 'table-header-bobinas' 
        : 'table-header-fardos';
    },
    displayedItems() {
      // Mostra todos os itens sem limitação
      return this.searchResult === 'bobinas' 
        ? this.bobinas 
        : this.searchResult === 'fardos' 
          ? this.fardos 
          : [];
    }
  },
  data() {
    return {
      showPopup: false,
      bobinaColumns: [
        'Bobina', 'Bobina Mãe', 'Sta. Atual', 'Sta. Sit. Atual', 'Sta. PA Volume',
        'Contr. Reg.', 'Pátio', 'Pilha', 'Data Atualização', 'Qtd. Dia 1',
        'Ponto Entrega', 'Dt. Liberação', 'Qtd. Dia 2', 'Dt. Rendimento',
        'Qtd. Dia 3', 'Dt. Entrada no PA', 'Qtd. Dia 4', 'Usuário'
      ],
      fardoColumns: [
        'Num Fardo', 'Fardo Pai', 'Sta. Atual', 'Sta. Sit. Atual', 'Sta. PA Volume',
        'Contr. Reg. Elim.', 'Pátio', 'Pilha', 'Dt. Atualização', 'Qtd. Dia 1',
        'Sigla Atual', 'Cód. Clas. Qual.', 'Dt. Conf. Embalagem', 'Qtd. Dia 2',
        'Dt. Lib. Inspeção', 'Qtd. Dia 3', 'Dt. Rendimento', 'Dt. Dia',
        'Dt. Entrada no PA', 'Qtd. Dia 4', 'Usuário'
      ],
      bobinas: bobinas, // Usa os dados importados de bobinas
      fardos: fardos,   // Usa os dados importados de fardos
    };
  },
  watch: {
    searchResult(newVal) {
      // Exibe o popup se não houver itens para fardos
      this.showPopup = (newVal === 'fardos' && this.displayedItems.length === 0);
    }
  },
  methods: {
    closePopup() {
      this.showPopup = false;
    }
  }
};
</script>
