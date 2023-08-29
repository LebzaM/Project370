import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    marginTop:'150px',
    width: '80%', // Adjust the width for small devices
    maxWidth: '400px', // Set a maximum width for very small screens
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: '4px',
    padding: '10px',
  },
};

Modal.setAppElement('#root'); // Make sure to set your app root element here.

function ModalComponent({ isOpen, onRequestClose, children }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      {children}
    </Modal>
  );
}

export default ModalComponent