import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../useFetchID';
import FullTVShowCard from '../Cards/FullTVShowCard'
import LinearProgress from '@material-ui/core/LinearProgress';


const FullMovieCard = () => {
    const { id } = useParams();
    const idObj = {
        id: id
    }
    const { data: tvshow, error, isPending } = useFetch('http://localhost:8080/fullshowInfo/', idObj);    
    console.log(tvshow)
  return (
    <>
       {error && <div><h1>{error}</h1></div>}
       { isPending && <div className="loading"><h1><LinearProgress/>Loading Show Information...</h1></div>}
      {tvshow &&  <><FullTVShowCard props={tvshow}/></>}
    </>
  )
}

export default FullMovieCard
