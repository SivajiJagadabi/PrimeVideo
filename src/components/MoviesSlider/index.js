// Write your code her
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesLists} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {moviesLists.map(eachMovieItem => (
        <MovieItem key={eachMovieItem.id} movieDetails={eachMovieItem} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
