const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
