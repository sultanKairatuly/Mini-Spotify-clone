<template>
  <div class="song-container">
    <div class="song">
      <header class="header">
        <div
          v-if="playlist"
          class="background"
          :style="{
            backgroundColor: headerBackColor,
          }"
        ></div>
        <img class="song-cover" :src="playlist.cover" alt="song cover" />
        <div class="info">
          <div class="type">Плейлист</div>
          <h2 class="title" @click="d">
            {{ playlist.name }}
          </h2>
          <div class="mix-info">
            <div class="app-name">Spotify</div>
            <i class="fa-solid fa-circle circle"></i>
            <div class="track-amount">{{ allTracksAmount }},</div>
            <div class="allDuration">
              {{ sumOfTracksDuration.hours }}ч.
              {{ sumOfTracksDuration.minutes }}мин.
            </div>
          </div>
        </div>
      </header>
      <div class="page-body" v-if="playlist.songs.length >= 1">
        <div class="menu">
          <i
            class="fa-sharp fa-solid play-btn play"
            @click="play()"
            :class="{
              'fa-circle-play': !currentMix.playing,
              'fa-circle-pause': currentMix.playing,
            }"
          >
          </i>
          <i class="fa-regular fa-heart like"></i>
          <i class="fa-solid fa-ellipsis-vertical ellipsis"></i>
        </div>
        <div
          class="content-spacing"
          :class="{
            'search-closed': !isSearch,
          }"
        >
          <div class="content-headers">
            <div class="number headers-item">#</div>
            <div class="name headers-item">
              <div class="headers-title">НАЗВАНИЕ</div>
            </div>
            <i class="fa-regular fa-clock duration headers-item"></i>
          </div>
          <div class="line"></div>
          <div
            class="content-body"
            @mouseenter="show(track)"
            @mouseleave="hide(track)"
            v-for="(track, idx) in playlist.songs"
            :key="track.id"
            @click="openSongPage(track)"
          >
            <audio :ref="`${track.id}`">
              <source :src="`${require(`../assets${track.url}.mp3`)}`" />
            </audio>

            <div
              v-if="!track.hovered && !track.playing"
              class="body-item number track-number"
              :class="{
                green: track === $store.state.currentTrack,
              }"
            >
              {{ trackAmount[idx] }}
            </div>
            <i
              v-if="track.hovered"
              @click.stop="playMixSong(track)"
              class="fa-sharp fa-solid white"
              :class="{
                'fa-play': !track.playing,
                'fa-pause': track.playing,
              }"
            >
            </i>
            <div
              v-if="!track.hovered && track.playing"
              class="body-item track-animation"
            >
              <div class="animation-container">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
            </div>

            <div class="body-item track-info">
              <img class="track-cover" :src="track.cover" alt="track image" />
              <div class="text">
                <div
                  class="track-title"
                  :class="{
                    green: track === $store.state.currentTrack,
                  }"
                >
                  {{ track.title }}
                </div>
                <div class="track-author">{{ track.author }}</div>
              </div>
            </div>
            <i
              class="fa-sharp fa-solid fa-heart track-like"
              @click.stop="addToLiked(track)"
              :class="{ green: isAdded(track) }"
              v-if="track.hovered"
            ></i>
            <div class="body-item track-duration number">
              {{ duration(track.id).minutes }}:{{ duration(track.id).seconds }}
            </div>
          </div>
        </div>
      </div>
      <div class="none-songs__container" v-if="isSearch">
        <div class="none-songs">
          <div class="none__header">
            <div class="section">
              <div class="none-songs__title">
                Давай добавим что-нибудь в твой плейлист
              </div>
              <div class="input">
                <input
                  class="search"
                  placeholder="Поиск треков и выпусков"
                  v-model="filter"
                />
                <i
                  class="fa-regular fa-x little-close"
                  v-if="filter"
                  @click="clearFilter"
                ></i>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div class="close-section">
              <i class="fa-regular fa-x close" @click="isSearch = false"></i>
            </div>
          </div>
          <div class="found">
            <div
              class="found-body"
              v-for="track in foundedSongs"
              :key="track.id"
            >
              <div class="body-item track-info found-item">
                <img
                  class="track-cover"
                  :src="track.cover"
                  alt="track image"
                  :class="{
                    shadow: track.hovered,
                  }"
                />

                <div class="text">
                  <div
                    class="track-title"
                    :class="{
                      green: track === $store.state.currentTrack,
                    }"
                  >
                    {{ track.title }}
                  </div>
                  <div class="track-author">{{ track.author }}</div>
                </div>
                <button
                  class="add"
                  @click="addToPlaylist(track)"
                  :class="{
                    none: isAdded(track),
                  }"
                >
                  Добавить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import { FastAverageColor } from "fast-average-color";

