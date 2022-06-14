import React from "react";

const Modal = ({ hideModal, children, comp }) => {
  return (
    <div onClick={() => hideModal(comp)} className='modal-backdrop'>
      <div onClick={(e) => e.stopPropagation()} className='modal'>
        {children}
      </div>
    </div>
  );
};

export default Modal;
