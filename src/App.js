import logo from './logo.svg';
import {HashRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/navbar';
import MovieList from './containers/moviesList/moviesList';
import MoviesPage from "./containers/Pages/MoviesPage/moviePage"
import HomePage from './containers/Pages/HomePage/homePage';

function App() {
  return (
    <HashRouter>
      
      <Switch>       
        <Route path='/' exact component={HomePage} />
        <Route path='/movies' exact component={MoviesPage} />
        

        
        
      </Switch>
    </HashRouter>
  );
}

export default App;

