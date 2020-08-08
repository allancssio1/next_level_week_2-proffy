import React from 'react';
import whatsappIcon from '../../assents/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem () {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/58371478?s=460&u=6a28aa264426f86bd89d8e9f792a786f749e40fb&v=4" alt="Allan Cássio"/>
        <div>
          <strong>Allan Cássio</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br/><br/>
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 30,00</strong>
        </p>
        <button type="button"> 
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato

        </button>
      </footer>
    </article>
  )
}

export default TeacherItem