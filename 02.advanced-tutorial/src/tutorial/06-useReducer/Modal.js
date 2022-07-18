import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    let modal = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => clearInterval(modal);
  });
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
