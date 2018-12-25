import React from 'react';
import DetailsCard from './DetailsCard';
import styles from './Card.module.css';  

const Card = ({ movie, click }) => {

  return (
    <div className={styles.container} >
      <DetailsCard poster={ movie.poster_path }
            overview={ movie.overview } 
            title={ movie.title }
            voteAverage={ movie.vote_average }
            releaseDate={ movie.release_date } 
            genreIds={ movie.genre_ids } />
    </div> 
  );
}

export default Card;