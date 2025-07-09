import { usePageMetadata } from '../../hooks/usePageMetadata';

export const ProductsPageMetadata = ({ searchTerm, currentCategory }) => {
  const baseTitle = "Loja online Tudo Aqui";

  const metadata = {
    title: '',
    description: ''
  };

  if (searchTerm) {
    metadata.title = `Resultados da pesquisa: "${searchTerm}" | ${baseTitle}`;
    metadata.description = `Resultados da pesquisa para "${searchTerm}" na loja Tudo Aqui`;
  } else if (currentCategory === '') {
    metadata.title = `Todos produtos | ${baseTitle}`;
    metadata.description = 'Veja todos os produtos em loja Tudo Aqui';
  } else {
    const categoryName = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
    metadata.title = `${categoryName} | ${baseTitle}`;
    metadata.description = `Produtos da categoria ${categoryName}`;
  }

  usePageMetadata(metadata);
  return null;
};