export default {
  name: "PlaylistPage",
  data() {
    return {
      currentMix: null,
      sum: 0,
      isSearch: true,
      headerBackColor: null,
      filter: "",
    };
  },
  mounted() {
    for (let item in this.getAllRefs) {
      if (this.getAllRefs[item][0]) {
        this.getAllRefs[item][0].onloadedmetadata = () => {
          this.sum += this.getAllRefs[item][0].duration;
        };
      }
    }
    console.log("dddawddddd");
    // this.getAverageRGB();
  },

  created() {
    this.currentMix = this.playlist.songs[0] || {};
  },

  methods: {
    ...mapActions([
      "callTrackUpdation",
      "callRefsUpdation",
      "callLikedUpdation",
      "callLikedFiltration",
    ]),
    d() {
      console.log(this.$route.params.playlistID);
    },

    addToPlaylist(track) {
      let counter = 0;
      this.getPlaylists.forEach((p) => {
        if (p.id === this.$route.params.playlistID) {
          p.songs.forEach((t) => {
            if (t.id === track.id) {
              counter++;
            }
          });
          if (counter !== 1) {
            p.songs.push(track);
          }
        }
      });
    },

    isAdded(track) {
      let counter = 0;
      this.getPlaylists.forEach((p) => {
        if (p.id === this.$route.params.playlistID) {
          p.songs.forEach((t) => {
            if (t.id === track.id) {
              counter++;
            }
          });
        }
      });

      return counter !== 0;
    },

    openSongPage(track) {
      this.$router.push(`/${track.id}-${this.durationInMS(track.id)}`);
    },

    clearFilter() {
      this.filter = "";
    },

    play() {
      this.callTrackUpdation(this.currentMix);
      let isPaused = this.getAllRefs[this.currentMix.id][0].paused;

      this.getAllTracks.forEach((item) => {
        item.tracks.forEach((t) => {
          if (t.id !== this.currentMix.id) {
            t.playing = false;
            t.hovered = false;
          }
        });
      });

      for (let key in this.getAllRefs) {
        if (this.getAllRefs[key].duration) {
          this.getAllRefs[key][0].currentTime = 0;
          this.getAllRefs[key][0].pause();
        }
      }

      if (isPaused) {
        this.getAllRefs[this.currentMix.id][0].play();
        this.currentMix.playing = true;
      } else {
        this.getAllRefs[this.currentMix.id][0].pause();
        this.currentMix.playing = false;
      }
    },

    duration(id) {
      let duration = this.getAllRefs[id]?.[0]?.duration;
      return {
        minutes: new Date(duration * 1000).getMinutes(),
        seconds:
          new Date(duration * 1000).getSeconds() > 9
            ? new Date(duration * 1000).getSeconds()
            : `0${new Date(duration * 1000).getSeconds()}`,
      };
    },

    durationInMS(id) {
      return this.getAllRefs[id]?.[0]?.duration;
    },

    playMixSong(track) {
      this.callTrackUpdation(track);
      // this.callAudioUpdation(track.id);
      let isPaused = this.getAllRefs[track.id][0].paused;

      if (isPaused) {
        this.getAllRefs[track.id][0].play();
        track.playing = true;
      } else {
        this.getAllRefs[track.id][0].pause();
        track.playing = false;
      }

      this.mix.songs.forEach((t) => {
        if (t !== this.$store.state.currentTrack) {
          t.playing = false;
          this.getAllRefs[t.id][0].pause();
          this.getAllRefs[t.id][0].currentTime = 0;
        }
      });
    },

    show(track) {
      track.hovered = true;
    },

    hide(track) {
      track.hovered = false;
    },

    handleEndOfTrack(track) {
      track.playing = false;
      track.hovered = false;

      setTimeout(() => {
        if (!this.$store.state.onRepeat) {
          this.getAllRefs[track.id + 1][0].play();

          track.playing = false;
          track.hovered = false;

          this.mix.songs.forEach((item) => {
            if (item.id === track.id + 1) {
              item.playing = true;
              this.$store.state.currentTrack = item;
            }
          });
        } else {
          track.playing = true;
          track.hovered = true;

          this.getAllRefs[track.id][0].play();
        }
      }, 1500);
    },

    // getAverageRGB() {
    //   const fac = new FastAverageColor();
    //   fac
    //     .getColorAsync(`${this.mix.cover}`, {
    //       "Access-Control-Allow-Credentials": true,
    //     })
    //     .then((color) => {
    //       this.headerBackColor = color.rgba;
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
  },

  watch: {
    playlist() {
      console.log("changed!");
    },
  },

  computed: {
    ...mapGetters([
      "getAllTracks",
      "getAllRefs",
      "getAllMixes",
      "getCurrentTrack",
      "getLikedSongs",
      "getPlaylists",
    ]),

    foundedSongs() {
      if (this.filter !== "") {
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
      } else {
        return [];
      }
    },

    playlist() {
      return this.getPlaylists.filter(
        (i) => i.id === this.$route.params.playlistID
      )[0];
    },

    trackAmount() {
      let nums = [];
      for (let i = 1; i <= this.playlist.songs.length; i++) {
        nums.push(i);
      }

      return nums;
    },

    getTracks() {
      return this.$store.state.musics;
    },

    getMixes() {
      let mixArray = this.$store.state.musics.filter((item) => {
        return item.type === "mix";
      })[0];

      return mixArray.mixs;
    },

    allTracksAmount() {
      return `${this.playlist.songs.length} треков`;
    },

    sumOfTracksDuration() {
      let hours = Math.floor(this.sum / 3600);
      let minutes = Math.floor((this.sum - hours * 3600) / 60);

      return {
        hours,
        minutes,
      };
    },
  },
};
</script>

