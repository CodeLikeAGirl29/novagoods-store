import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

import Home from './src/pages/Home';
import NotFound from './src/pages/NotFound';
import CollectionDetail from './src/pages/CollectionDetail';

const Shop = lazy(() => import('./src/pages/Shop'));
const ProductDetails = lazy(() => import('./src/pages/ProductDetails'));
const Collections = lazy(() => import('./src/pages/Collections'));
const About = lazy(() => import('./src/pages/About'));
const Cart = lazy(() => import('./src/pages/Cart'));
const Checkout = lazy(() => import('./src/pages/Checkout'));

const Spinner: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--nova-bg))]">
    <div className="w-8 h-8 border-2 border-[hsl(var(--nova-border))] border-t-[hsl(var(--nova-blue))] rounded-full animate-spin" />
  </div>
);

const App: React.FC = () => {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:categoryName" element={<CollectionDetail />} />
            <Route path="/product/:id" element={<ProductDetails />} />            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          newestOnTop
          closeOnClick
          pauseOnHover
          toastStyle={{
            background: 'hsl(var(--nova-surface))',
            color: 'hsl(var(--nova-text))',
            border: '1px solid hsl(var(--nova-border))',
          }}
        />
      </Router>
    </Theme>
  );
};

export default App;