<template>
  <Header></Header>
  <navbar />
  <player />
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Player from "./components/Player.vue";
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",

  components: {
    Navbar,
    Player,
    Header,
  },

  computed: {
    homePageWidth() {
      return `${window.innerWidth - 241}px`;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo:wght@100;200&family=Roboto:wght@300;400;500;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.number {
  font-family: "Archivo", sans-serif;
  font-weight: 100;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #121212;
}

::-webkit-scrollbar-thumb {
  background: #5d5f5d;
  opacity: 0.2;
  width: 12px;
  height: 105px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(107, 107, 107);
}

h1,
h2,
h3,
h4,
h5,
h6,
div,
p,
label,
span {
  font-family: "Roboto", sans-serif;
}

.play-btn {
  background-color: #000;
  font-size: 50px;
  color: #1ed760;
  cursor: default;
  border-radius: 50px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
}

.play:hover {
  color: #23df64;
}
</style>
