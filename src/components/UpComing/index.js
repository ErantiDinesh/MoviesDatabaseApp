import {Component} from 'react'

import MovieItem from '../MovieItem'

class UpComing extends Component {
  state = {list1: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=9ae9a0c80286454e52559f354ec689d1&language=en-US&page=1',
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
    this.setState({list1: updatedData})
  }

  render() {
    const {list1} = this.state

    return (
      <div>
        <div>
          {list1.map(item => (
            <MovieItem itemDetails={item} key={item.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default UpComing
