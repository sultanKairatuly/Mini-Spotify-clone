export default {
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    isAdded(track) {
      let counter = 0;

      if (track) {
        this.getLikedSongs.forEach((item) => {
          if (item.id === track.id) {
            counter++;
          }
        });
      } else {
        this.getLikedSongs.forEach((item) => {
          if (item.id === this.getCurrentTrack.id) {
            counter++;
          }
        });
      }

      return counter !== 0;
    },

    addToLiked(track) {
      let counter = 0;

      if (track) {
        this.getLikedSongs.forEach((item) => {
          if (track.id === item?.id) {
            counter++;
          }
        });
      } else {
        this.getLikedSongs.forEach((item) => {
          if (this.getCurrentTrack.id === item.id) {
            counter++;
          }
        });
      }
      if (counter === 1) {
        this.callLikedFiltration(track || this.getCurrentTrack);
      } else if (counter === 0) {
        this.callLikedUpdation(track || this.getCurrentTrack);
      }
    },
  },
};
