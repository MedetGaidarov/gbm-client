import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import TestPage from './pages/TestPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/test' element = {<TestPage/> }/>
        <Route path='/admin' element={<AdminPage />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
