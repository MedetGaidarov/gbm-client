import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/' element={<MainPage />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
