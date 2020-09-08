import React from "react";
import { Modal } from "react-bootstrap";

import "./styles.css";

export default function AlertModal(props) {
  return (
    <>
      <Modal
        size="md"
        show={props.show}
        onHide={() => props.onDisable(false)}
        animation
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {props.noIcon || (
              <i
                className={
                  props.message
                    ? "fas fa-exclamation-circle mr-2"
                    : "far fa-question-circle mr-2"
                }
              ></i>
            )}
            {props.title}
          </Modal.Title>
        </Modal.Header>
        {props.children && <Modal.Body>{props.children}</Modal.Body>}
        <Modal.Footer>
          <button
            className="button-default cancel btn-modal"
            onClick={() => props.onDisable(false)}
          >
            {props.message ? "Fechar" : "Não"}
          </button>
          {props.message || (
            <button
              className="button-default confirm btn-modal"
              onClick={() => props.func()}
            >
              Sim
            </button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
