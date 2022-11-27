<template>
  <div class="search-container">
    <div class="search">
      <header class="header">
        <div class="header-content">
          <input
            type="text"
            class="search-input"
            placeholder="Что хочешь послушать?"
            v-model="filter"
          />
          <div
            class="close"
            @click="clearInput"
            :class="{
              filled: !!filter,
            }"
          ></div>
        </div>
      </header>
      <div class="track-list" v-if="foundedSongs.length >= 1">
        <transition-group name="list">
          <home-category-song
            v-if="filter"
            :tracks="foundedSongs"
            class="card-list"
            :style="visibility"
          >
            <template #title>Найденные песни</template>
          </home-category-song>
          <song-card-list v-else />
        </transition-group>
      </div>
      <div class="not-found" v-else>
        <div class="warning">
          <h1 class="not-found_title">
            По запросу «{{ filter }}» ничего не найдено
          </h1>
          <h3 class="not-found_subtitle">
            Проверь, нет ли опечаток, сократи запрос или перефразируй его.
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategorySong from "./HomeCategorySong.vue";
import SongCardList from "./SongCardList.vue";
import { mapGetters } from "vuex";

export default {
  name: "SearchTracks",
  data() {
    return {
      filter: "",
      isEmpty: true,
      visibility: {
        visibility: "hidden",
        opacity: "0",
      },
    };
  },

  components: {
    HomeCategorySong,
    SongCardList,
  },

  computed: {
    ...mapGetters(["getAllTracks"]),

    foundedSongs() {
      let foundTracks = [];
      this.getAllTracks.forEach((item) => {
        if (item.mixs) {
          item.mixs.forEach((el) => {
            el.songs.forEach((t) => {
              if (t.title.toLowerCase().includes(this.filter.toLowerCase())) {
                foundTracks.push(t);
              }
            });
          });
        } else {
          item.tracks.forEach((t) => {
            if (t.title.toLowerCase().includes(this.filter.toLowerCase())) {
              foundTracks.push(t);
            }
          });
        }
      });

      return foundTracks;
    },
  },

  methods: {
    clearInput() {
      this.filter = "";
    },
  },

  watch: {
    filter() {
      this.visibility = {
        visibility: "hidden",
        opacity: "0",
      };

      setTimeout(() => {
        this.visibility = {
          visibility: "visible",
          opacity: "1",
        };
      }, 200);
    },
  },
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.header-content {
  width: fit-content;
  position: relative;
}
.search-container {
  padding-left: 230px;
}

.search {
  padding-top: 60px;
}

.warning {
  margin: 10% auto;
}
.not-found_title {
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 20px;
}

.not-found_subtitle {
  color: #e6e6e6;
  font-weight: 500;
  text-align: center;
  font-size: 16px;
}
.track-list {
  margin-left: 32px;
  margin-top: 24px;
}

.card-list {
  transition: 0.2s ease-in-out;
}
.search {
  background-color: #121212;
  min-height: 100vh;
}
.header {
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 50px;
}

.close {
  width: 40px;
  height: 30px;
  position: absolute;
  right: 15px;
  bottom: 2px;
}

.filled {
  background-image: url("../assets/icons8-close-50.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 10px center;
}

.search-input {
  font-size: 20px;
  border: none;
  outline: none;
  font-weight: 300;
  padding: 6px 48px;
  border-radius: 40px;
  background-image: url("../assets/icons8-search.svg");
  background-repeat: no-repeat;
  background-size: 30px 30px;
  background-position: 10px center;
}

.body {
  padding: 0 32px;
}
</style>
