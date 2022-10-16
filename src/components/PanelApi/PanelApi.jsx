import React, { useEffect, useState } from "react";
import { Navbar, Container, Form, Input } from "reactstrap";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";
import "./panelApi.css";
import Spinner from "../Spinner/Spinner";

// -----    URL API     ----- //
const API_IMG = "https://image.tmdb.org/t/p/w300/";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=aea64e8ec0c9007baa911724b0063886&query";

const PanelApi = () => {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [modal, setModal] = useState(false);

  const [query, setQuery] = useState("");

  //funciones modal
  const toggle = () => setModal(!modal);

  //Peticion para mostrar las peliculas
  const GetMovies = () => {
    setSpinner(true);
    const res = fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        setShow(true);
      });
  };

  useEffect(() => {
    GetMovies();
  }, []);

  //Peticion para buscar peliculas en el input
  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=aea64e8ec0c9007baa911724b0063886&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (err) {
      console.log(e);
    }
  };

  const handleSubmit = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Navbar className="navbar">
        <div className="nav__container  ms-5">
          <h1>
            <span onClick={() => location.reload()}>MOVIES DB</span>
          </h1>
        </div>
        <Form className="me-5" onSubmit={searchMovie}>
          <Input
            type="text"
            placeholder="Search movie.."
            value={query}
            onChange={handleSubmit}
          />
        </Form>
      </Navbar>
      <Container>
        <div className="mt-5 movie__container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default PanelApi;
