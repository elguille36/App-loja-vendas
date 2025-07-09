
import { usePageMetadata } from '../hooks/usePageMetadata';

function AboutPage() {
  usePageMetadata({
    title: "Sobre nós | Loja online Tudo Aqui",
    description: "Informações sobre nossa loja e equipe"
  });

  return (
    <section>
      <h1>Sobre o Projeto</h1>
      <p>A aplicação tem como principal objetivo facilitar a venda de produtos online de categoria importada, oferecendo uma plataforma simples e intuitiva para que usuários possam visualizar,
       pesquisar e adquirir produtos de diferentes categorias, como alimentos, higiene e utilidades domésticas.Os clientes podem navegar pelas categorias, adicionar itens ao carrinho e finalizar a compra de forma prática e segura.

</p>
    </section>
  );
}

export default AboutPage;
