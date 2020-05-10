import React, { useState, useEffect, createContext, useContext } from 'react';
import Modal from '../Modal';

import './styles.css'

const TableContext = createContext()

function TableList(props) {
  const [index, setIndex] = useState(1)
  const [rows, setRows] = useState([])

  const { data, range } = props
  
  const getRange = () => range ? range : 10

  const pages = Math.ceil(data.length / getRange())

  const getMax = () => index === pages ? data.length : index * getRange() 

  const getIndexData = i => data[i]

  useEffect(() => {
    setRows([])

    for (let i = index * getRange() - getRange(); i < getMax() ; i++) {
      setRows(oldElemets => [...oldElemets, getIndexData(i)])
    }
  }, [index]) // eslint-disable-line

  return (
    <>
    <table className="container-fluid table-list">
      <thead>
        <tr>
          <th>CPF</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Ocupação</th>
          <th>Idade</th>
          <th>Sexo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
          { rows?.map((el, index) => <TableRow key={index} patient={el} />) }
      </tbody>
    </table>
    <TableContext.Provider value={{ index, setIndex }} >
      <TableFooter length={pages} range={10} funcD={setIndex} />
    </TableContext.Provider>
    </>
  );
}

function TableRow(props) {
  const { patient } = props
  const [modalDelete, setModalDelete] = useState(false)  

  return (
    <tr>
      <td>{patient.cpf}</td>
      <td>{patient.name}</td>
      <td>{patient.phone}</td>
      <td>{patient.work}</td>
      <td>{patient.age}</td>
      <td>{patient.gender}</td>
      <td className="table-actions">
        <i className="far fa-file-pdf mr-2" title="Gerar PDF" />
        <i class="fas fa-history mr-2" title="Ver histórico do paciente" />
        <i className="fas fa-pencil-alt mr-2" title="Editar registro" />
        <i className="fas fa-trash-alt" onClick={() => setModalDelete(true)} title="Apagar registro" />
      </td>
      <Modal title="Deseja realmente apagar esse registro?" show={modalDelete} onDisable={setModalDelete} func={() => console.log(patient)} />
    </tr>
  )
}

function TableFooter(props) {
  const [left, setLeft] = useState(false)
  const [right, setRight] = useState(true)
  const [gap, setGap] = useState(1)
  const [items, setItems] = useState([])

  const { index, setIndex } = useContext(TableContext)

  let { length } = props

  const range = props.range ? props.range : 10


  const pages = Math.ceil(length / range)

  useEffect(() => {
    let max = pages === gap ? length : (range * gap)
    
    if (max === length)
      setRight(false)

    setItems([])
    for (let i = ((range * gap - range) + 1); i <= max; i++) {
      setItems(oldElemets => [...oldElemets, <li key={i} className={i === index ? "active" : ''} onClick={() => setIndex(i)} >{i}</li>])
    }
  }, [gap, index]) // eslint-disable-line

  function hanleLeft() {
    if (pages === gap) {
      setRight(true)
    }

    if (gap === 2) {
      setGap(gap - 1)
      setLeft(false)  
    } else {
      setGap(gap - 1)
    }
  }

  function hanleRight() {
    setGap(gap + 1)

    if (gap >= 1) {
      setLeft(true)
    } 
  }

  return (
    <div className="table-footer no-touch">
      <i className="fas fa-angle-left mr-2" onClick={() => hanleLeft()} hidden={!left} />
      {items}
      <i className="fas fa-angle-right ml-2" onClick={() => hanleRight()} hidden={!right} />
    </div>
  )
}

export default TableList;