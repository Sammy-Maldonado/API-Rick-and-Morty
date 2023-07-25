import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import CardDetails from './components/Cards/CardDetails';

/* Componentes de Páginas */
import Episodes from './pages/Episodes';
import Location from './pages/Location';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      {/* Rutas */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<CardDetails />} />

        <Route path='/episodes' element={<Episodes />} />
        <Route path='/episodes/:id' element={<CardDetails />} />

        <Route path='/location' element={<Location />} />
        <Route path='/location/:id' element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);

  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api)
        .then(res => res.json())
      updateFetchedData(data)
    })()
  }, [api]);

  return (
    <div className='App'>
      <div className='d-flex justify-content-center align-items-center mt-4'>
        <img
          className='rymLogo img-fluid'
          src='images/rym-logo.png'
          alt='rick and morty logo' />
      </div>
      <div className='cContainer my-4'>
        <h1 className='ph1 text-center'>
          Personajes
        </h1>
      </div>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className='container'>
        <div className='row'>
          <Filters
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
          />
          <div className='col-lg-8 col-12'>
            <div className='row'>
              <Cards page='/' results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  )
}

export default App;
