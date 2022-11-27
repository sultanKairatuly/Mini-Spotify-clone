<template>
  <div class="song-container">
    <div class="song">
      <header class="header">
        <div
          class="background"
          :style="{
            backgroundColor: headerBackColor,
          }"
        ></div>

        <img
          class="song-cover"
          :src="track.cover"
          alt="song cover"
          @click="$router.push(backRoute)"
        />
        <div class="info">
          <div class="type">Плейлист</div>
          <h2 class="title">
            {{ track.title }}
          </h2>
          <div class="description">
            <div class="author">{{ track.author }}</div>
            <i class="fa-solid fa-circle circle"></i>
            <div class="time">
              {{ duration.minutes }}мин. {{ duration.seconds }}сек.
            </div>
          </div>
        </div>
      </header>
      <div class="menu">
        <i
          class="fa-sharp fa-solid play-btn play"
          @click="play()"
          :class="{
            'fa-circle-play': !track.playing,
            'fa-circle-pause': track.playing,
          }"
          :ref="`${track.title}`"
        >
        </i>
        <i class="fa-regular fa-heart like"></i>
        <i class="fa-solid fa-ellipsis-vertical ellipsis"></i>
        <audio :ref="`${track.id}`" @ended="handleEndOfTrack(track)">
          <source :src="`${require(`../assets${track.url}.mp3`)}`" />
        </audio>
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
          @mouseenter="track.hovered = true"
          @mouseleave="track.hovered = false"
        >
          <div
            v-if="!track.hovered && !track.playing"
            class="body-item number track-number"
            style="width: 16.79px"
          >
            1
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
            @click="play(track)"
            class="fa-sharp fa-solid white"
            :class="{
              'fa-sharp fa-solid fa-play': !track.playing,
              'fa-sharp fa-solid fa-pause': track.playing,
            }"
          >
          </i>
          <div class="body-item track-info">
            <div
              class="track-title"
              :class="{
                green: track.id === $store.state.currentTrack?.id,
              }"
            >
              {{ track.title }}
            </div>
            <div class="track-author">{{ track.author }}</div>
          </div>
          <div class="body-item track-duration number">
            {{ duration.minutes }}:{{ duration.seconds }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { FastAverageColor } from "fast-average-color";

export default {
  name: "SongPage",
  data() {
    return {
      track: null,
      showed: false,
      headerBackColor: null,
      backRoute: history.state.back,
    };
  },

  mounted() {
    let clone = this.$refs;
    let arr = Object.entries(clone);
    arr.forEach((item) => {
      item[1] = [item[1]];
    });

    this.callRefsUpdation(Object.fromEntries(arr));
    this.getAverageRGB();
  },

  methods: {
    ...mapActions([
      "callTrackUpdation",
      "callRecentUpdation",
      "callRefsUpdation",
    ]),

    getAverageRGB() {
      const fac = new FastAverageColor();
      fac
        .getColorAsync(`${this.track.cover}`, {
          "Access-Control-Allow-Credentials": true,
        })
        .then((color) => {
          this.headerBackColor = color.rgba;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    play() {
      this.callTrackUpdation(this.track);
      let isPaused = this.$refs[this.track.id].paused;

      if (isPaused) {
        this.$refs[this.track.id].play();
        this.track.playing = true;
      } else {
        this.$refs[this.track.id].pause();
        this.track.playing = false;
      }

      if (this.track !== this.$store.state.currentTrack) {
        this.track = false;
        this.getAllRefs[this.track.id][0].pause();
        this.getAllRefs[this.track.id][0].currentTime = 0;
      }
    },
  },
  created() {
    let currentId = +this.$route.params.id.split("-")[0];
    this.getAllTracks.forEach((item) => {
      if (item.mixs) {
        item.mixs.forEach((el) => {
          el.songs.forEach((t) => {
            if (t.id === currentId) {
              this.track = t;
            }
          });
        });
      } else {
        item.tracks.forEach((t) => {
          if (t.id === currentId) {
            this.track = t;
          }
        });
      }
    });
  },

  computed: {
    ...mapGetters(["getAllTracks", "getAllRefs"]),
    duration() {
      let duration = Math.floor(this.$route.params.id.split("-")[1]);
      return {
        minutes: new Date(duration * 1000).getMinutes(),
        seconds:
          new Date(duration * 1000).getSeconds() > 9
            ? new Date(duration * 1000).getSeconds()
            : `0${new Date(duration * 1000).getSeconds()}`,
      };
    },
  },
};
</script>

<style scoped>
* {
  z-index: 2;
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
.white {
  color: #fff;
  font-size: 15px;
}
.type {
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 15px;
}

.content-body {
  border-radius: 10px;
  display: flex;
  padding: 10px 16px;
  align-items: center;
  margin-bottom: 32px;
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

.track-info {
  width: 94%;
  margin-left: 16px;
}
.track-title {
  color: #fff;
  font-size: 15px;
  font-weight: 500;
}
.track-author {
  font-size: 13px;
  font-weight: 700;
  margin-top: 5px;
}
.song-container {
  padding-left: 230px;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #1a1a17;
}
.play {
  font-size: 60px;
  margin-right: 30px;
}
.content-spacing {
  background-color: #1a1a17;
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
  background-color: #1a1a17;
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
  box-shadow: 0px 0px 26px 2px rgba(0, 0, 0, 0.2);
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
.header {
  position: relative;
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
</style>
