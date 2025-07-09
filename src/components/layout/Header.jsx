import { Link } from 'react-router-dom';
import CartHeader from '../cart/CartHeader.jsx';
import MainNav from './MainNav.jsx';
import SearchBar from './SearchBar.jsx';

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to='/' className="logo">
          <img className="logo-icon" src="/img/logo.png" alt="'Logo do site"></img>
        </Link>
        <SearchBar />
        <MainNav />
        <CartHeader />
      </div>
    </header>
  )
}

export default Header;