import React, { useState } from "react";
import Input from "../../components/Input";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Checkbox, { GroupBox } from "../../components/Checkbox";
import Option, { ContainerOption } from "../../components/Option";

import "./styles.css";

// import logo from '../../assets/logo-grande.jpg'

function Home() {
  const [hide, setHide] = useState(true);
  const [hide2, setHide2] = useState(true);
  const [hide3, setHide3] = useState(true);
  const [hide4, setHide4] = useState(true);
  const [check, setCheck] = useState("");

  return (
    <>
      <Header />
      <div className="container pt-5 content-form">
        <div className="row d-flex justify-content-between align-items-baseline mb-4">
          <h4 className="text-uppercase">Exame Optométrico</h4>
        </div>

        <Section title="Identificação" />

        <div className="bg-light p-2 mb-3 d-flex justify-content-between align-items-center">
          <span>Controle n° 0001</span>
          <span className="ml-5">Data {new Date().toLocaleDateString()}</span>
        </div>

        <div className="form-row px-4 mb-2">
          <Input
            label="CPF"
            tam="3"
            placeholder="Teste"
            mask="999.999.999-99"
            info
          />
          <Input label="Nome" tam="6" placeholder="Seu nome" info />
          <Input
            label="Telefone"
            tam="3"
            placeholder="(  ) 9     -    "
            mask="(99) 9 9999-9999"
          />
          <Input label="Ocupação" tam="3" placeholder="Sua profissão" />
          <Input label="Idade" tam="3" placeholder="Sua idade" mask="999" />
          <Input label="Local" tam="4" placeholder="Seu local" />

          <GroupBox
            tam="2"
            label="Sexo:"
            name="sexo"
            setValue={setCheck}
            value={check}
          >
            <Checkbox value="M" />
            <Checkbox value="F" />
          </GroupBox>

          <GroupBox tam="5" label="Visita" name="visita" setValue={() => {}}>
            <Checkbox label="1 vez" value="1VEZ" />
            <Checkbox label="-1 ano" value="-1ANO" />
            <Checkbox label="2 anos" value="2ANOS" />
            <Checkbox label="Outros" value="OUTROS" active={setHide} />
          </GroupBox>

          <Input placeholder="Outra visita" tam="7" hidden={hide} />
        </div>

        <Section title="Motivo da Consulta" />
        <div className="container">
          <ContainerOption className="mb-0 pb-3">
            <Option text="Fotofobia" value="fotofobia" />
            <Option text="Astenopia" value="astenopia" />
            <Option text="Faz fenda" value="fenda" />
            <Option text="Ardência" value="ardencia" />
            <Option text="Ver de longe" value="longe" />
            <Option text="Ver de perto" value="perto" />
            <Option text="Prurido" value="prurido" />
            <Option text="Revisão" value="revisao" />
            <Option text="Blefarite" value="blefarite" />
            <Option text="Dor ocular" value="dor-ocular" />
            <Option text="Embaçamento" value="embacamento" />
            <Option text="Dor de cabeça" value="dor-cabeca" />
            <Option text="Cansaço da visão" value="cansaco-visao" />
            <Option text="Miodesopcia" value="miodesopcia" />
            <Option text="Escurecimento" value="escurecimento" />
            <Option text="Retorno" value="retorno" />
            <Option text="Outros" value="outros" active={setHide2} />
            <Input placeholder="Outra motivos de consulta" hidden={hide2} />
          </ContainerOption>
        </div>

        <Section title="Antecedentes Pessoais" />
        <div className="container">
          <ContainerOption className="mb-0 pb-0">
            <Option text="Glaucoma" value="glaucoma" />
            <Option text="Catarata" value="catarata" />
            <Option text="Pterigio" value="pterigio" />
            <Option text="Diabetes" value="diabetes" />
            <Option text="Hipertensão" value="hipertensao" />
            <Option text="Pinguecula" value="pinguecula" />
            <Option text="Traumas" value="traumas" />
            <Option text="Gravidez de risco" value="gravidez-de-risco" />
          </ContainerOption>

          <div className="form-row px-4">
            <GroupBox
              tam="4"
              label="Usa algum medicamento?"
              name="medicamento"
              setValue={() => {}}
            >
              <Checkbox value="Sim" active={setHide3} />
              <Checkbox value="Não" />
            </GroupBox>

            <Input tam="8" placeholder="Sim, quais?" hidden={hide3} />
          </div>

          <div className="form-row px-4">
            <GroupBox
              tam="4"
              label="Já fez alguma cirurgia?"
              name="cirurgia"
              setValue={() => {}}
            >
              <Checkbox value="Sim" active={setHide4} />
              <Checkbox value="Não" />
            </GroupBox>

            <Input tam="8" placeholder="Sim, quais?" hidden={hide4} />
          </div>
        </div>

        <Section title="Antecedentes Familiares" />
        <div className="container">
          <ContainerOption className="mb-0 pb-0">
            <Option text="Glaucoma" value="fa-glaucoma" />
            <Option text="Catarata" value="fa-catarata" />
            <Option text="Usuário" value="fa-usuario" />
            <Option text="Diabetes" value="fa-diabetes" />
            <Option text="Hipertensão" value="fa-hipertensao" />
            <Option text="Síndrome" value="fa-síndrome" />
            <Option text="Caso de cegueira" value="fa-cegueira" />
            <Option text="Outros" value="fa-outros" active={setHide3} />
            <Input
              placeholder="Outros antecendentes familiares"
              hidden={hide3}
            />
          </ContainerOption>

          <div className="form-row px-4">
            <GroupBox
              tam="4"
              label="Usa óculos?"
              name="oculos"
              setValue={() => {}}
            >
              <Checkbox value="Sim" />
              <Checkbox value="Não" />
            </GroupBox>

            <GroupBox tam="5" name="oculos" setValue={() => {}}>
              <Checkbox value="Bifocal" />
              <Checkbox value="VS" />
              <Checkbox value="Progressiva" />
              <Checkbox value="LC" />
            </GroupBox>
          </div>
        </div>

        <hr />

        <div className="form-row px-4">
          <GroupBox
            tam="4"
            label="Hirschberg:"
            name="oculos"
            setValue={() => {}}
          >
            <Checkbox value="Centrado" />
            <Checkbox value="Descentrado" />
          </GroupBox>

          <GroupBox tam="5" name="oculos" setValue={() => {}}>
            <Checkbox value="7°" />
            <Checkbox value="15°" />
            <Checkbox value="35°" />
            <Checkbox value="45" />
          </GroupBox>
        </div>

        <div className="form-row px-4">
          <GroupBox tam="4" label="Kappa:" name="oculos" setValue={() => {}}>
            <Checkbox value="OD" />
            <Checkbox value="OE" />
          </GroupBox>

          <GroupBox tam="5" name="oculos" setValue={() => {}}>
            <Checkbox value="+Nasal" />
            <Checkbox value="-Temporal" />
            <Checkbox value="0zero" />
          </GroupBox>
        </div>

        <div className="form-row px-4">
          <GroupBox
            tam="4"
            label="Hirschberg:"
            name="oculos"
            setValue={() => {}}
          >
            <Checkbox value="Centrado" />
            <Checkbox value="Descentrado" />
          </GroupBox>

          <GroupBox tam="5" name="oculos" setValue={() => {}}>
            <Checkbox value="7°" />
            <Checkbox value="15°" />
            <Checkbox value="35°" />
            <Checkbox value="45" />
          </GroupBox>
        </div>

        <div className="form-row px-4">
          <div className="col-2 d-flex align-items-center">
            <span className="mb-2">Ducções: </span>
          </div>
          <GroupBox tam="2" name="oculos" setValue={() => {}}>
            <Checkbox label="MSC (OD)" value="MSC (OD)" />
          </GroupBox>
          <Input tam="3" placeholder="Sim, quais?" active />

          <GroupBox tam="2" name="oculos" setValue={() => {}}>
            <Checkbox label="MSC (OE)" value="MSC (OE)" />
          </GroupBox>

          <Input tam="3" placeholder="Sim, quais?" active />
        </div>

        <GroupBox
          className="ml-2"
          tam="4"
          label="Exames pupilares: "
          name="oculos"
          setValue={() => {}}
        >
          <Checkbox value="Presente" />
          <Checkbox value="Ausente" />
        </GroupBox>

        <div className="form-row px-4">
          <div className="col-2 d-flex align-items-center">
            <span className="mb-2">Oftamoscopia: </span>
          </div>
          <GroupBox tam="3" name="oculos" setValue={() => {}}>
            <Checkbox label="Normal" value="Normal" />
            <Checkbox label="Alterado" value="Alerado" />
          </GroupBox>
          <Input tam="7" placeholder="Descreva" active />
        </div>

        <div className="form-row px-4">
          <div className="col-2 d-flex align-items-center">
            <span className="mb-2">Ceratrometria: </span>
          </div>
          <GroupBox tam="1" name="oculos" setValue={() => {}}>
            <Checkbox label="(OD)" value="(OD)" />
          </GroupBox>
          <Input tam="4" placeholder="Descreva" active />

          <GroupBox tam="1" name="oculos" setValue={() => {}}>
            <Checkbox label="(OE)" value="(OE)" />
          </GroupBox>

          <Input tam="4" placeholder="Descreva" active />
        </div>

        <div className="form-row px-4">
          <div className="col-2 d-flex align-items-center">
            <span className="mb-2">R. Estatistica: </span>
          </div>
          <GroupBox tam="1" name="oculos" setValue={() => {}}>
            <Checkbox label="(OD)" value="(OD)" />
          </GroupBox>
          <Input tam="4" placeholder="Descreva" active />

          <GroupBox tam="1" name="oculos" setValue={() => {}}>
            <Checkbox label="(OE)" value="(OE)" />
          </GroupBox>

          <Input tam="4" placeholder="Descreva" active />
        </div>

        <div className="form-row px-4">
          <div className="col-2 d-flex align-items-center">
            <span className="mb-2">E. Dinâmica: </span>
          </div>
          <GroupBox tam="1" name="oculos" setValue={() => {}}>
            <Checkbox label="(OD)" value="(OD)" />
          </GroupBox>
          <Input tam="4" placeholder="Descreva" active />

          <GroupBox tam="1" name="oculos" setValue={() => {}}>
            <Checkbox label="(OE)" value="(OE)" />
          </GroupBox>

          <Input tam="4" placeholder="Descreva" active />
        </div>

        <hr />

        <div className="p-3 d-flex alig-items-center justify-content-end">
          <Button text="Cancelar" cancel className="mr-2" />
          <Button text="Confirmar" />
        </div>
      </div>
    </>
  );
}

export default Home;
