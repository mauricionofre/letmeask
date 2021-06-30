import { useHistory } from 'react-router-dom';
import { useContext } from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';

import "../styles/auth.scss"

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateNewRoom(){
    if(!user){
      await signInWithGoogle();
    }
    history.push('/rooms/new')

  }
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
          <button 
            onClick={handleCreateNewRoom} 
            className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input
              type="text" 
              placeholder="Digite o código da sala" 
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}