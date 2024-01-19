import {Route, Switch} from 'react-router-dom'

import './App.css'
import TestItem from './components/TestItem'
import Header from './components/Header'
import TopRated from './components/TopRated'
import UpComing from './components/UpComing'

// write your code here
const App = () => (
  <>
    <Header />
    <hr />
    <div>
      <Switch>
        <Route exact path="/" component={TestItem} />
        <Route exact path="/Top-rated" component={TopRated} />
        <Route exact path="/UpComing" component={UpComing} />
      </Switch>
    </div>
  </>
)

export default App
