import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SingleArticle from './components/SingleArticle/SingleArticle';


function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news/:id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
