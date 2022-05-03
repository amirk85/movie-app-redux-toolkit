import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/Error/PageNotFound";
import Footer from "./components/Footer/Footer";
import MovieDetails from "./components/Movies/movieDetails/MovieDetails";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home/Home";
import WatchList from "./components/Pages/WatchList/WatchList";
import Seasons from "./components/Seasons/Seasons";
import ShowDetails from "./components/Shows/showDetails/ShowDetails";

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/movie/:cardId" element={<MovieDetails />} />
        <Route path="/show/:cardId" element={<ShowDetails />}>
          <Route path="season" element={<Seasons />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
