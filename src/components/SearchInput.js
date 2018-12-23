import React from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
  return (
    <section>
      <input type="text"
        onChange={props.searchMovie}
        placeholder="Buscar um filme por nome, ano ou gênero..." id="search" />
    </section>
  );
}

export default SearchInput;