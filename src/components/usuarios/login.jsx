import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import App from '../../App.jsx';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/usuarios/login', { email, senha });
      alert(`Bem-vindo(a), ${response.data.usuario.nome}`);
      navigate('/produtos');

    } catch (error) {
      console.error(error);
      alert('Erro no login');
    }
  };

  return (
    <div className='Box-content'>
    <form className='Formulario' onSubmit={login}>
      <h2>Fazer Login</h2>
      <img style={{height:50,borderRadius:'20px'}} src="/img/usuario.jpg" />
      <input className='Input-form' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className='Input-form' type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button className='Botom-Cadastro-login' type="submit">Entrar</button>
    </form>
    </div>
  );
}
