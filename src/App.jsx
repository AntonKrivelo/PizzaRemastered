import React from 'react';
import Header from './Components/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';


//reduxs

//redux

export const SearchContext = React.createContext('');

const App = () => { 
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className="wrapper">

        <SearchContext.Provider value={ {searchValue, setSearchValue} }>
            <Header />
          <div className="content">
            <div className="container">
            <Routes>
                <Route path='*' element={<Home />}  />
                <Route path='/cart' element={<Cart />} />
                <Route path='/' element={<NotFound />}  />
            </Routes>
            </div>
          </div>
        </SearchContext.Provider> 
    </div>
  );
}

export default App;
