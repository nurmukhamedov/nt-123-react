import { useTranslation } from 'react-i18next';
import './App.css';
import ComponentA from './components/ComponentA';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import About from './components/About/About';
import Error from './components/Error/Error';

function App() {

  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <>
      {/* <button onClick={() => handleChangeLanguage('eng')}>Eng</button>
      <button onClick={() => handleChangeLanguage('rus')}>Rus</button> */}

      {/* {
        t("text")
      } */}
      <h2>Router</h2>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Error />} path="/error404" />
          <Route element={<Navigate to="/error404" />} path="*" />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
