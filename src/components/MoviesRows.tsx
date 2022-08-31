import React from "react";
import CategoryCarousel from "../components/CategoryCarousel";
import requests from "../requests";

const MoviesRows = () => {
  return (
    <div>
      <CategoryCarousel
        title={"Originales de Disney"}
        url={requests.fetchDisney}
      />
      <CategoryCarousel
        title={"Películas de Pixar"}
        url={requests.fetchPixar}
      />
      <CategoryCarousel
        title={"Universo de Marvel"}
        url={requests.fetchMarvel}
      />
      <CategoryCarousel
        title={"Colección de Star Wars"}
        url={requests.fetchStarWars}
      />
    </div>
  );
};

export default MoviesRows;
