import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './home'
import Mehmonxona from './Mehmonxona'
import Oshxona from './oshxona'
const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}>

                </Route>
                <Route path='/mehmonxona' element={<Mehmonxona/>}>

</Route>
<Route path='/oshxona' element={<Oshxona/>}>

</Route>
            </Routes>
        </Router>
    </div>
  )
}

export default App