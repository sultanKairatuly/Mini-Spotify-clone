<template>
  <div
    class="header"
    :class="{
      black: !transparent,
    }"
  >
    <i
      class="fa-solid arrow fa-circle-arrow-left"
      @click="goBack"
      :class="{
        disabled: !back,
      }"
    ></i>
    <i
      class="fa-solid arrow fa-circle-arrow-right"
      @click="goNext"
      :class="{
        disabled: !forward,
      }"
    ></i>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      transparent: true,
      back: history.state.back,
      forward: history.state.forward,
    };
  },
  created() {
    document.addEventListener("scroll", () => {
      let offset = window.scrollY;

      if (offset >= 150) {
        this.transparent = false;
      } else {
        this.transparent = true;
      }
    });
  },
  methods: {
    goBack() {
      //   if (history.state.back) {
      //     this.$router.push(history.state.back);
      //   }

      history.go(-1);
    },
    goNext() {
      //   if (history.state.forward) {
      //     this.$router.push(history.state.forward);
      //   }

      history.go(1);
    },
  },
};
</script>

<style scoped>
.header {
  top: 0;
  position: fixed;
  z-index: 20;
  display: flex;
  align-items: center;
  padding: 10px 0;
  background: transparent;
  height: 60px;
  width: 100%;
  padding-left: 260px;
  transition: 0.2s ease-in-out;
}

.disabled {
  opacity: 0.6;
}

.black {
  background-color: #070707;
}

.arrow {
  font-size: 30px;
  margin-right: 20px;
  cursor: pointer;
  color: #fff;
  border-radius: 50%;
}
</style>
