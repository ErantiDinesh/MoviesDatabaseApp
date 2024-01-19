import {Component} from 'react'

import MovieItem from '../MovieItem'

class TopRated extends Component {
  state = {list: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=9ae9a0c80286454e52559f354ec689d1&language=en-US&page=1',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.results.map(item => ({
      posterPath: item.poster_path,
      title: item.title,
      voteAvg: item.vote_average,
      id: item.id,
    }))
    console.log(updatedData)
    this.setState({list: updatedData})
  }

  render() {
    const {list} = this.state

    return (
      <div>
        <div>
          {list.map(item => (
            <MovieItem itemDetails={item} key={item.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default TopRated
