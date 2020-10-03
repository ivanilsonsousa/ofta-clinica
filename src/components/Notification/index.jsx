import React, { useEffect, useState } from "react";
import Toast from "react-toast-component";

import "./styles.css";

function Notification({ title, type, description, open, exit }) {
  const [isOpen, setToast] = useState(false);

  useEffect(() => {
    setToast(open);
  }, [open]);

  function handleExit() {
    setToast(false);
    setTimeout(() => {
      exit(false);
    }, 2000);
  }

  return (
    <Toast
      isOpen={isOpen}
      hasAutoDismiss={true}
      hasCloseBtn
      appearance={type}
      closeCallback={handleExit}
      description={description}
      title={title || "Aviso"}
      duration={5000}
      classNames={[type]} // 'success', 'info', 'warning', 'error'
    />
  );
}

export default Notification;
