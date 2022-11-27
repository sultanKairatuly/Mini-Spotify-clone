<template>
  <div class="card-list__container">
    <h1 class="list-title">Все остальное</h1>
    <div class="list">
      <song-card
        @click="openGenrePage(card)"
        :backColor="card.color"
        v-for="card in cardInfo"
        :key="card.title"
      >
        <template #cardTitle>{{ card.title }}</template>
      </song-card>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import SongCard from "./SongCard.vue";

export default {
  name: "SongCardList",
  components: { SongCard },
  methods: {
    openGenrePage(card) {
      this.$router.push(`/genres/${card.title}`);
    },
  },
  data() {
    return {
      cardInfo: [
        {
          color: "#e8115b",
          title: "Новые релизы",
          id: uuidv4(),
        },
        {
          color: "#148a08",
          title: "В дорогу",
          id: uuidv4(),
        },
        {
          color: "#bc5900",
          title: "Для дома",
          id: uuidv4(),
        },
        {
          color: "#e1118c",
          title: "Вечеринка",
          id: uuidv4(),
        },
        {
          color: "#8d67ab",
          title: "Поп",
          id: uuidv4(),
        },
        {
          color: "#7358ff",
          title: "Хип-хоп",
          id: uuidv4(),
        },
        {
          color: "#e91429",
          id: uuidv4(),
          title: "Инди",
        },
        {
          color: "#0d72ed",
          id: uuidv4(),
          title: "Для геймеров",
        },
        {
          color: "#b02897",
          id: uuidv4(),
          title: "Рок",
        },
        {
          color: "#8c1932",
          id: uuidv4(),
          title: "Тренировка",
        },
        {
          color: "#0c1d2d",
          id: uuidv4(),
          title: "Рекомендации",
        },
        {
          color: "#438270",
          id: uuidv4(),
          title: "Релакс",
        },
        {
          id: uuidv4(),
          color: "#e8115b",
          title: "K-POP",
        },
        {
          color: "#1e3264",
          id: uuidv4(),
          title: "Сон",
        },
        {
          color: "#d84000",
          id: uuidv4(),
          title: "Джаз",
        },
        {
          color: "#5179a1",
          id: uuidv4(),
          title: "Романтика",
        },
        {
          color: "#b02897",
          id: uuidv4(),
          title: "Эпохи",
        },
        {
          color: "#8c1932",
          id: uuidv4(),
          title: "Классика",
        },
        {
          color: "#7358ff",
          id: uuidv4(),
          title: "Латино",
        },
        {
          color: "#bc5900",
          id: uuidv4(),
          title: "RADAR",
        },
        {
          color: "#438270",
          id: uuidv4(),
          title: "EQUAL",
        },
        {
          color: "#e8115b",
          id: uuidv4(),
          title: "R&B",
        },
        {
          color: "#1e3264",
          id: uuidv4(),
          title: "Disney",
        },
        {
          color: "#b02897",
          id: uuidv4(),
          title: "Фокус",
        },
        {
          color: "#e91429",
          id: uuidv4(),
          title: "Соул",
        },
        {
          color: "#0c1d2d",
          id: uuidv4(),
          title: "Чарты",
        },
        {
          color: "#5179a1",
          id: uuidv4(),
          title: "Настроения",
        },
        {
          color: "#148a08",
          id: uuidv4(),
          title: "Панк",
        },
      ],
    };
  },
};
</script>

<style scoped>
.list-title {
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 24px;
  color: #fff;
}
.list {
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 24px;
}
</style>
