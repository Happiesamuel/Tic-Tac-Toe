import { cloneElement, createContext, useContext, useState } from "react";

const ModalContext = createContext();
export function Modal({ children }) {
  const [openModal, setOpenModal] = useState("");
  const close = () => setOpenModal("");
  return (
    <ModalContext.Provider value={{ openModal, setOpenModal, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ open, children }) {
  const { setOpenModal } = useContext(ModalContext);
  function handleOpen() {
    setOpenModal(open);
  }
  return <div onClick={() => handleOpen()}>{children}</div>;
}
function Window({ children, window }) {
  const { openModal, close } = useContext(ModalContext);
  if (window !== openModal) return null;
  return (
    <div className="openModal">
      <div className="overlay" onClick={close}>
        <div className="child">{cloneElement(children, { close: close })}</div>
      </div>
    </div>
  );
}
Modal.Open = Open;
Modal.Window = Window;
