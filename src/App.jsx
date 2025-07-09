import { Routes, Route, Navigate } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage.jsx';
import CartPage from './pages/CartPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Header from "./components/layout/Header.jsx";
import Footer from './components/layout/Footer.jsx';
import Cadastro from './components/usuarios/cadastro.jsx';
import Login from './components/usuarios/login.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="main container">
        <Routes>
          <Route path="/" element={<Navigate to="/produtos" replace />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/produtos/:category" element={<ProductsPage />} />
          <Route path="/carrinho" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}