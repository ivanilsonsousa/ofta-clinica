import React, { useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Section from '../../components/Section';
import Button from '../../components/Button';
import TableList from '../../components/TableList';
import Checkbox, { GroupBox } from '../../components/Checkbox';

import data from './dados.json'

function Patient() {
  const [cpf, setCPF] = useState('')

  return (
    <>
      <Header />
      <div className="container py-5 mb-5">
        <Section title="Cadastro de Pacientes" icon="fas fa-hand-holding-medical" />

        <div className="form-row px-4 mb-3">
          <Input label="CPF" tam="3" placeholder="Teste" mask="999.999.999-99" onChange={setCPF} />
          <Input label="Nome" tam="6" placeholder="Seu nome" />
          <Input label="Telefone" tam="3" placeholder="(  ) 9     -    " mask="(99) 9 9999-9999" />
          <Input label="Ocupação" tam="3" placeholder="Sua profissão" />
          <Input label="Idade" tam="2" placeholder="Sua idade" mask="999" />

          <GroupBox tam="3" label="Sexo:" name="sexo" setValue={() => {}} >
            <Checkbox value="M" />
            <Checkbox value="F" />
          </GroupBox>
          
          <div className="form-row d-flex align-items-center">
            <Button text="Inserir" className="controls mr-2" onClick={() => alert(cpf)}/>
            <Button text="Pesquisar" className="controls cancel" cancel onClick={() => {}}/>
          </div>
        </div>

        <div className="px-4">
          <TableList data={data} len={22} range={10} />
        </div>

      </div>
    </>
  );
}

export default Patient;
