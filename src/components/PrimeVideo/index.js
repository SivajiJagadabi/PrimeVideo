// Write your code here

import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-logo"
      />
      <div className="responsive-container">
        <h1 className="movie-category-heading">Action Movies</h1>
        <MoviesSlider moviesLists={actionMoviesList} />
        <h1 className="movie-category-heading">Comedy Movies</h1>
        <MoviesSlider moviesLists={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
