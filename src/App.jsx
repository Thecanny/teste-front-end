import {CartStorage} from './context/CartContext'
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Fullbanner from './components/Fullbanner';
import Vitrine from './components/Vitrine';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
     <CartStorage value={{number: '0'}}>
        <Header />
        <Fullbanner />
        <Vitrine />
        <Newsletter />
        <Footer />
        <GlobalStyles />
     </CartStorage>
    </>
  );
}

export default App;
