import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Section from "../../components/Section";
import Button from "../../components/Button";
import { TableList, TableOptions, TableIcon } from "../../components/TableList";
import Checkbox, { GroupBox } from "../../components/Checkbox";
import Modal from "../../components/Modal";
import Select from "../../components/Select";
import Notification from "../../components/Notification";
import SideBar from "../../components/SideBar";
import {
  WrapperGlobal,
  WrapperSecondary,
  WrapperContent,
} from "../../components/Layout";

import api from "../../services/api";
import pacient_icon from "../../assets/patient.svg";

function Patient() {
  const [not, setNot] = useState({});
  const [dataTable, setDataTable] = useState(null);
  const [modalDelete, setModalDelete] = useState(false);
  const [patient, setPatient] = useState({});
  const [patientEditOptions, setPatientEditOptions] = useState({});
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

  const erros = {
    ER_DUP_ENTRY: "CPF já registrado na base de dados",
    DEFAULT: "Aconteceu um erro, tente novamente...",
    FIELDS_REQUIRED: "Campos obrigatórios estão sem preenchimento",
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/patient?query=${query}`, {
          headers: { Authorization: "token()" },
        });
        setDataTable(response.data);
      } catch (error) {
        console.error(error);

        setNot({
          description: erros["DEFAULT"],
          type: "error",
          open: true,
        });
      }
    })();
  }, [update, query]);

  function validateFields(data = {}, requiredFields = []) {
    const isValid = requiredFields.reduce((valid, currentValue) => {
      return !data[currentValue] ? false : valid;
    }, true);

    return isValid;
  }

  async function handleInsertPatient() {
    const isValid = validateFields(patient, ["cpf", "name", "fone", "gender"]);

    if (!isValid) {
      setNot({
        description: erros["FIELDS_REQUIRED"],
        type: "warning",
        open: true,
      });

      return;
    }

    try {
      const response = await api.post("/patient", patient, {
        headers: { Authorization: "token()" },
      });

      if (response.data.errno) {
        setNot({
          description: erros[response.data.code],
          type: "error",
          open: true,
        });
      } else if (response.status === 200) {
        setUpdate(Date.now());
        setPatient({});
      }
    } catch (error) {
      setNot({
        description: erros["DEFAULT"],
        type: "error",
        open: true,
      });
    }
  }

  async function handleDeletePatiet() {
    try {
      const response = await api.delete(`/patient/${patientEditOptions.id}`, {
        headers: { Authorization: "token()" },
      });

      if (response.data.errno) {
        setNot({
          description: erros[response.data.code],
          type: "error",
          open: true,
        });
        setUpdate(Date.now());
      } else if (response.status === 200) {
        setUpdate(Date.now());
      }
    } catch (error) {
      setNot({
        description: erros["DEFAULT"],
        type: "error",
        open: true,
      });
    }
    setModalDelete(false);
  }

  function handleConfirmDelete(patient) {
    setPatientEditOptions(patient);
    setModalDelete(true);
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
        onClick={(e) => handleConfirmDelete(e)}
      />
    </TableOptions>
  );

  return (
    <WrapperGlobal>
      <SideBar />
      <WrapperSecondary>
        <Header />
        <WrapperContent>
          <Section
            title="Cadastro de Pacientes"
            icon="fas fa-hand-holding-medical"
            img={
              <img src={pacient_icon} style={{ width: "45px" }} alt="Pacient" />
            }
          />

          <div className="row px-2 mb-3">
            <Input
              label="CPF *"
              tam="3"
              placeholder="Teste"
              mask="999.999.999-99"
              onChange={(e) => setPatient({ ...patient, cpf: e.target.value })}
            />
            <Input
              label="Nome *"
              tam="6"
              placeholder="Seu nome"
              onChange={(e) => setPatient({ ...patient, name: e.target.value })}
            />
            <Input
              label="Telefone *"
              tam="3"
              placeholder="(  ) 9     -    "
              mask="(99) 9 9999-9999"
              onChange={(e) => setPatient({ ...patient, fone: e.target.value })}
            />

            <Input
              label="Ocupação"
              tam="3"
              placeholder="Sua profissão"
              onChange={(e) =>
                setPatient({ ...patient, occupation: e.target.value })
              }
            />

            <Input
              label="Idade"
              tam="2"
              placeholder="Sua idade"
              mask="999"
              onChange={(e) => setPatient({ ...patient, age: e.target.value })}
            />

            <GroupBox
              tam="3"
              label="Sexo: *"
              name="sexo"
              onChange={(e) =>
                setPatient({ ...patient, gender: e.target.value })
              }
              setValue={() => {}}
            >
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
        </WrapperContent>
      </WrapperSecondary>

      <Modal
        title={"Você tem certeza que deseja excluir permanentemete o usuário?"}
        show={modalDelete}
        onDisable={setModalDelete}
        confirm={handleDeletePatiet}
      />

      <Notification
        description={not.description}
        type={not.type}
        open={not.open}
        exit={setNot}
      />
    </WrapperGlobal>
  );
}

export default Patient;
