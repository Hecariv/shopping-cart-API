import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ShoppingCart from "./components/ShoppingCart"
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
   <div className="App">
    <Header />
    <ShoppingCart />
    <Footer copyright="&copy;" year="2021" />
   </div>
  );
}

export default App;
