import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/Error/PageNotFound";
import Footer from "./components/Footer/Footer";
import MainHeader from "./components/MainHeader/MainHeader";
import MovieDetails from "./components/Movies/MovieDetails/MovieDetails";
import Home from "./components/Pages/Home/Home";
import WatchList from "./components/Pages/WatchList/WatchList";
import ShowDetails from "./components/Series/ShowDetails";

export default function Router() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/show/:id" element={<ShowDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
