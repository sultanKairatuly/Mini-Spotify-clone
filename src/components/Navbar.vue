<template>
  <div class="sidebar">
    <img src="../assets/spotify-logo.png" alt="spotify-logo" class="logo" />
    <ul class="nav">
      <router-link to="/" class="nav-item">
        <i class="fa-solid fa-house"></i>
        <div class="nav-item__text">Главная</div>
      </router-link>
      <router-link to="/search" class="nav-item search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <div class="nav-item__text">Поиск</div>
      </router-link>
      <router-link to="/liked" class="nav-item">
        <img src="../assets/likedIcon.png" alt="like-icon" class="like-icon" />
        <div class="nav-item__text">Любимые треки</div>
      </router-link>
      <li class="nav-item add">
        <i class="fa-solid fa-plus"></i>
        <div class="nav-item__text" @click="createPlaylist">
          Создать плейлист
        </div>
      </li>
      <div class="line"></div>
      <div class="playlists">
        <div
          class="playlist"
          :key="playlist.id"
          v-for="playlist in getPlaylists"
          @contextmenu.prevent="openContextMenu(playlist)"
          @click="toPlaylistPage(playlist)"
        >
          {{ playlist.name }}
        </div>
      </div>
      <div
        class="context_menu"
        :class="{ active: isMenu }"
        :style="{ top: top, left: left }"
      >
        <div class="context-menu__item" @click.stop="deletePlaylist">
          Удалить
        </div>
        <div class="context-menu__item">Добавить в очередь</div>
        <div class="context-menu__item">Создать папку</div>
        <div class="context-menu__item">Найти похожий плейлист</div>
        <div class="context-menu__item">Создать плейлист</div>
        <div class="context-menu__item">Переименовать</div>
        <div class="context-menu__item">Поделиться</div>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "SidebarNav",
  data() {
    return {
      counter: 1,
      menuFocusedPlaylist: null,
      isMenu: false,
      top: null,
      left: null,
    };
  },

  created() {
    document.oncontextmenu = ({ clientX, clientY }) => {
      console.log(clientX);
      console.log(clientY);
      this.top = `${clientY + 20}px`;
      this.left = `${clientX}px`;
      return false;
    };
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".context_menu")) {
        this.isMenu = false;
      }
    });
    document.addEventListener("rightclick", (e) => {
      console.log(e);
    });
  },

  computed: {
    ...mapGetters(["getPlaylists"]),
  },
  methods: {
    ...mapActions([
      "callPlaylistsUpdation",
      "callPlaylistsFiltration",
      "callCurrentPlaylistUpdation",
    ]),
    toPlaylistPage(playlist) {
      this.$router.push(`/playlists/${playlist.id}`);
    },
    createPlaylist() {
      let newPlaylist = {
        name: `Мой плейлист №${this.counter}`,
        description: "",
        id: uuidv4(),
        songs: [],
        cover: "",
      };
      this.counter++;
      this.callPlaylistsUpdation(newPlaylist);
    },
    openContextMenu(playlist) {
      this.isMenu = true;
      this.menuFocusedPlaylist = playlist;
    },
    deletePlaylist() {
      this.callPlaylistsFiltration(this.menuFocusedPlaylist);
      this.menuFocusedPlaylist = {};
      this.isMenu = false;
    },
  },
};
</script>

<style scoped>
.context_menu {
  position: absolute;
  background-color: #282828;
  padding: 4px;
  border-radius: 4px;
  box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
  max-height: calc(100vh - 24px);
  max-width: 350px;
  min-width: 160px;
  overflow-y: auto;
  display: none;
}

.active {
  display: block;
}

.white {
  color: #fff;
}

.context-menu__item {
  color: #fff;
  font-size: 13px;
  padding: 12px 8px 12px 12px;
  border-radius: 4px;
}

.context-menu__item:hover {
  background-color: #4f4f4f;
}
.playlist {
  color: #fff;
  opacity: 0.6;
  font-size: 14px;
  margin: 15px 0;
}

.playlist:hover {
  opacity: 1;
}
.line {
  height: 1px;
  width: 100%;
  background-color: #282828;
  margin-bottom: 10px;
}
.like-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 10px;
}
.sidebar {
  z-index: 100;
  padding: 30px 0;
  position: fixed;
  width: 230px;
  background-color: #000;
  height: 100vh;
  top: 0;
  left: 0;
  box-shadow: 0px 0px 10px 3px rgba(34, 60, 80, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}

i {
  font-size: 20px;
  margin-right: 10px;
}

.logo {
  width: 131px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
  margin-bottom: 18px;
  padding: 0 24px;
  width: 100%;
}

.nav {
  margin-top: 30px;
}

.nav-item {
  font-family: "Roboto", sans-serif;
  color: #b3b3b3;
  font-weight: 500;
  transition: 0.2s ease-in-out;
  list-style: none;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
}

li:hover {
  color: #fff;
}

.active-link {
  color: #fff;
}

.search {
  margin-bottom: 50px;
}
</style>
