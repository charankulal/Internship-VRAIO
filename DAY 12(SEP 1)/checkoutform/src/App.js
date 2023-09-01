import './App.css';
import Heading from './Components/Heading';
import Cart from './Components/Cart';
import Billing from './Components/Billing';

function App() {
  return (
    
      <div className="container">
      <Heading/>

      <div className="row">
        <Cart/>
        <Billing/>
      </div>
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2017-2018 Company Name</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="/">Privacy</a></li>
          <li className="list-inline-item"><a href="/">Terms</a></li>
          <li className="list-inline-item"><a href="/">Support</a></li>
        </ul>
      </footer>
</div>

      
      
  );
}

export default App;
