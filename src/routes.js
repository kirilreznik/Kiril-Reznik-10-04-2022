import { lazy } from "react";
const HomePage = lazy(() => import("./pages/home-page/HomePage"));
const FavoritesPage = lazy(() =>
  import("./pages/favorites-page/FavoritesPage")
);

export default [
  { component: <HomePage />, path: "/" },
  { component: <FavoritesPage />, path: "/favorites" },
];
