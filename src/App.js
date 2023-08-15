import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import WatchList from './Components/WatchList';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
          <Banner/>
          <Movies/>
          </>
        } ></Route>

         <Route path="/watchlist" element={
          <WatchList/> 
        } ></Route>

        <Route path='/banner' element={
          <Banner/>
        }></Route>

      </Routes>
    </BrowserRouter>     
  );
}

export default App;
