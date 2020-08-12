import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api';

import './style.css';

function TeacherList () {

  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')

  async function searchTeachers(event: FormEvent){
    event.preventDefault()

    const res = await api.get('classes', {
      params: {
        week_day,
        subject,
        time
      }
    })
    setTeachers(res.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffuys disponíveis."> 
        <form id="search-teachers" onSubmit={searchTeachers}>
          
          <Select
          name="subject" 
          label="Matéria"
          value={subject}
          onChange={(event) => { setSubject(event.target.value) }}
          options={[
            {value: "Português", label: "Português"},
            {value: "Matemática", label: "Matemática"},
            {value: "Química", label: "Química"},
            {value: "Física", label: "Física"},
            {value: "Biologia", label: "Biologia"},
            {value: "Geografia", label: "Geografia"},
            {value: "Artes", label: "Artes"},
            {value: "História", label: "História"},
            {value: "Inglês", label: "Inglês"}
          ]}
          />
          <Select 
          name="Week_day" 
          label="Dia da semana"
          value={week_day}
          onChange={(event) => { setWeek_day(event.target.value) }}
          options={[
            {value: "0", label: "Domingo"},
            {value: "1", label: "Segunda-Feira"},
            {value: "2", label: "Terça-Feira"},
            {value: "3", label: "Quarta-Feira"},
            {value: "4", label: "Quinta-Feira"},
            {value: "5", label: "Sexta-Feira"},
            {value: "6", label: "Sábado"}
          ]}
          />
          <Input
            type="time"
            name="time"
            value={time}
            onChange={(event) => { setTime(event.target.value) }}
            label="Hora"/>

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) =>  {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  );
}

export default TeacherList;