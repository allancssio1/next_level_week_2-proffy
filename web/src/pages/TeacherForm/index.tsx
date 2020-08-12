import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import warningIcon from '../../assents/images/icons/warning.svg'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

import './style.css'

function TeacherForm (){
  const history = useHistory()
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to:"" }
  ])
  
  function addNewScheduleItem (){
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: "", to:"" }
    ])
  }
  function handleCreateClass (event: FormEvent) {
    event.preventDefault()
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('cadastrado')
      history.push('/')
    }).catch(() => {
      alert('Erro no Cadastro')
    })
    
  }
  function setScheduleItemValue(posiction: Number, field:string, value:String){
    const updatedScheduleItem = scheduleItems.map((scheduleItem, index) => {
      if(index === posiction){
        return {...scheduleItem, [field]: value}
      }

      return scheduleItem
    })

    setScheduleItems(updatedScheduleItem)
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
      title="Que incrível que você quer dar aulas."
      description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>
      
            <Input
              name="name"
              label="Nome Completo"
              value={name}
              onChange={(event) => { setName(event.target.value) }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(event) => {setAvatar(event.target.value)}} 
            />
            <Input
              name="whatsapp"
              label="Whatsapp" value={whatsapp}
              onChange={(event) => {setWhatsapp(event.target.value)}}
            />
            <Textarea
              name="bio"
              label="biografia"
              value={bio}
              onChange={(event) => {setBio(event.target.value)}} 
            />


          </fieldset>  

          <fieldset>
            <legend>Seus Dados</legend>
      
            <Select 
              name="subject" 
              label="Matéria"
              options={[
                {value: "Artes", label: "Artes"},
                {value: "Matemática", label: "Matemática"},
                {value: "Português", label: "Português"},
                {value: "Biologia", label: "Biologia"},
                {value: "Física", label: "Física"},
                {value: "Química", label: "Química"},
                {value: "Inglês", label: "Inglês"},
                {value: "Geografia", label: "Geografia"},
                {value: "História", label: "História"}
              ]}
              value={subject}
              onChange={(event) => { setSubject(event.target.value) }}
            />

            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(event) => { setCost(event.target.value) }}
            />

          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick = {addNewScheduleItem}>
                + Novo horário
              </button> 
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return(
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name="Week_day" 
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange= {event => setScheduleItemValue(index, 'week_day', event.target.value)}
                    options={[
                      {value: "0", label: "Domingo"},
                      {value: "1", label: "Segunda-Feira"},
                      {value: "2", label: "Terça-Feira"},
                      {value: "3", label: "Quarta-Feira"},
                      {value: "4", label: "Quinta-Feira"},
                      {value: "5", label: "Sexta-Feira"},
                      {value: "6", label: "Sábado"},
                    ]}
                  />
                  <Input 
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange= {event => setScheduleItemValue(index, 'from', event.target.value)}
                    />
                  <Input 
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange= {event => setScheduleItemValue(index, 'to', event.target.value)}
                  />
                </div>
              )
            })}
            
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Imortante! <br/>
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>          
          </footer>
        </form>
      </main>

    </div>
  )
}

export default TeacherForm;