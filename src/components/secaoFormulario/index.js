import React, { useState } from 'react';
import * as S from './styled';

export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function validateEmail(email) {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(email)) {
      return true; }
    else {
      return false;
    }
  } 

  function handleEnviar(e) {
    e.preventDefault();
    if (nome !== '' && validateEmail(email)) {
      const dado = [nome,email];
      localStorage.setItem(`Lead-${getRandom(1,100)}`, JSON.stringify(dado));
      document.querySelector('.mensagem').style.color = "green";
      setMensagem('Dados Enviados com sucesso!');
    } else {
      document.querySelector('.mensagem').style.color = "red";
      setMensagem('Verifique os dados Inseridos.');
    }
    setTimeout(() => {
      setMensagem("");
    }, 5000);
    
  }

    return (
      <>
        <span id="Formulario"></span>
        <S.ArrowUp href="#principal"><i class="fa fa-arrow-circle-o-up"></i></S.ArrowUp>
        <S.secaoFormulario>
            <S.ForcaVenda>
              <h3>Deseja receber as melhores ofertas de produtos incriveis?</h3>
              <img src="/image/undraw_Mail_re_duel.svg" alt="Mão com Carta" />
              <h3>Cadatre seu email já!</h3>
            </S.ForcaVenda>
            <S.Formulario>
              <h3>Insira seus dados: </h3>
              <input type="text" name="Nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required placeholder="Nome" />
              <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
              <input type="submit" value="Enviar" name='btnEnviar' id="btnEnviar" onClick={(e) => handleEnviar(e)} />
              <S.Mensagem className="mensagem">{mensagem}</S.Mensagem>
            </S.Formulario>
        </S.secaoFormulario>
      </>
    );
}
