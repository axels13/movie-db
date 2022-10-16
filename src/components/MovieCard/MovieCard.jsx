import React, { useState } from "react";
import { Container, Modal, ModalBody, Button } from "reactstrap";

import { AiOutlineCloseCircle } from "react-icons/ai";
import "./movie.css";

const API_IMG = "https://image.tmdb.org/t/p/w300/";

const MovieCard = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  return (
    <Container>
      <div className="movie__card ">
        <img src={API_IMG + poster_path} alt={title}></img>
        <h1 className="movie__title ">{title}</h1>
        <span className="movie__text">{vote_average}</span>
        <div className="card-btn">
          <button className="movie__btn" onClick={toggle}>
            View More
          </button>
        </div>
      </div>

      <Modal
        isOpen={modal}
        toggle={toggle}
        modalTransition={{ timeout: 1000 }}
        title={title}
        poster_path={poster_path}
        vote_average={vote_average}
        release_date={release_date}
        overview={overview}
      >
        <ModalBody>
          <div key={title} className="modal__content">
            <img
              src={API_IMG + poster_path}
              alt={title}
              className="img-movie"
            />
            <h2>{title}</h2>
            <h4>
              {" "}
              <span>IMDB:</span>
              {vote_average}
            </h4>
            <h5>
              {" "}
              <span>Release Data:</span> {release_date}
            </h5>

            <span>Overview:</span>
            <p>{overview}</p>

            <Button onClick={toggle} className="close" color="danger">
              <AiOutlineCloseCircle className="modal__close" />
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default MovieCard;
