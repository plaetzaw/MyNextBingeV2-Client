import React from 'react'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const MiniPersonCard = ({ people }) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      let personmarkup = people.data.results.map((person) => {
        return <div key={person.id}>
                {person.name}
        <Card
            className="miniCard"
            >
              <CardMedia
              className="posterMini"
              component="img"
              alt={person.title}
              src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
              />  
                <Link to={`/person/${person.id}`}>
                <Button 
                // onClick={handleperson}
                >
                 <p className="centerText"><b>View Full Information</b></p></Button>
                 </Link>
            </Card>    
        </div>
      })

  return (
    <>
 <Carousel
responsive={responsive}>
{personmarkup}
</Carousel>     
    </>
  )
}

export default MiniPersonCard