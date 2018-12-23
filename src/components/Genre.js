import React from 'react';
import styles from './Genre.module.css';
import { genres } from '../genres';

const Genre = ({ genreIds }) => {

  let movieGenres;
  let genreList;

  if(genreIds) {
    genreIds = Array.from(genreIds);

    movieGenres = genres.filter(g => {
      if(genreIds.includes(g.id)) {
        return g.name;
      }
    })

    genreList = movieGenres.map((mg) => {
      return (
        <li>{ mg.name }</li>
      )
    })
  }

  return (
    <ul className={styles.genreList}>
     { genreList }
    </ul>
  )
}

export default Genre;