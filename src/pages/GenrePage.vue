<template>
  <div class="container">
    <header class="header">
      <div class="title">
        {{ currentGenre.title }}
      </div>
    </header>
    <div class="songs">
      <home-category-song :tracks="currentGenre.songs[0].subsongs">
        <template #title>
          {{ currentGenre.songs[0].subtitle }}
        </template>
      </home-category-song>
      <home-category-song :tracks="currentGenre.songs[1].subsongs">
        <template #title>
          {{ currentGenre.songs[1].subtitle }}
        </template>
      </home-category-song>
    </div>
  </div>
</template>

<script>
import HomeCategorySong from "../components/HomeCategorySong.vue";
import { mapGetters } from "vuex";

export default {
  name: "GenrePage",
  data() {
    return {
      currentGenre: null,
    };
  },
  components: { HomeCategorySong },
  created() {
    this.getAllGenres.forEach((item) => {
      if (item.genre === this.$route.params.genreName) {
        this.currentGenre = item;
      }
    });
  },
  computed: {
    ...mapGetters(["getAllTracks", "getAllGenres"]),
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  padding-left: 230px;
  padding-bottom: 110px;
  background: #0b0b0b;
}

.songs {
  padding: 24px 32px 0;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
}

.header {
  height: 290px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background: rgb(20, 20, 20);
  background: linear-gradient(
    173deg,
    rgba(20, 20, 20, 1) 8%,
    rgba(17, 17, 17, 1) 22%,
    rgba(17, 17, 17, 1) 50%,
    rgba(12, 12, 12, 1) 78%
  );
}
.title {
  font-size: 100px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 50px;
  margin-left: 30px;
}
</style>
