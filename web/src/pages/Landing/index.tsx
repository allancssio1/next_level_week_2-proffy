import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assents/images/logo.svg';
import landingImg from '../../assents/images/landing.svg';
import studyIcon from '../../assents/images/icons/study.svg';
import giveClassesIcon from '../../assents/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assents/images/icons/purple-heart.svg';
import api from '../../services/api';
import './style.css';

function Landing(){
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then(res => {
      const {total} = res. data
      setTotalConnections(total)
    })
  }, [])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img src={landingImg} alt="Pataforma de estudos" className="hero-image"/>
    
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas"/>
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
        </span>
      </div>
    </div>
  )
}

export default Landing;