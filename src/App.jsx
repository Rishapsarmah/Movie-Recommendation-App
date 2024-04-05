import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Header/Header';
import Home from './Pages1/Home/Home';
import MovieList from './component/Movielist/Movielist';
import Movie from './component/movieDetail/movie';

function App() {
  return (
    <div className="App">
     
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}
export default App;