<template>
  <div class="header-footer">
    <header>
      <slot name="header"></slot> <!-- Slot para o cabeçalho -->
    </header>
    <footer>
      <slot name="footer"></slot> <!-- Slot para o rodapé -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
};
</script>
