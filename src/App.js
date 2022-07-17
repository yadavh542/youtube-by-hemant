import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import SearchSection from './components/SearchSection';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="search" element={<Search/>}>
            <Route path=":searchTerm" element={<SearchSection/>} />
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
