import './App.css';
import Navbar from './components/Navbar';
import { TentangSaya } from './pages/TentangSaya';
import { Route, Routes } from 'react-router-dom';
import { Pengalaman } from './pages/Pengalaman';
import { Pendidikan } from './pages/Pendidikan';
import { Organisasi } from './pages/Organisasi';
import { Kemampuan } from './pages/Kemampuan';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<TentangSaya />} />
        <Route path='/pengalaman' element={<Pengalaman />} />
        <Route path='/pendidikan' element={<Pendidikan />} />
        <Route path='/organisasi' element={<Organisasi />} />
        <Route path='/kemampuan' element={<Kemampuan />} />
      </Routes>
    </div>
  );
}

export default App;
