import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css'
import Home from './pages/Home'
import DataPage from './pages/DataPage'
import RQDataPage from './pages/RQDataPage'
import RQUserPage from './pages/RQUserPage'

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/data-page'>Traditional Data Page</Link></li>
              <li><Link to='/rq-data-page'>RQ Super Heroes</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rq-user-page/:userId' element={<RQUserPage/>}/> 
            <Route path='/data-page' element={<DataPage />} />
            <Route path='/rq-data-page' element={<RQDataPage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </>
  )
}

export default App