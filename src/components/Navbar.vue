<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" :to="{ name: 'inicio' }"
        >Inicio</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'busquedas' }" class="nav-link"
              >Búsquedas</router-link
            >
          </li>
          <li class="nav-item active"></li>
          <li class="nav-item active">
            <router-link :to="{ name: 'ventas' }" class="nav-link"
              >Ventas</router-link
            >
          </li>
          <li class="nav-item active"></li>
          <li class="nav-item active">
            <router-link :to="{ name: 'total' }" class="nav-link"
              >Total</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style></style>
