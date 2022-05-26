    import React from "react";
    import {useEffect, useState} from 'react';
    import './App.css';
    import SearchIcon from './search.svg';
    import MovieCard from './MovieCard.jsx';

    const API_URL = 'http://www.omdbapi.com?apikey=63d8fff0'; // 857108bc

    const App = () => {

        const [movies, setMovies] = useState([]);
        const [searchTerm, setSearchTerm] = useState("");

        const searchMovies = async (title) =>{
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            setMovies(data.Search)    
        }

        useEffect(() => {
            searchMovies('Batman')   
        }, []);

        return (
            <div className="App">
                <h1>MoviesHub</h1>
                <div className="search">
                    <input 
                        placeholder = 'Search for movies'
                        value={searchTerm}
                        onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }}
                    />
                    <img
                        src={SearchIcon}
                        alt='search'
                        onClick={() => {searchMovies(searchTerm)}}
                    />
                </div>

                {
                    movies?.length > 0 ?
                    (
                        <div className='container'>
                            {
                                movies.map(movie => {
                                    return <MovieCard movie={movie}/>   
                                })
                            }
                        </div>
                    ) : 
                    (
                        <div className = 'empty'>
                            <h2>No movies found!</h2>
                        </div>
                    )
                }
            
            </div>
        )
    }

    export default App;

    // 63d8fff0 Api Key