<style scoped>
* {
  z-index: 3;
}

.none {
  display: none;
}

.background {
  background: rgb(82, 82, 82);
  background: linear-gradient(
    180deg,
    rgba(82, 82, 82, 1) 28%,
    rgba(65, 65, 65, 1) 55%,
    rgba(45, 45, 45, 1) 86%
  );
}

.add {
  font-weight: 700;
  border: 1px solid #878787;
  color: #fff;
  position: absolute;
  background-color: transparent;
  border-radius: 500px;
  text-align: center;
  text-decoration: none;
  height: 32px;
  right: 16px;
  text-transform: none;
  user-select: none;
  transform: translate3d(0px, 0px, 0px);
  padding: 3px 15px;
}

.search-closed {
  min-height: 539px;
}

.add:hover {
  transform: scale(1.04);
  border: 1.5px solid #fff;
}

.shadow {
  opacity: 0.6;
}

.found {
  width: 100%;
  margin-top: 24px;
}

.found-item {
  height: 56px;
  border-radius: 4px;
  position: relative;
  padding: 0 12px;
  align-items: center;
}

.found-item:hover {
  background-color: #55555565;
}

.none__header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.input {
  position: relative;
}

.none-songs {
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}
.fa-magnifying-glass {
  z-index: 10;
  position: absolute;
  font-size: 15px;
  color: #b9b9b9;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
}
.little-close {
  z-index: 10;
  position: absolute;
  font-size: 17px;
  color: #b9b9b9;
  top: 50%;
  transform: translateY(-50%);
  right: 13px;
}

.close {
  font-size: 27px;
  color: #b9b9b9;
}
.none-songs__container {
  min-height: 100vh;
  background-color: #121212;
  padding: 0 32px;
}
.none-songs {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.none-songs__title {
  color: #fff;
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 16px;
}
.search {
  padding: 8px 32px;
  background-color: #2c2c2c;
  border: 0;
  border-radius: 4px;
  color: hsla(0, 0%, 100%, 0.7);
  height: 40px;
  opacity: 1;
  font-weight: 300;
  padding: 8px 32px;
  text-overflow: ellipsis;
  transition-timing-function: cubic-bezier(0.3, 0, 0.4, 1);
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
}

.track-like {
  transition: 0.2s ease-in-out;
  font-size: 18px;
  color: #fff;
  margin-right: 50px;
}

.background {
  position: absolute;
  width: 170%;
  height: 140%;
  top: -25px;
  left: -120px;
  z-index: 1;
  filter: blur(50px);
}

.green {
  color: #1ed760;
}

.type {
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
}

.fa-sharp {
  padding: 2px;
}

.mix-author {
  color: #f9ffff;
}
.animation-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 16px;
  width: 16px;
}

