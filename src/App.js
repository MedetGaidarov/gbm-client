import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import AboutProjectPage from './pages/AboutProjectPage';
import MainPage from './pages/MainPage';
import { HeaderContextProvider } from './context/HeaderContextProvider';

function App() {
  return (
    <BrowserRouter>
      <HeaderContextProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage fixedHeader ={true}/>} />
            <Route path="/about" element={<AboutProjectPage />} />
          </Routes>
          <Footer />
        </div>
        </HeaderContextProvider>
    </BrowserRouter>
  );
}

export default App;
