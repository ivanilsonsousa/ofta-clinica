import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Section from "../../components/Section";
import Button from "../../components/Button";
import { TableList, TableOptions, TableIcon } from "../../components/TableList";
import Checkbox, { GroupBox } from "../../components/Checkbox";

import api from "../../services/api";
import pacient_icon from "../../assets/patient.svg";

function Patient() {
  const [dataTable, setDataTable] = useState(null);
  const [patient, sePatient] = useState({});
  const [query, setQuery] = useState("");
  const [update, setUpdate] = useState([]);

  const tableConfig = [
    { title: "CPF", flag: "cpf" },
    { title: "Nome", flag: "name" },
    { title: "Telefone", flag: "fone" },
    { title: "Ocupação", flag: "occupation" },
    { title: "Idade", flag: "age" },
    { title: "Sexo", flag: "gender" },
    { title: "Ações", flag: "__actions__" },
  ];

  useEffect(() => {
    api
      .get(`/patient?query=${query}`, {
        headers: { Authorization: "token()" },
      })
      .then((res) => {
        setDataTable(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update, query]);

  function handleInsertPatient() {
    console.log(patient);
    api
      .post("/patient", patient, {
        headers: { Authorization: "token()" },
      })
      .then((res) => {
        setUpdate(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const tableOptions = (
    <TableOptions>
      <TableIcon
        icon="far fa-file-pdf"
        title="Gerar PDF"
        onClick={(e) => console.log(e)}
      />
      <TableIcon
        icon="fas fa-history"
        title="Ver histórico do paciente"
        onClick={(e) => console.log(e)}
      />
      <TableIcon
        icon="fas fa-pencil-alt"
        title="Editar registro"
        onClick={(e) => console.log(e)}
      />
      <TableIcon
        icon="fas fa-trash-alt"
        title="Apagar registro"
        onClick={(e) => console.log(e)}
      />
    </TableOptions>
  );

  return (
    <>
      <Header />
      <div className="container py-5 mb-5">
        <Section
          title="Cadastro de Pacientes"
          icon="fas fa-hand-holding-medical"
          img={
            <img src={pacient_icon} style={{ width: "55px" }} alt="Pacient" />
          }
        />

        <div className="form-row px-4 mb-3">
          <Input
            label="CPF"
            tam="3"
            placeholder="Teste"
            mask="999.999.999-99"
            onChange={(e) => sePatient({ ...patient, cpf: e.target.value })}
          />
          <Input
            label="Nome"
            tam="6"
            placeholder="Seu nome"
            onChange={(e) => sePatient({ ...patient, name: e.target.value })}
          />
          <Input
            label="Telefone"
            tam="3"
            placeholder="(  ) 9     -    "
            mask="(99) 9 9999-9999"
            onChange={(e) => sePatient({ ...patient, fone: e.target.value })}
          />
          <Input
            label="Ocupação"
            tam="3"
            placeholder="Sua profissão"
            onChange={(e) =>
              sePatient({ ...patient, occupation: e.target.value })
            }
          />
          <Input
            label="Idade"
            tam="2"
            placeholder="Sua idade"
            mask="999"
            onChange={(e) => sePatient({ ...patient, age: e.target.value })}
          />

          <GroupBox tam="3" label="Sexo:" name="sexo" setValue={() => {}}>
            <Checkbox value="M" />
            <Checkbox value="F" />
          </GroupBox>

          <div className="form-row d-flex align-items-center">
            <Button
              text="Inserir"
              className="controls mr-2"
              onClick={handleInsertPatient}
            />
            <Button
              text="Pesquisar"
              className="controls cancel"
              cancel
              onClick={() => {}}
            />
          </div>
        </div>

        <TableList
          data={dataTable}
          config={tableConfig}
          options={tableOptions}
          onDoubleClick={(e) => console.log(e)}
        />
      </div>
    </>
  );
}

export default Patient;
