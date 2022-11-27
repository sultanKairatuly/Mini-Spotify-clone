<template>
  <div class="metal-container">
    <h2 class="category_title"><slot name="title"></slot></h2>
    <div class="metal category">
      <div
        class="song-card"
        v-for="track in tracks"
        :key="track.id"
        @click="openSongPage(track)"
        @mouseenter="showPlayButton(track)"
        @mouseleave="hidePlayButton(track)"
      >
        <img :src="track.cover" alt="music" class="music-cover" />
        <h3 class="music_title">{{ track.title }}</h3>
        <h4 class="music_author">
          <p v-if="track.author.split(',').length < 5">{{ track.author }}</p>
          <p v-else>
            {{ track.author.split(",").splice(0, 3).join(",") }} и не только
          </p>
        </h4>
        <audio
          v-if="track.url"
          :ref="`${track.id}`"
          @ended="handleEndOfTrack(track)"
        >
          <source :src="`${require(`../assets${track.url}.mp3`)}`" />
        </audio>
        <i
          class="fa-sharp fa-solid play play-btn"
          @click.stop="play(track)"
          :class="{
            showed: track.hovered,
            'fa-circle-play': !track.playing,
            'fa-circle-pause': track.playing,
          }"
          :ref="`${track.title}`"
        >
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeCategory",

  mounted() {
    this.callRefsUpdation(this.$refs);
  },

  props: {
    tracks: {
      type: Array,
      required: true,
    },
  },

  computed: {
    ...mapGetters(["getAllTracks", "getAllRefs", "getRecentlyPlayedSongs"]),
  },

  methods: {
    ...mapActions([
      "callTrackUpdation",
      "callRefsUpdation",
      "callRecentUpdation",
    ]),
    openSongPage(track) {
      let duration = this.getAllRefs[track.id][0].duration;
      this.$router.push(`/${track.id}-${duration}`);
    },
    play(track) {
      this.callTrackUpdation(track);
      let isPaused = this.getAllRefs[track.id][0].paused;

      this.getAllTracks.forEach((item) => {
        item.tracks.forEach((t) => {
          if (t.id !== track.id) {
            t.playing = false;
            t.hovered = false;
          }
        });
      });

      for (let key in this.getAllRefs) {
        if (this.getAllRefs[key][0]?.currentSrc) {
          this.getAllRefs[key][0].currentTime = 0;
          this.getAllRefs[key][0].pause();
        }
      }

      if (isPaused) {
        this.getAllRefs[track.id][0].play();
        track.playing = true;
      } else {
        this.getAllRefs[track.id][0].pause();
        track.playing = false;
      }
    },
    showPlayButton(track) {
      this.getAllTracks.forEach((item) => {
        if (item.mixs) {
          item.mixs.forEach((el) => {
            el.songs.forEach((t) => {
              if (t.title === track.title || t.playing) {
                t.hovered = true;
              } else {
                t.hovered = false;
              }
            });
          });
        } else if (item.tracks.length >= 1) {
          item.tracks.forEach((t) => {
            if (t.title === track.title || t.playing) {
              t.hovered = true;
            } else {
              t.hovered = false;
            }
          });
        }
      });
    },
    hidePlayButton() {
      this.getAllTracks.forEach((item) => {
        item.tracks.forEach((t) => {
          if (!t.playing) {
            t.hovered = false;
          }
        });
      });
    },
    handleEndOfTrack(track) {
      track.playing = false;
      track.hovered = false;

      setTimeout(() => {
        this.getAllRefs[track.id + 1][0].play();
        this.getAllTracks.forEach((item) => {
          item.tracks.forEach((t) => {
            if (t.id === track.id + 1) {
              t.playing = true;
              t.hovered = true;
              this.$store.state.currentTrack = t;
            }
          });
        });
      }, 1500);
    },
  },
};
</script>

<style scoped>
.metal-container {
  margin-bottom: 50px;
}
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
  font-size: 15px;
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
