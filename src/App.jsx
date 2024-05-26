import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home  from './pages/Home';
import DataPage from './pages/DataPage';
import RQDataPage from './pages/RQDataPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/data-page'>Traditional Data Page</Link>
            </li>
            <li>
              <Link to='/rq-data-page'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/data-page' element={<DataPage/>}/>
          <Route path='/rq-data-page' element={<RQDataPage/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App