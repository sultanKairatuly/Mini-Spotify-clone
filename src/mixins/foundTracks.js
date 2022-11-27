export default {
  methods: {
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
};
