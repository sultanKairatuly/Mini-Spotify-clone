<template>
  <h1>111233333333333333333333333333333333333333333333213</h1>
</template>

<script>
export default {
  name: "PlayerPage",
};
</script>
<!-- <template>
  <div v-if="getCurrentTrack" class="player">
    <div class="player-item">
      <img :src="getCurrentTrack.cover" class="cover" @click="handler" alt="" />
      <div class="info">
        <div class="title">{{ getCurrentTrack.title }}</div>
        <div class="author">{{ getCurrentTrack.author }}</div>
      </div>
      <i
        class="fa-sharp fa-solid fa-heart track-like"
        @click.stop="addToLiked()"
        :class="{ green: isAdded() }"
      ></i>
    </div>
    <div class="player-item player-nav">
      <nav class="nav">
        <i
          class="fa-solid fa-backward arrow previous"
          @click="changeToPrevious"
        >
        </i>
        <i
          class="fa-sharp fa-solid white"
          :class="{
            'fa-play': !getCurrentTrack.playing,
            'fa-pause': getCurrentTrack.playing,
          }"
          @click="play"
        >
        </i>
        <i class="fa-solid fa-forward arrow next" @click="changeToNext"> </i>
        <i
          class="fa-solid fa-rotate-right repeat"
          :class="{
            green: $store.state.onRepeat,
          }"
          @click="changeRepeat"
        >
        </i>
      </nav>
      <div class="audio">
        <div class="time current">
          {{ currentDuration.minutes }}:{{ currentDuration.seconds }}
        </div>
        <input
          @change="changeAudioTime"
          @input="updateInputColor"
          type="range"
          v-model="currentPlayerValue"
          :max="this.getFullDuration"
          min="0"
          class="player-input"
          :style="{
            background: inputBackground,
          }"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        />
        <div class="time end">
          {{ duration.minutes }}:{{ duration.seconds }}
        </div>
      </div>
    </div>
    <div class="player-item"></div>
    <audio :ref="`${getCurrentTrack.id}`" @ended="handelEndOfTrack">
      <source :src="`${require(`../assets${getCurrentTrack.url}.mp3`)}`" />
    </audio>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import addMixin from "../mixins/addToLiked";

