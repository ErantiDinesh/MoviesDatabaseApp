import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {inputText: ''}

  getSearchedInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state

    return (
      <div className="headerBox">
        <h1> movieDB </h1>
        <div className="itemsBox">
          <Link to="/" className="linkItem">
            <h1 className="list1"> Popular </h1>
          </Link>
          <Link to="/Top-rated" className="linkItem">
            <h1 className="list1"> Top Rated </h1>
          </Link>
          <Link to="/Upcoming" className="linkItem">
            <h1 className="list1"> Upcoming </h1>
          </Link>
        </div>

        <div className="searchbox">
          <label>
            <input
              type="text"
              value={inputText}
              onChange={this.getSearchedInput}
            />
            <button type="button"> Search </button>
          </label>
        </div>
      </div>
    )
  }
}
export default Header
