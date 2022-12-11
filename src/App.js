
import './style/theme.css';
import Header from './components/Header';
import Body from './components/Body';
import BottomBody from './components/BottomBody';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
function App() {
  return (
   <div>
    <Header/>
    <div className='content'>
      <Body/>
    </div>
    <div>
      <BottomBody/>
      <Portfolio/>
      <Testimonial/>
      <Footer/>
      
    </div>
   </div>
  );
}

export default App;
