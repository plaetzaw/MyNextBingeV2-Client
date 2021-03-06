import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetchID'
import FullPersonCard from '../Cards/FullPersonCard'
import LinearProgress from '@material-ui/core/LinearProgress'

const FullPersonPage = () => {
  const { id } = useParams()
  const { data: person, error, isPending } = useFetch('https://yournextbingeserver.herokuapp.com/personInfo/', id)
  return (
    <>
      {error && <div><h1>{error}</h1></div>}
      {isPending && <div className='loading'><h1><LinearProgress />Loading Person Information...</h1></div>}
      {person && <><FullPersonCard props={person} /></>}
    </>
  )
}

export default FullPersonPage
