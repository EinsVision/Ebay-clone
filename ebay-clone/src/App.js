import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Navbar from './components/Nav/Navbar';
import Products from './components/Products/Products';
import {commerce} from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  } 

  useEffect( () => {
    fetchProducts();
    fetchCart();
  }, []);

   console.log(cart);
  
  return (
    <Router>
      <div className="app">
        <Navbar totalItems={cart.total_items}/>
        <Switch>

          <Route exact path='/'>
            <Products products={products} onAddToCart={handleAddToCart}/>
          </Route>

          <Route exact path='/cart'>
            <Cart cart={cart} />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
