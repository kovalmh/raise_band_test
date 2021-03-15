import React, { useState } from 'react';
import Modal from 'react-modal';
import  ModalImage from '../../assets/img/popup-img 1.png';
import { customStyles, 
  ModalInput, 
  ModalForm, 
  ModalHeader, 
  ModalInfo,
  ModalText,
  ModalButton,
  ModalClose,
  Image
   } from './AnrufModal.style'

function AnrufModal() {
  const [open, setOpen] = useState(true);
 
  const closeModal = () => setOpen(false);

    return (
      <Modal 
          isOpen={open}
          style={customStyles}
            >
        <Image src={ModalImage} />
          <ModalInfo>
              <ModalHeader children="Sed ut perspiciatis" />
              <ModalText children="Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, ut enim ad minima veniam, quis nostrum exercitationem ullam corporis." />              
              <ModalForm>
                <ModalInput type="email" placeholder="deine@email.com" />
                <ModalInput type="text" placeholder="Name" />
                <ModalButton type="submit" children="Ja, ich möchte!" />
              </ModalForm>
          </ModalInfo>
          <ModalClose onClick={closeModal} />
      </Modal>
    )
}

export default AnrufModal;