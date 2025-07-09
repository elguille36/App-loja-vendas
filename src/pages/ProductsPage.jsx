import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProducts } from '../api/productsApi.js';
import ProductCart from '../components/products/ProductCart.jsx';
import SkeletonCard from '../components/products/ProductSkeletonCard.jsx';
import { ProductsPageMetadata } from '../components/products/ProductsMetadata.jsx';
import CategoryNav from '../components/layout/CategoryNav.jsx';

const categories = ["", "alimentos", "higiene", "lar"];

function ProductsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search');
  const currentCategory = location.pathname.split('/')[2] || '';

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const filter = {
      category: searchTerm ? '' : currentCategory,
      name: searchTerm || undefined
    };

    // console.log('Filter params:', filter);
    getProducts(filter)
      .then(data => {
        // console.log('Received data:', data);
        setProdutos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [currentCategory, searchTerm]);

  return (
    <section>
      <ProductsPageMetadata
        searchTerm={searchTerm}
        currentCategory={currentCategory}
      />

      <h1>Produtos</h1>
      <CategoryNav categories={categories} />
      <div className="products-section">
        {searchTerm ? (
          <h2 className="search-results-info">
            Resultados para: "{searchTerm}"
          </h2>
        ) : (
          <h2>
            {currentCategory === ''
              ? 'Todos'
              : currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
          </h2>
        )}

        <ul className="products-list" role="list">
          {loading ? (
            Array(6).fill(null).map((_, i) => <SkeletonCard key={`skeleton-${i}`} />)
          ) : produtos.length === 0 ? (
            <li className="empty-message">Nenhum produto encontrado.</li>
          ) : (
            produtos.map(produto => <ProductCart key={produto.id} produto={produto} />)
          )}
        </ul>
      </div>
    </section>
  );
}

export default ProductsPage;