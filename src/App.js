import logo from './logo.svg';
import './App.css';
import {Routes, Route, Outlet} from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import RecipeDetail from './Pages/RecipeDetail';


function App() {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='recipes/:id' element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
