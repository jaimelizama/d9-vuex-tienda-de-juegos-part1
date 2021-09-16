<template>
  <div class="text-center">
    <!-- <h4>Listado de Juegos</h4> -->
    <ul class="mt-3">
      <li
        v-for="juego in juegos"
        :key="juego.codigo"
        :style="{ 'background-color': juego.color }"
      >
        {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} |
        {{ juego.precio }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Juegos',
  props: {
    juegos: { type: Array, require: true }
  }
}
</script>

<style></style>
