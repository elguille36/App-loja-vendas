import { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import App from '../../App.jsx';


export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrar = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/usuarios/cadastrar', { nome, email, senha });
      alert('Cadastro realizado com sucesso!');
      setNome('');
      setEmail('');
      setSenha('');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar usuário');
    }
  };

  return (
    <div className='Box-content'>
    <form className='Formulario' onSubmit={cadastrar}>
      <h2>Novo Usuario</h2>
      <input className='Input-form' placeholder="Nome e SobreNome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input className='Input-form' placeholder="Ingrese seu Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className='Input-form' type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button className='Botom-Cadastro-login' type="submit">Cadastrar</button>
    </form>
    </div>
  );
}