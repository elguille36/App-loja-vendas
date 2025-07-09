import Carrinho from "../models/carrinho.js";
import Produto from '../models/produto.js';
import chalk from 'chalk';

export async function listarCarrinho(req, res) {
  try {
    const itens = await Carrinho.findAll({
      include: {
        model: Produto,
        as: 'Produto',
        attributes: ['id', 'nome', 'preco', 'imagem', 'categoria']
      }
    });

    res.status(200).json(itens);
  } catch (error) {
    console.error('❌ Erro ao listar carrinho:', error);
    res.status(500).json({ erro: 'Erro ao listar itens do carrinho.' });
  }
}

export async function adicionarAoCarrinho(req, res) {
  try {
    const { produtoId, quantidade } = req.body;

    const existente = await Carrinho.findOne({ where: { produtoId } });

    if (existente) {
      existente.quantidade += quantidade || 1;
      await existente.save();
      return res.json(existente);
    }

    const novo = await Carrinho.create({
      produtoId,
      quantidade: quantidade || 1
    });

    res.status(201).json(novo);
  } catch (error) {
    console.error('❌ Erro ao adicionar ao carrinho:', error);
    res.status(500).json({ erro: 'Erro ao adicionar ao carrinho.' });
  }
}

export async function removerDoCarrinho(req, res) {
  try {
    const { id } = req.params;
    const item = await Carrinho.findByPk(id);
    if (!item) return res.status(404).json({ erro: 'Item não encontrado' });

    await item.destroy();
    res.json({ mensagem: 'Removido do carrinho' });
  } catch (error) {
    console.error('❌ Erro ao remover do carrinho:', error);
    res.status(500).json({ erro: 'Erro ao remover item' });
  }
}

export async function limparCarrinho(req, res) {
  try {
    await Carrinho.destroy({ where: {} });
    res.json({ mensagem: 'Carrinho limpo' });
  } catch (error) {
    console.error('❌ Erro ao limpar carrinho:', error);
    res.status(500).json({ erro: 'Erro ao limpar carrinho' });
  }
}

export async function getCartCount(req, res) {
  try {
    const items = await Carrinho.findAll();
    const count = items.reduce((sum, item) => sum + item.quantidade, 0);

    res.json({ count });
  } catch (error) {
    console.error('❌ Erro ao receber quantidade de itens:', error);
    res.status(500).json({ erro: 'Não foi possível obter o número de itens no carrinho' });
  }
}

export async function atualizarQuantidade(req, res) {
  try {
    const { id } = req.params;
    const { quantidade } = req.body;

    const item = await Carrinho.findByPk(id);
    if (!item) {
      return res.status(404).json({ erro: 'Item não encontrado' });
    }

    if (quantidade < 1) {
      return res.status(400).json({ erro: 'Quantidade deve ser pelo menos 1' });
    }

    item.quantidade = quantidade;
    await item.save();

    res.json(item);
  } catch (error) {
    console.error('❌ Erro ao atualizar quantidade:', error);
    res.status(500).json({ erro: 'Erro ao atualizar quantidade' });
  }
}

console.log(chalk.bgGray` Controlador Carrinho Funcionando`);