export default {
  name: "AudioPlayer",
  data() {
    return {
      currentPlayerValue: 0,
      inputBackground: "",
      isHovered: false,
      added: false,
    };
  },

  mounted() {
    if (this.getCurrentTrack) {
      this.currentPlayerValue =
        this.getAllRefs[this.getCurrentTrack?.id]?.[0].currentTime;
    }

    console.log(this.getCurrentTrack);
    console.log(JSON.parse(localStorage.getItem("currentTrack")));
  },
  mixins: [addMixin],

  methods: {
    ...mapActions([
      "callTrackUpdation",
      "callRefsUpdation",
      "callLikedUpdation",
      "callLikedFiltration",
    ]),

    changeToNext() {
      let nextTrack;
      this.getAllTracks.forEach((item) => {
        if (item.mixs) {
          item.mixs.forEach((item) => {
            item.songs.forEach((t) => {
              if (t.id === this.getCurrentTrack.id + 1) {
                nextTrack = t;
                t.playing = true;
                t.hovered = false;
              }
            });
          });
        } else {
          item.tracks.forEach((t) => {
            if (t.id === this.getCurrentTrack.id + 1) {
              nextTrack = t;
              t.playing = true;
              t.hovered = true;
            }
          });
        }
      });

      if (nextTrack) {
        this.getCurrentTrack.playing = false;
        this.getCurrentTrack.hovered = false;
        this.getAllRefs[this.getCurrentTrack.id][0].pause();
        this.getAllRefs[this.getCurrentTrack.id][0].currentTime = 0;
        this.$store.state.onRepeat = false;

        this.getAllRefs[this.getCurrentTrack.id + 1][0].play();
        this.getAllRefs[this.getCurrentTrack.id + 1][0].currentTime = 0;
        this.callTrackUpdation(nextTrack);
      } else {
        return;
      }
    },

    changeToPrevious() {
      let previousTrack;
      this.getAllTracks.forEach((item) => {
        if (item.mixs) {
          item.mixs.forEach((item) => {
            item.songs.forEach((t) => {
              if (t.id === this.getCurrentTrack.id - 1) {
                previousTrack = t;
                t.playing = true;
                t.hovered = false;
              }
            });
          });
        } else {
          item.tracks.forEach((t) => {
            if (t.id === this.getCurrentTrack.id - 1) {
              previousTrack = t;
              t.playing = true;
              t.hovered = true;
            }
          });
        }
      });

      if (previousTrack) {
        this.getCurrentTrack.playing = false;
        this.getCurrentTrack.hovered = false;
        this.getAllRefs[this.getCurrentTrack.id][0].pause();
        this.getAllRefs[this.getCurrentTrack.id][0].currentTime = 0;
        this.$store.state.onRepeat = false;

        this.getAllRefs[this.getCurrentTrack.id - 1][0].play();
        this.getAllRefs[this.getCurrentTrack.id - 1][0].currentTime = 0;
        this.callTrackUpdation(previousTrack);
      } else {
        return;
      }
    },

    changeRepeat() {
      this.callRepeatUpdation(this.$store.state.onRepeat);
    },

    play() {
      this.callTrackUpdation(this.getCurrentTrack);
      let isPaused = this.getAllRefs[this.getCurrentTrack?.id][0].paused;

      this.getAllTracks.forEach((item) => {
        item.tracks.forEach((t) => {
          if (t.id !== this.getCurrentTrack.id) {
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
        this.getAllRefs[this.getCurrentTrack?.id][0].play();
        this.getCurrentTrack.playing = true;
      } else {
        this.getAllRefs[this.getCurrentTrack.id][0].pause();
        this.getCurrentTrack.playing = false;
      }
    },

    handler() {
      console.log(this.getAllRefs[this.getCurrentTrack.id][0].currentTime);
      this.currentPlayerValue = Math.floor(
        this.getAllRefs[this.getCurrentTrack.id][0].currentTime
      );
    },
    changeAudioTime() {
      this.getAllRefs[this.getCurrentTrack.id][0].currentTime =
        this.currentPlayerValue;
    },

    updateS() {
      setInterval(() => {
        this.currentPlayerValue =
          this.getAllRefs[this.getCurrentTrack?.id]?.[0].currentTime;
        let value =
          ((this.currentPlayerValue - 0) / (this.getFullDuration - 0)) * 100;
        let color;
        if (this.isHovered) {
          color = `linear-gradient(90deg, green ${value}%, #5e5e5e ${value}%)`;
        } else {
          color = `linear-gradient(90deg, white ${value}%, #5e5e5e ${value}%)`;
        }
        this.inputBackground = color;
      }, 1000);
    },

    updateInputColor(e) {
      let event = e;
      let value =
        ((event.target.value - event.target.min) /
          (event.target.max - event.target.min)) *
        100;
      let color;
      if (this.isHovered) {
        color = `linear-gradient(90deg, green ${value}%, #5e5e5e ${value}%)`;
      } else {
        color = `linear-gradient(90deg, white ${value}%, #5e5e5e ${value}%)`;
      }
      this.inputBackground = color;
    },
  },

  computed: {
    ...mapGetters([
      "getCurrentTrack",
      "getAllRefs",
      "getAllTracks",
      "getLikedSongs",
    ]),
    duration() {
      let duration = this.getAllRefs[this.getCurrentTrack?.id]?.[0].duration;
      return {
        minutes: new Date(duration * 1000).getMinutes(),
        seconds:
          new Date(duration * 1000).getSeconds() <= 9
            ? `0${new Date(duration * 1000).getSeconds()}`
            : new Date(duration * 1000).getSeconds(),
      };
    },

    getFullDuration() {
      return Math.floor(
        this.getAllRefs[this.getCurrentTrack?.id]?.[0].duration
      );
    },

    currentDuration() {
      return {
        minutes: new Date(this.currentPlayerValue * 1000).getMinutes(),
        seconds:
          new Date(this.currentPlayerValue * 1000).getSeconds() <= 9
            ? `0${new Date(this.currentPlayerValue * 1000).getSeconds()}`
            : new Date(this.currentPlayerValue * 1000).getSeconds(),
      };
    },
  },

  watch: {
    getCurrentTrack(newValue) {
      console.log(newValue);

      this.updateS();
      this.currentPlayerValue = 0;
    },
  },
};
</script>

<style scoped>
.track-like {
  transition: 0.2s ease-in-out;
  font-size: 18px;
  color: #fff;
  margin-right: 50px;
}
.green {
  color: #1ed760;
}
.audio {
  display: flex;
  align-items: center;
  column-gap: 7px;
}
.repeat {
  font-size: 20px;
  color: #bababa;
}

.repeat:hover {
  color: #fff;
}
.green {
  color: #1caa4e;
}

.green:hover {
  color: #22b957;
}

.arrow {
  color: #bababa;
  transition: 0.1s ease-in-out;
}

.arrow:hover {
  color: #fff;
}

.nav {
  display: flex;
  column-gap: 30px;
  align-items: center;
  margin-bottom: 8px;
}
.player-input {
  width: 627px;
  height: 4px;
  position: relative;
  background: linear-gradient(90deg, #5e5e5e 60%, #5e5e5e 60%);
  border-radius: 10px;
  appearance: none;
}

.player-input::-webkit-slider-thumb {
  width: 13px;
  height: 13px;
  background-color: #fff;
  border-radius: 100%;
  appearance: none;
}

.time {
  font-size: 13px;
  color: #5e5e5e;
  transition: 0.3s ease-in-out;
}

.player-item {
  width: 33.3%;
}

.white {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #000;
  width: 32px;
  height: 32px;
}
.cover {
  width: 56px;
  height: 56px;
  margin-right: 15px;
  object-fit: cover;
}

.player-item:first-child {
  height: 100%;
  display: flex;
  align-items: center;
}

.like {
  color: #757575;
  font-size: 20px;
}

.like:hover {
  color: #fff;
}

.info {
  margin-right: 30px;
}

.player {
  position: fixed;
  width: 100%;
  z-index: 101;
  display: flex;
  padding: 0 16px;
  height: 90px;
  background: #181818;
  bottom: 0;
  border: 1px solid #282828;
}

.title {
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 7px;
  color: #fff;
}

.author {
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 5px;
  color: #757575;
}

.player-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style> -->
