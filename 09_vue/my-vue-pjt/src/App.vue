<template>
  <div id="app">
    <h1 style="font-family: 'Rubik Bubbles', cursive; margin-top:20px ">Tweedles Movie</h1>
    <nav>
      <router-link to="/">MovieView</router-link> |
      <router-link to="/random">RandomView</router-link> |
      <router-link to="/watch-list">WatchListView</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding-top: 10px;
  padding-bottom: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
