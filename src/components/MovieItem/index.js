import './index.css'

const MovieItem = props => {
  const {itemDetails} = props
  const {posterPath, title, voteAvg} = itemDetails

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        className="posterStyle"
        alt={title}
      />
      <p> {title} </p>
      <p> {voteAvg} </p>
      <button type="button"> View Details </button>
    </div>
  )
}
export default MovieItem
