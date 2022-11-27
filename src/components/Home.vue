<template>
  <div class="homepage">
    <home-category-list />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HomeCategoryList from "./HomeCategoryList.vue";

export default {
  name: "HomeComponent",

  components: {
    HomeCategoryList,
  },

  methods: {
    ...mapActions(["callTrackUpdation", "callRefsUpdation"]),
  },

  computed: {
    homePageWidth() {
      return `${window.innerWidth - 230}px`;
    },
  },

  mounted() {
    const trackFromLC = localStorage.getItem("currentTrack");
    if (trackFromLC) {
      this.callTrackUpdation(JSON.parse(trackFromLC));
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
.homepage {
  padding-top: 90px;
  min-height: 100vh;
  padding-left: 230px;
  padding-bottom: 110px;
  background: rgb(32, 32, 32);
  background: linear-gradient(
    157deg,
    rgba(32, 32, 32, 1) 10%,
    rgba(31, 31, 31, 1) 5%,
    rgba(18, 18, 18, 1) 67%,
    rgba(19, 19, 19, 1) 100%
  );
}
</style>
