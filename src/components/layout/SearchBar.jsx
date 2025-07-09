import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import IconButton from '../ui/IconButton';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    navigate('/produtos');
  };

  return (
    <form onSubmit={handleSearch}
      className="search-form"
      aria-label="Barra de pesquisa">
      <input
        className="search-input"
        type="text"
        placeholder="Pesquisar..."
        aria-label="Pesquisar produtos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="search-buttons-group">
        {searchTerm && (
          <IconButton
            type="button"
            iconName="close"
            ariaLabel="Limpar pesquisa"
            className="icon-button clear-button"
            onClick={handleClearSearch}
          />
        )}
        <IconButton
          type="submit"
          iconName="search"
          ariaLabel="Buscar"
          className="icon-button search-button"
        />
      </div>
    </form>
  );
}

export default SearchBar;