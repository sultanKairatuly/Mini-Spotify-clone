import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage";
import SongPage from "../pages/SongPage";
import MixPage from "../pages/MixPage";
import Search from "../components/Search";
import GenrePage from "../pages/GenrePage";
import LikedPage from "../components/Liked";
import PlaylistPage from "../pages/PlaylistPage";

const routes = [
  { path: "/", component: HomePage },
  { path: "/:id", component: SongPage },
  { path: "/search", component: Search },
  { path: "/mixes/:mixName", component: MixPage },
  { path: "/genres/:genreName", component: GenrePage },
  { path: "/liked", component: LikedPage },
  { path: "/playlists/:playlistID", component: PlaylistPage },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "active-link",
});

export default router;
