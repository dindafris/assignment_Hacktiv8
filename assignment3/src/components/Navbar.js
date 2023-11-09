import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='sidebar'>
      <img
        src='https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_160,ar_1:1/v1634025439/01gmvhxdw7m8kcpqcpbv436nam.jpg'
        alt='profile'
      ></img>
      <Link to='/' className='menu'>
        Tentang Saya
      </Link>
      {''}
      <Link to='/pengalaman' className='menu'>
        Pengalaman
      </Link>
      {''}
      <Link to='/pendidikan' className='menu'>
        Pendidikan
      </Link>
      {''}
      <Link to='/organisasi' className='menu'>
        Organisasi
      </Link>
      {''}
      <Link to='/kemampuan' className='menu'>
        Kemampuan
      </Link>
      {''}
    </div>
  );
}
