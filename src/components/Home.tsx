import axios from "axios";
import { useState, useEffect } from "react";
import CategoryCarousel from "./CategoryCarousel";
import { useAppSelector } from "../hooks/redux";
import { useNavigate } from "react-router";
import MainSlider from "./MainSlider";
import Cards from "./Cards";
import MoviesRows from "./MoviesRows";

const Home = () => {
  //States & selectors
  const [categorias, setCategorias] = useState<Array<String>>();
  const { isLoggedIn } = useAppSelector((state) => state.user);

  //Consts
  const apiKey = "4479c8da513385de6697a704f3630e3e";
  const url = "https://api.themoviedb.org/3/genre/movie/list?api_key="
  const navigate = useNavigate()

  //Functions
  const getCategories = async (): Promise<void> => {
    try {
      const { data } = await axios.get(
        `${url + apiKey}&language=es-ES`
      );
      setCategorias(data.genres);
    } catch (err) {
      alert(err);
    }
  };

  //useEffect
  useEffect(() => {
    !isLoggedIn && navigate('/')
    getCategories();
  }, []);

  return (
    <div className="container m-auto px-6 lg:px-14 pb-6">
      <MainSlider/>
      <Cards/>
      <MoviesRows/>
    </div>
  );
};

export default Home;
