import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';

import "../styles/auth.scss"


export function NewRoom() {
  const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustracao simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire duvidas da sua audiencia em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>{user?.name}</h2>
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text" 
              placeholder="Nome da sala" 
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Ques entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}