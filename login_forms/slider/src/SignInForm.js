import "./signin.css";
import { useState } from "react";
import classnames from "classnames";

const SignInForm = () => {
  const [swapPanel, setSwapPanel] = useState(false);

  const signUpButton = () => {
    setSwapPanel(true);
  };
  const signInButton = () => {
    setSwapPanel(false);
  };

  return (
    <div className="sigin">
      <div
        className={classnames("container", { "right-panel-active": swapPanel })}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#">

			<h1>Crie sua conta</h1>
			<div class="social-container">
				<a href="#" class="social"></a>
				<a href="#" class="social"></a>
				<a href="#" class="social"></a>
			</div>
			<span>ou use seu email</span>
			<input type="text" placeholder="Nome" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Senha" />
            <button onClick={signUpButton}>Inscreva-se</button>
          </form>
        </div>
        
        
        <div className="form-container sign-in-container">
          <form action="#">
            
          <h1>Entrar</h1>
			<div class="social-container">
				<a href="#" class="social"></a>
				<a href="#" class="social"></a>
				<a href="#" class="social"></a>
			</div>
			<span>ou use sua conta</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Senha" />
            <a class="forgetpass" href="#">Esqueceu a senha?</a>
            {/* <a href="#">Forgot your password?</a> */}

            <button onClick={signInButton}>Entrar</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Ola!</h1>
				<p>Já tem uma conta? clique no botão abaixo</p>

              <button
                type="button"
                onClick={signInButton}
                className="ghost"
                id="signIn"
              >
                Entrar
              </button>
            </div>
            <div className="overlay-panel overlay-right">
            <h1>Bem vindo!</h1>
				<p>Nao tenha uma conta? clique no botao abaixo</p>
              <button
                type="button"
                onClick={signUpButton}
                className="ghost"
                id="signUp"
              >
                Inscreva-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;