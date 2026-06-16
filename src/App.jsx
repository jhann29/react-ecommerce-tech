import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Brief from './components/Brief';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
      <NavBar />
      <Container className="min-vh-main py-4">
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Catálogo de tecnología — iPhone, Mac, iPad y más" />
            }
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Brief />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
