<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
   <div class="container-fluid">
     <a class="navbar-brand" href="#">Prueba2</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/nuestrasnoticias">Noticias</router-link>
        <router-link class="nav-link" to="/clientes">clientes</router-link>
        <router-link class="nav-link" to="/socket">Indicador</router-link>
      </div>
     </div>
   </div>
  </nav>
  <div class="container mt-3">
    <router-view/>
  </div>
</template>

<style>

</style>
