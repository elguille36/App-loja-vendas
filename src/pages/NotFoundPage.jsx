import { usePageMetadata } from '../hooks/usePageMetadata';

const NotFoundPage = () => {
  usePageMetadata({
    title: "Pagina nao encontrada | Loja online Tudo Aqui",
    description: "Pagina nao encontrada na loja Tudo Aqui"
  });

  return (
    <section style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404</h1>
      <h2>Página não encontrada 😢</h2>
    </section>
  );
};

export default NotFoundPage;