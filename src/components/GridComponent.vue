<template>
  <div class="grid-component">
    <table v-if="searchResult && columns.length > 0 && displayedItems.length > 0">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index" :class="headerClass">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in displayedItems" :key="index">
          <td v-for="(column, colIndex) in columns" :key="colIndex">{{ item[column] || '' }}</td>
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

export default {
  computed: {
    ...mapState(['searchResult']),
    columns() {
      return this.searchResult === 'bobinas' ? this.bobinaColumns :
             this.searchResult === 'fardos' ? this.fardoColumns : [];
    },
    headerClass() {
      return this.searchResult === 'bobinas' ? 'table-header-bobinas' : 'table-header-fardos';
    },
    displayedItems() {
      return this.searchResult === 'bobinas' ? this.bobinas.slice(0, 5) :
             this.searchResult === 'fardos' ? this.fardos : [];
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
      bobinas: [
        { Bobina: 'B001', 'Bobina Mãe': 'BM001', 'Sta. Atual': 'OK', 'Sta. Sit. Atual': 'Ativa', 'Sta. PA Volume': '50m', 'Contr. Reg.': 'CR001', 'Pátio': 'Pátio 1', 'Pilha': 'Pilha A', 'Data Atualização': '2024-08-01', 'Qtd. Dia 1': '100', 'Ponto Entrega': 'Ponto 1', 'Dt. Liberação': '2024-08-02', 'Qtd. Dia 2': '100', 'Dt. Rendimento': '2024-08-03', 'Qtd. Dia 3': '100', 'Dt. Entrada no PA': '2024-08-04', 'Qtd. Dia 4': '100', 'Usuário': 'Usuário 1' },
        { Bobina: 'B002', 'Bobina Mãe': 'BM002', 'Sta. Atual': 'OK', 'Sta. Sit. Atual': 'Ativa', 'Sta. PA Volume': '55m', 'Contr. Reg.': 'CR002', 'Pátio': 'Pátio 2', 'Pilha': 'Pilha B', 'Data Atualização': '2024-08-02', 'Qtd. Dia 1': '200', 'Ponto Entrega': 'Ponto 2', 'Dt. Liberação': '2024-08-03', 'Qtd. Dia 2': '200', 'Dt. Rendimento': '2024-08-04', 'Qtd. Dia 3': '200', 'Dt. Entrada no PA': '2024-08-05', 'Qtd. Dia 4': '200', 'Usuário': 'Usuário 2' },
        { Bobina: 'B003', 'Bobina Mãe': 'BM003', 'Sta. Atual': 'OK', 'Sta. Sit. Atual': 'Ativa', 'Sta. PA Volume': '60m', 'Contr. Reg.': 'CR003', 'Pátio': 'Pátio 3', 'Pilha': 'Pilha C', 'Data Atualização': '2024-08-03', 'Qtd. Dia 1': '300', 'Ponto Entrega': 'Ponto 3', 'Dt. Liberação': '2024-08-04', 'Qtd. Dia 2': '300', 'Dt. Rendimento': '2024-08-05', 'Qtd. Dia 3': '300', 'Dt. Entrada no PA': '2024-08-06', 'Qtd. Dia 4': '300', 'Usuário': 'Usuário 3' },
        { Bobina: 'B004', 'Bobina Mãe': 'BM004', 'Sta. Atual': 'OK', 'Sta. Sit. Atual': 'Ativa', 'Sta. PA Volume': '65m', 'Contr. Reg.': 'CR004', 'Pátio': 'Pátio 4', 'Pilha': 'Pilha D', 'Data Atualização': '2024-08-04', 'Qtd. Dia 1': '400', 'Ponto Entrega': 'Ponto 4', 'Dt. Liberação': '2024-08-05', 'Qtd. Dia 2': '400', 'Dt. Rendimento': '2024-08-06', 'Qtd. Dia 3': '400', 'Dt. Entrada no PA': '2024-08-07', 'Qtd. Dia 4': '400', 'Usuário': 'Usuário 4' },
        { Bobina: 'B005', 'Bobina Mãe': 'BM005', 'Sta. Atual': 'OK', 'Sta. Sit. Atual': 'Ativa', 'Sta. PA Volume': '70m', 'Contr. Reg.': 'CR005', 'Pátio': 'Pátio 5', 'Pilha': 'Pilha E', 'Data Atualização': '2024-08-05', 'Qtd. Dia 1': '500', 'Ponto Entrega': 'Ponto 5', 'Dt. Liberação': '2024-08-06', 'Qtd. Dia 2': '500', 'Dt. Rendimento': '2024-08-07', 'Qtd. Dia 3': '500', 'Dt. Entrada no PA': '2024-08-08', 'Qtd. Dia 4': '500', 'Usuário': 'Usuário 5' }
      ],
      fardos: []
    };
  },
  watch: {
    searchResult(newVal) {
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


