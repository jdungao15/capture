import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { MovieState } from "../movieState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
   const { id } = useParams();
   const [movies, setMovies] = useState(MovieState);
   const [movie, setMovie] = useState(null);

   useEffect(() => {
      const currentMovie = movies.find((stateMovie) => stateMovie.url === id);
      setMovie(currentMovie);
   }, [movies, id]);

   if (!movie) {
      return <div>Loading...</div>; // Display a loading state while fetching movie details
   }

   const { title, mainImg, awards, secondaryImg } = movie;

   return (
      <Details exit="exit" variants={pageAnimation} initial="hidden" animate="visible">
         <Headline>
            <h2>{title}</h2>
            <img src={mainImg} alt={title} />
         </Headline>
         <Awards>
            {awards.map((award) => (
               <Award key={award.title}>
                  <h3>{award.title}</h3>
                  <div className="line" />
                  <p>{award.description}</p>
               </Award>
            ))}
         </Awards>
         <ImageDisplay>
            <img src={secondaryImg} alt="secondary img" />
         </ImageDisplay>
      </Details>
   );
};

const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const Award = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
