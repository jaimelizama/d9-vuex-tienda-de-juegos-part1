<template>
  <div id="busquedas" class="container">
    <Inicio></Inicio>
    <!-- Filtro de Juegos -->
    <div class="mt-5 text-center">
      <h4>Filtro de Juegos</h4>
      <input
        type="text"
        placeholder="Escriba el nombre del producto"
        style="width: 500px"
        :value="$store.state.busqueda"
        @input="$store.dispatch('setBusqueda', $event.target.value)"
      />

      <Juegos
        v-if="$store.getters.juegosSegunBusqueda.length > 0"
        :juegos="$store.getters.juegosSegunBusqueda"
      />
    </div>
    <!-- Cantidad de Juegos Disponibles -->
    <div class="mt-5 text-center">
      <h4>Cantidad de Juegos Totales y Stock Total</h4>
      <ul class="mt-3">
        <li>Juegos Totales: {{ $store.state.juegos.length }}</li>
        <li>Stock Total: {{ $store.getters.stockTotal }}</li>
      </ul>
    </div>
    <!-- Listado de Juegos -->
    <div class="mt-5 text-center">
      <h4>Listado de Juegos</h4>
      <Juegos :juegos="$store.state.juegos"></Juegos>
    </div>
  </div>
</template>

<script>
import Inicio from '../components/Inicio.vue'
import Juegos from '../components/Juegos.vue'
export default {
  name: 'Busquedas',
  components: { Inicio, Juegos }
}
</script>

<style></style>
