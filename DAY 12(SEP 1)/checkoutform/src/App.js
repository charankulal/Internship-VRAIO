import './App.css';
import Heading from './Components/Heading';
import Cart from './Components/Cart';
import Billing from './Components/Billing';
import Footer from './Components/Footer';

function App() {
  return (
    
      <div className="container">
      <Heading/>

      <div className="row">
        <Cart/>
        <Billing/>
      </div>
      <Footer/>
</div>

      
      
  );
}

export default App;
