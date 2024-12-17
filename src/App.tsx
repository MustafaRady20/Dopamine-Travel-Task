import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/layout'
import Home from './pages/home'
import Users from './pages/users'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={<Users/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
