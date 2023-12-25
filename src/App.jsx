
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist'
import './App.css'
import Movies from './components/Movies'
import MovieInfo from './components/MovieInfo'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Movies/>}/>
      <Route path='/movie/:movieId' element={<MovieInfo/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
