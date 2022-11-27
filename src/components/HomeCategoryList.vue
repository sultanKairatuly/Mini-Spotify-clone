<template>
  <div class="songs">
    <home-category-song
      v-if="getRecentlyPlayedSongs.length"
      :tracks="getRecentlyPlayedSongs"
    >
      <template #title> Недавно прослушано </template>
    </home-category-song>
    <home-category-song :tracks="getMetalTracks">
      <template #title> Метал </template>
    </home-category-song>
    <home-category-song :tracks="getFreshTracks">
      <template #title> Послушай сегодня </template>
    </home-category-song>
    <home-category-song :tracks="getPhonkTracks">
      <template #title> PHONK </template>
    </home-category-song>
    <home-category-song :tracks="getPopularTracks">
      <template #title> В тренде </template>
    </home-category-song>
    <home-category-mix :mixes="getAllMixes">
      <template #title> Твои лучшие миксы </template>
    </home-category-mix>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HomeCategorySong from "./HomeCategorySong.vue";
import HomeCategoryMix from "./HomeCategoryMix.vue";

export default {
  name: "HomeCategoryList",
  computed: {
    ...mapGetters([
      "getAllTracks",
      "getMetalTracks",
      "getFreshTracks",
      "getPhonkTracks",
      "getPopularTracks",
      "getAllMixes",
      "getRecentlyPlayedSongs",
    ]),
  },
  components: {
    HomeCategorySong,
    HomeCategoryMix,
  },
};
</script>

<style scoped>
.songs {
  padding: 24px 32px 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>
