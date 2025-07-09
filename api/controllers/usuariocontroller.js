import bcrypt from 'bcrypt';
import Usuario from '../Models/usuario.js';

export const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const senhaHash = await bcrypt.hash(senha, 10);
    const novoUsuario = await Usuario.create({ nome, email, senha: senhaHash });
    res.status(201).json({
      mensagem:'Usuario cadastrado com succeso',
      usuario:{
        nome:novoUsuario.nome,
        email:novoUsuario.email,
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
  }
};


export const loginUsuario = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) return res.status(401).json({ erro: 'Senha incorreta' });

    res.json({ mensagem: 'Login realizado com sucesso', usuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro no login' });
  }
};


//  export const LimpandoUsuarios = async (req, res) => { // função para limpar os dados de usuarios salvos para teste de login
//   try {
//     await Usuario.destroy({ where: {} });
//     res.send('Todos os usuários foram apagados');
//   } catch (error) {
//     res.status(500).send('Erro ao apagar usuários');
//   }
// };