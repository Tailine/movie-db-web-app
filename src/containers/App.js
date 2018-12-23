import React, { Component } from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import Card from '../components/Card';
import axios from 'axios';
import styles from './App.module.css';

class App extends Component {

  state = {
    movies: [],
    currentPage: 1,
    moviesPerPage: 5,
    activeItem: null,
  }
  
  onUserInput(e) {
    this.searchMovie(e.target.value);
  }

  searchMovie(query) {
    const apiKey = 'aeca12c4c31a9c2908e1b9dd78a645f5';
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=pt-BR`;
    axios.get(url).then(response => {
      console.log(response.data.total_pages)
      this.setState({ movies: response.data.results });
    })
  }  

  handleClick(event) {
    this.setState({ currentPage: Number(event.target.id)});
  }

  render() {
    let renderMovies;
    let renderPageNumbers;
    const { movies, moviesPerPage, currentPage } = this.state;
    
    if(this.state.movies) {
      const indexOfLastTodo = currentPage * moviesPerPage;
      const indexOfFirstTodo = indexOfLastTodo - moviesPerPage;
      const currentMovies = movies.slice(indexOfFirstTodo, indexOfLastTodo);
      
      renderMovies = currentMovies.map((currentMovie) => {
        return <Card movies={currentMovie}/>;
      });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
      pageNumbers.push(i);
    }

      renderPageNumbers = pageNumbers.map(number => {
        return (
          <span className={number === currentPage ? styles.pageNumberContainer : ''}>
            <li
              className={ number === currentPage ? styles.pagination : ''}
              key={number}
              id={number}
              onClick={this.handleClick.bind(this)}
            >
              {number}
            </li>
          </span>
        );
      });
    }

    return (
      <div>
        <Header />
        <SearchInput searchMovie={this.onUserInput.bind(this)} />
          {renderMovies}
        <ul className={styles.pageList}>
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

export default App;