import './Components/ProductDetails.css'
import ProductDetails from './Components/ProductDetails.jsx';
import Header from './Components/Header.jsx'

function App() {

  return (
    <>
      <Header/>
      <ProductDetails productId={1}/>
    </>
  );
}

export default App