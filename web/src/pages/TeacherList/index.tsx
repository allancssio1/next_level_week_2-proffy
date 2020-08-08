import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input'
import './style.css';

function TeacherList () {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffuys disponíveis."> 
        <form id="search-teachers">
          
          <Input type="text" name="subject" label="Matéria"/>
          <Input type="date" name="Week_day" label="Dia da semana"/>
          <Input type="time" name="time" label="Hora"/>

        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;