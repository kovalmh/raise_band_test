import React, { useState } from 'react';
import Modal from 'react-modal';
import  ModalImage from '../../assets/img/popup-img 1.png';
import './AnrufModal.style.css';

export default function AnrufModal() {
  const [open, setOpen] = useState(true);
 
  const closeModal = () => setOpen(false);

    return (
      <Modal 
          isOpen={open}
          className="Modal"
          overlayClassName="Overlay"
            >
        <img className="ModalImage" src={ModalImage} />
          <div className="ModalInfo">
              <span className="ModalHeader" children="Sed ut perspiciatis" />
              <p className="ModalText" children="Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, ut enim ad minima veniam, quis nostrum exercitationem ullam corporis." />
              <form className="ModalForm">
                <input className="ModalInput" type="email" placeholder="deine@email.com" />
                <input className="ModalInput" type="text" placeholder="Name" />
                <button className="ModalButton" type="submit" children="Ja, ich möchte!" />
              </form>
          </div>
          <a className="ModalClose" onClick={closeModal} />
      </Modal>
    )
}