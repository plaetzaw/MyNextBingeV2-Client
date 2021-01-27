import React, {useState} from 'react'
import { Card } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import './pages.css'
import MovieCard from '../Cards/MiniMovieCard'
import TVCard from '../Cards/FullTVShowCard';
import PersonCard from '../Cards/FullPersonCard'




const Search = () => {
    const [serachCategory, setSearchCategory] = useState("movie")
    const [searchTerm, setSearchTerm] = useState("")
    let [results, setResults] = useState()
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState(false);
    const [tvshows, setTVShows] = useState(false);
    const [people, setPeople] = useState(false);



    const handleCategory = (e) => {
        setSearchCategory(e.target.value)
    }
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = () => {
        setLoading(true)
        let searchObj = {
            category: serachCategory,
            term: searchTerm,
        }
        console.log(searchObj)
        axios.post("http://localhost:8080/search", searchObj)
        .then((res) => {
            setLoading(false);
            setResults(res);
            console.log(movies, tvshows, people)    
            switch (searchTerm){
                case (searchTerm === 'movie'):
                setMovies(true)
                break;
                case (searchTerm === 'tv'):
                setTVShows(true)
                break;
                case (searchTerm === 'person'):
                setPeople(true)
            }
        console.log(movies, tvshows, people)    
        })
        console.log(results)

    }


        console.log(results)
       let markup = <>Hello Whirl</>

  return (
    <>
    <Card className="search">
    <h1>Search</h1>
      <FormControl>
        <span>Media Type</span>
        <Select
          value={serachCategory}
          onChange={handleCategory}
        >
          <MenuItem value={"movie"}>Movies</MenuItem>
          <MenuItem value={"tv"}>TV Shows</MenuItem>
          <MenuItem value={"person"}>People</MenuItem>
        </Select>
        <span>Search Term</span>
        <TextField label="Search Term" variant="outlined" 
        value={searchTerm} onChange={handleSearch}/>
        <br/>
        <div className="btn" onClick={onSubmit}>Search</div>
      </FormControl>
      </Card>
      <br/>
      <h1>Search Results</h1>
      {loading && <h1>Loading Search Results</h1>}
      {/* {results && <SearchCard movies={results}/>} */}
      {movies && <MovieCard movies={results}/>}
      {tvshows && <TVCard tvshows={results}/>}
      {people && <PersonCard people={results}/>}

    </>
  )
}

export default Search
