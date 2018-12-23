import React from 'react';
import DetailsCard from './DetailsCard';
import styles from './Card.module.css';  

const Card = ({ movies }) => {

  return (
    <div className={styles.container} key={ movies.id }>
      <DetailsCard poster={ movies.poster_path }
            overview={ movies.overview } 
            title={ movies.title }
            voteAverage={ movies.vote_average }
            releaseDate={ movies.release_date } 
            genreIds={ movies.genre_ids } />
    </div> 
  );
}

export default Card;