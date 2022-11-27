<template>
  <div class="song-container">
    <div class="song">
      <header class="header">
        <div class="background"></div>
        <img
          class="song-cover"
          src="../assets/Screenshot_24.png"
          alt="song cover"
        />
        <div class="info">
          <div class="type">Понравившиеся</div>
          <h2 class="title">Любимые треки</h2>
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
      <div class="page-body_container">
        <div class="page-body" v-if="getLikedSongs.length">
          <div class="menu">
            <i
              class="fa-sharp fa-solid play-btn play"
              @click="play()"
              :class="{
                'fa-circle-play': !currentSong?.playing,
                'fa-circle-pause': currentSong?.playing,
              }"
            >
            </i>
          </div>
          <div class="content-spacing">
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
              v-for="(track, idx) in getLikedSongs"
              :key="track.id"
              @click="openSongPage(track)"
            >
              <audio :ref="`${track.id}`" @ended="handleEndOfTrack(track)">
                <source :src="`${require(`../assets${track.url}.mp3`)}`" />
              </audio>

              <div
                v-if="!track.hovered && !track.playing"
                class="body-item number track-number"
                :class="{
                  green: track === $store.state.currentTrack,
                }"
              >
                {{ likedLength[idx] }}
              </div>
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
                {{ duration(track.id).minutes }}:{{
                  duration(track.id).seconds
                }}
              </div>
            </div>
          </div>
        </div>
        <div v-else class="none-liked_container">
          <div class="none-liked">
            <i class="fa-solid fa-music note"></i>
            <h1 class="none-liked_title">
              Здесь появятся треки, которые тебе понравились
            </h1>
            <h4 class="none-liked_description">
              Добавляй треки в медиатеку, нажимая на значок сердечка.
            </h4>
            <button class="find-liked" @click="$router.push('/search')">
              Найти треки
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import addMixin from "../mixins/addToLiked";

export default {
  name: "LikedSongsPage",
  data() {
    return {
      sum: 0,
      currentSong: null,
      likedFromLC: null,
    };
  },
  mixins: [addMixin],
  created() {
    this.currentSong = this.getLikedSongs[0];
    this.likedFromLC = localStorage.getItem("liked");
  },

  mounted() {
    this.callRefsUpdation(this.$refs);
    for (let item in this.getAllRefs) {
      if (this.getAllRefs[item][0]) {
        this.getAllRefs[item][0].onloadedmetadata = () => {
          this.sum += this.getAllRefs[item][0].duration;
        };
      }
    }
  },

  methods: {
    ...mapActions([
      "callTrackUpdation",
      "callRefsUpdation",
      "callLikedUpdation",
      "callLikedFiltration",
    ]),

    openSongPage(track) {
      this.$router.push(`/${track.id}-${this.durations[track.id - 35]}`);
    },

    play() {
      this.callTrackUpdation(this.currentSong);
      let isPaused = this.getAllRefs[this.currentSong.id][0].paused;

      this.getAllTracks.forEach((item) => {
        item.tracks.forEach((t) => {
          if (t.id !== this.currentSong.id) {
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
        this.getAllRefs[this.currentSong.id][0].play();
        this.currentSong.playing = true;
      } else {
        this.getAllRefs[this.currentSong.id][0].pause();
        this.currentSong.playing = false;
      }
    },

    playMixSong(track) {
      this.callTrackUpdation(track);
      let isPaused = this.getAllRefs[track.id][0].paused;
      console.log("plyed!");
      if (isPaused) {
        this.getAllRefs[track.id][0].play();
        track.playing = true;
      } else {
        this.getAllRefs[track.id][0].pause();
        track.playing = false;
      }

      this.getLikedSongs.forEach((t) => {
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
  },

  computed: {
    ...mapGetters([
      "getAllTracks",
      "getAllRefs",
      "getCurrentTrack",
      "getLikedSongs",
    ]),

    likedLength() {
      let nums = [];
      for (let i = 1; i <= this.getLikedSongs.length; i++) {
        nums.push(i);
      }
      return nums;
    },

    getMixes() {
      let mixArray = this.$store.state.musics.filter((item) => {
        return item.type === "mix";
      })[0];

      return mixArray.mixs;
    },

    getLikedSongs() {
      return this.$store.state.liked;
    },

    allTracksAmount() {
      return `${this.$store.state.liked.length} треков`;
    },

    songsOrder() {
      let nums = [];
      for (let i = 1; i < this.getLikedSongs.length; i++) {
        nums.push(i);
      }
      return nums;
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

.note {
  color: #fff;
  font-size: 60px;
  text-align: center;
  width: 100%;
  margin-bottom: 40px;
}

.none-liked_container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 539px;
}
.none-liked_title {
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  margin-bottom: 40px;
}
.none-liked_description {
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
}
.find-liked {
  padding: 8px 32px;
  border-radius: 40px;
  display: block;
  margin: 40px auto;
  background-color: #fff;
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
}

.find-liked:hover {
  transform: scale(1.1);
}

.page-body_container {
  min-height: 539px;
  background-color: #121212;
}

.track-like {
  transition: 0.3s ease-in-out;
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
  background: rgb(81, 58, 158);
  background: linear-gradient(
    180deg,
    rgba(81, 58, 158, 1) 31%,
    rgba(61, 43, 118, 1) 51%,
    rgba(48, 34, 94, 1) 69%,
    rgba(42, 30, 81, 1) 98%
  );
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
