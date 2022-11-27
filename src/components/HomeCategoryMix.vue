<template>
  <div class="metal-container">
    <h2 class="category_title">
      <slot name="title"></slot>
    </h2>
    <div class="metal category">
      <div
        v-for="mix in mixes"
        :key="mix.name"
        @click="openMixPage(mix)"
        class="song-card"
      >
        <img :src="mix.cover" alt="music" class="music-cover" />
        <h3 v-if="mix.title.length <= 15" class="music_title">
          {{ mix.title }}
        </h3>
        <h3 v-else class="music_title">
          {{ mix.title.split("").slice(0, 15).join("") + "..." }}
        </h3>
        <h4 class="music_author">
          <p v-if="mix.author.split(',').length < 5">{{ mix.author }}</p>
          <p v-else>
            {{ mix.author.split(",").splice(0, 3).join(",") }} и не только
          </p>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCatehoryMix",
  data() {
    return {};
  },

  props: {
    mixes: {
      type: Array,
      required: true,
    },
  },

  methods: {
    openMixPage(mix) {
      this.$router.push(`/mixes/${mix.name}`);
    },
  },
};
</script>

<style scoped>
.play {
  position: absolute;
  bottom: 115px;
  right: 20px;
  transition: 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
}
.showed {
  opacity: 1;
  visibility: visible;
  transform: translateY(0px);
}

.music-cover {
  border-radius: 10px;
  width: 148px;
  height: 148px;
  margin-bottom: 17px;
  object-fit: cover;
}

.music_title {
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  padding: 0 0 4px 0;
}

.music_author {
  color: #b3b3b3;
  font-weight: 400;
  font-size: 14px;
  padding-bottom: 5px;
  margin-top: 10px;
}

.song-card {
  position: relative;
  height: 270px;
  width: 180px;
  display: flex;
  isolation: isolate;
  padding: 16px;
  flex-direction: column;
  border-radius: 5px;
  background-color: #181818;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
}

.song-card:hover {
  background-color: #2b2b2b5d;
}
.category_title {
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 24px;
  color: #fff;
}

.category {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  column-gap: 24px;
  row-gap: 24px;
  flex-wrap: wrap;
}
</style>
