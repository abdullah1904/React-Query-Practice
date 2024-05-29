import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css'
import Home from './pages/Home'
import DataPage from './pages/DataPage'
import RQDataPage from './pages/RQDataPage'
import RQUserPage from './pages/RQUserPage'
import ParallelQueriesPage from './pages/ParallelQueriesPage'
import DynamicParallelQueriesPage from './pages/DynamicParallelQueriesPage'
import DependentQueriesPage from './pages/DependentQueriesPage'
import PaginatedQueriesPage from './pages/PaginatedQueriesPage'
import InfiniteQueriesPage from './pages/InfiniteQueriesPage'
import AddUserUsingMutationPage from './pages/AddUserUsingMutationPage'

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
              <li><Link to='/parallel-queries-page'>Parallel Queries Page</Link></li>
              <li><Link to='/dynamic-parallel-queries-page'>Dynamic Parallel Queries Page</Link></li>
              <li><Link to='/dependent-queries-page'>Dependent Queries Page</Link></li>
              <li><Link to='/paginated-queries-page'>Paginated Queries Page</Link></li>
              <li><Link to='/infinite-queries-page'>Infinite Queries Page</Link></li>
              <li><Link to='/add-user-mutation-page'>Mutation Page</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/data-page' element={<DataPage />} />
            <Route path='/rq-data-page' element={<RQDataPage />} />
            <Route path='/rq-user-page/:userId' element={<RQUserPage/>}/> 
            <Route path='/parallel-queries-page' element={<ParallelQueriesPage/>}/>
            <Route path='/dynamic-parallel-queries-page' element={<DynamicParallelQueriesPage userIds={[1,3]}/>}/>
            <Route path='/dependent-queries-page' element={<DependentQueriesPage id='1'/>} />
            <Route path='/paginated-queries-page' element={<PaginatedQueriesPage/>} />
            <Route path='/infinite-queries-page' element={<InfiniteQueriesPage/>} />
            <Route path='/add-user-mutation-page' element={<AddUserUsingMutationPage/>} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </>
  )
}

export default App