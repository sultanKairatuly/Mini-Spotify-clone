<template>
  <div
    class="card"
    :style="{
      backgroundColor: backColor,
    }"
  >
    <h1 class="card-title">
      <slot name="cardTitle"></slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: "SongCard",
  props: {
    backColor: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-title {
  font-weight: 700;
  color: #fff;
  font-size: 23px;
  max-width: 100px;
  line-height: 40px;
}
.card {
  padding: 16px;
  border-radius: 10px;
  width: 194px;
  height: 194px;
  cursor: pointer;
}
</style>
