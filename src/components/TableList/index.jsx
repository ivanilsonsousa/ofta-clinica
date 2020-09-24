import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";

import "./styles.css";

const TableContext = createContext();
const OptionsContext = createContext();

function TableList(props) {
  const [index, setIndex] = useState(1);
  const [rows, setRows] = useState([]);

  const {
    data,
    rangeTable,
    config,
    rangeFooter,
    options,
    onDoubleClick,
  } = props;

  const getIndexData = useCallback(
    (i) => {
      if (data) return data[i];
    },
    [data]
  );

  const getRange = useCallback(() => (rangeTable ? rangeTable : 10), [
    rangeTable,
  ]);

  const pages = Math.ceil(data?.length / getRange());

  const getMax = useCallback(
    () => (index === pages ? data?.length : index * getRange()),
    [index, pages, data?.length, getRange]
  );

  useEffect(() => {
    setRows([]);

    for (let i = index * getRange() - getRange(); i < getMax(); i++) {
      setRows((oldElemets) => [...oldElemets, getIndexData(i)]);
    }
  }, [index, getRange, getMax, getIndexData]);

  if (!rows) return <></>;

  return (
    <>
      <TableContext.Provider
        value={{ index, setIndex, config, options, onDoubleClick }}
      >
        <table className="container-fluid table-list">
          <thead>
            <tr>
              {config?.map((el, index) => (
                <th key={index}>{el.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows?.map((el, index) => (
              <TableRow key={index} register={el} />
            ))}
          </tbody>
        </table>
        <TableFooter length={pages} range={rangeFooter} />
      </TableContext.Provider>
    </>
  );
}

function TableRow(props) {
  const { register } = props;
  const { config, options, onDoubleClick } = useContext(TableContext);

  if (!register) return <></>;

  return (
    <tr
      onDoubleClick={onDoubleClick ? () => onDoubleClick(register) : () => {}}
    >
      {config?.map((el, index) => {
        return el?.flag === "__actions__" ? (
          <OptionsContext.Provider value={{ register }} key={index}>
            {options}
          </OptionsContext.Provider>
        ) : (
          <td key={index}>{register[el?.flag]}</td>
        );
      })}
    </tr>
  );
}

function TableFooter(props) {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);
  const [gap, setGap] = useState(1);
  const [items, setItems] = useState([]);

  const { index, setIndex } = useContext(TableContext);

  let { length } = props;

  const range = props.range ? props.range : 10;

  const pages = Math.ceil(length / range);

  const getMax = useCallback(() => (pages === gap ? length : range * gap), [
    pages,
    gap,
    length,
    range,
  ]);

  useEffect(() => {
    let max = getMax();

    if (max === length) setRight(false);

    setItems([]);
    for (let i = range * gap - range + 1; i <= max; i++) {
      setItems((oldElemets) => [
        ...oldElemets,
        <li
          key={i}
          title={`Ir para a página ${i}`}
          className={i === index ? "active" : ""}
          onClick={() => setIndex(i)}
        >
          {i}
        </li>,
      ]);
    }
  }, [gap, range, index, length, getMax, setIndex]);

  function handleLeft() {
    if (pages === gap) {
      setRight(true);
    }

    if (gap === 2) {
      setGap(gap - 1);
      setLeft(false);
    } else {
      setGap(gap - 1);
    }
  }

  function handleRight() {
    setGap(gap + 1);

    if (gap >= 1) {
      setLeft(true);
    }
  }

  return (
    <div className="table-footer no-touch">
      <i
        className="fas fa-angle-left mr-2"
        onClick={() => handleLeft()}
        hidden={!left}
      />
      {items}
      <i
        className="fas fa-angle-right ml-2"
        onClick={() => handleRight()}
        hidden={!right}
      />
    </div>
  );
}

const TableOptions = (props) => (
  <td className="table-actions">{props.children}</td>
);

const TableIcon = ({ icon, title, onClick }) => {
  const { register } = useContext(OptionsContext);
  return (
    <i
      className={`${icon} mr-2`}
      title={title}
      onClick={onClick ? () => onClick(register) : () => {}}
    />
  );
};

export default TableList;

export { TableList, TableOptions, TableIcon };
