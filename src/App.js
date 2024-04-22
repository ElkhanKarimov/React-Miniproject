import './App.css';
import Navbar from './layout/Navbar/Navbar';
import Section from './components/Section/Section';
import Creator from './components/Creator/Creator';
import Top from './components/Top/Top';
import Destek from './components/Destek/Destek';
import Magaza from './components/Magaza/Magaza';
import Abunelik from './components/Abunelik/Abunelik';
import Suallar from './components/Suallar/Suallar';
import Bizden from './components/Bizden/Bizden';
import Map from './components/Map/Map';
import Footer from './layout/Footer/Footer';
import Home from './pages/Home';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      {/* <Home/> */}
      <Outlet/>
      <Footer/>
    </div>

  );
}

export default App;
