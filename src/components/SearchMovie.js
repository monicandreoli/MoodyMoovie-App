import React, { useState } from 'react';
import Movie from './Movie';

export function SearchMovie() {

    // states:
    //we need to track input query and movies
    //at the beginning we want to have an empty string
    const [query, setQuery] = useState('');

    //in this case below, the movies will be an array, so the fist state will be an empty array.
    const [movies, setMovies] = useState([]);




    //function that will be implemented in our input:
    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=7b70e03663a01b13edf71609fddf575c&language=en-US&query=${query}&page=1&include_adult=false`;
        //function try: if the call doesnt work it goes in an error.
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        } catch(err){
            console.log(err)
        }

    }


    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className='label'>Movie Name</label>
                <div className="search-movie">
                    <input className="input"
                    type='text' name="query"
                    placeholder='i.e. Jurrasic Park'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />

                    <button className="button" type='submit'>Search</button>
                </div>
                <div className="valid-input"></div>
            </form>
            <div className="card-list">
           {/*  this filter before the map, help us to, among the different movies, to keep the one that has the poster image. */}
            {movies.filter(movie => movie.poster_path).map(movie => (
                <Movie movie={movie} key={movie.id}/>
                ))
            };
            </div>
        </>
    );
}