.bar {
  height: 1px;
  width: 3px;
  background: #1caa4e;
  margin-right: 1px;
  animation: up 0.6s linear infinite;
}
.grey {
  color: #afb3af;
}

.mix-info {
  margin-top: 15px;
  align-items: center;
  display: flex;
}

.app-name {
  font-size: 14px;

  font-weight: 700;
  color: #fff;
}

.track-amount {
  margin-right: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.allDuration {
  font-size: 14px;
  font-weight: 400;
  color: #a3a9b9;
}

.song-container {
  overflow-x: hidden;
}

.track-info {
  display: flex;
}

.white {
  color: #fff;
  font-size: 15px;
}

.track-cover {
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin: 0px 16px;
}

.content-body {
  border-radius: 10px;
  display: flex;
  padding: 5px 16px;
  margin-bottom: 2px;
  align-items: center;
  justify-content: space-between;
}

.time {
  color: #b4b4b4;
  font-weight: 700;
  font-size: 14px;
}

.content-body:hover {
  background-color: #46463f;
}

.body-item {
  color: #797979;
  font-weight: 500;
}

.description {
  align-items: center;
}

.track-info {
  width: 94%;
}

.track-title {
  color: #fff;
  font-size: 15px;
  font-weight: 500;
}

.track-author {
  font-size: 15px;
  font-weight: 400;
  margin-top: 5px;
  color: #b3b3b3;
}

.song-container {
  padding-left: 230px;
  padding-bottom: 90px;
  background-color: #121212;
}

.play {
  font-size: 60px;
  margin-right: 30px;
}

.content-spacing {
  background-color: #121212;

  display: flex;
  flex-direction: column;
  padding: 0 32px;
}

.content-headers {
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  padding: 0 16px;
}

.name {
  width: 95%;
}

.headers-item {
  color: #b3b3b3;
  font-size: 15px;
  font-weight: 500;
}

.line {
  margin-bottom: 16px;
  height: 1px;
  background-color: #2e2e2d;
  width: 100%;
}

.headers-title {
  font-weight: 500;
  color: #b3b3b3;
  font-size: 14px;
}

.duration {
  font-size: 40px;
}

.ellipsis {
  color: #a4a4a3;
  transform: rotate(90deg);
  font-size: 35px;
  margin-left: 30px;
  transition: 0.1s ease-in-out;
  padding: 10px 15px;
}

.ellipsis:hover {
  color: #fff;
}

.header {
  padding: 84px 20px 20px 20px;
  height: 30vh;
  max-height: 500px;
  min-height: 340px;
  background: #404039;
  display: flex;
  position: relative;
}

.like {
  transition: 0.1s ease-in-out;
  font-size: 35px;
  color: #bbbbba;
}

.like:hover {
  color: #fff;
}

.menu {
  background-color: #121212;

  display: flex;
  justify-content: flex-start;
  padding: 24px 32px;
  align-items: center;
}

.song-cover {
  width: 232px;
  height: 232px;
  margin-right: 24px;
  object-fit: cover;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.description {
  display: flex;
  align-items: center;
}

.circle {
  margin: 0 6px;
  color: #fff;
  font-size: 3px;
}

.author {
  font-weight: 700;
  color: #fff;
  font-size: 13px;
}

.duration {
  font-weight: 500;
  color: #ababaa;
  font-size: 14px;
}

.title {
  font-size: 90px;
  color: #fff;
  margin: 7px 0px 11px 0px;
}

.green {
  color: #1caa4e;
}

@keyframes up {
  0% {
    height: 1px;
  }

  50% {
    height: 16px;
  }

  100% {
    height: 1px;
  }
}

.bar:nth-child(2) {
  animation-delay: 0.3s;
}

.bar:nth-child(3) {
  animation-delay: 0.12s;
}

.bar:nth-child(4) {
  animation-delay: 0.25s;
}

.bar:nth-child(5) {
  animation-delay: 0.44s;
}
</style>
