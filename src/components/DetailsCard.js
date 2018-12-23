import React from 'react';
import Genre from './Genre';
import styles from './DetailsCard.module.css';

const DetailsCard = ({ overview, title, voteAverage, releaseDate, genreIds, poster }) => {

  releaseDate = releaseDate.split('-');
  releaseDate = `${releaseDate[2]}/${releaseDate[1]}/${releaseDate[0]}`
  const imageSrc = `https://image.tmdb.org/t/p/w400/${poster}`;

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.containerImageCard}>
        <img className={styles.imageCard} src={imageSrc} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.movieTitle}>{ title }</h2>
        <div className={styles.ratingContainer}>
          <div className={styles.rating}>{ voteAverage * 10 }%</div>      
        </div>
        <p className={styles.date}>{ releaseDate }</p>
        <p className={styles.sinopse}>{ overview }</p>
        <Genre genreIds={ genreIds } />
      </div>
    </div>
  );
}

export default DetailsCard;