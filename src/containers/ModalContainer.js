import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'components/modal'

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #f08080;
  text-align: center;

  .modal_open_btn {
    position: absolute;
    margin-top: 20%;
    width: 200px;
    height: 50px;
    font-size: 16px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid #000;
    cursor: pointer;
    outline: none;
  }
`

const ModalChild = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  min-width: 360px;
  min-height: 200px;
  // max-width: 480px;
  padding: 20px;
  margin: 0 20px;
  z-index: 100;
  outline: none;

  .modal-title {
    border-bottom: 1px solid #000;
    height: 30px;
    button {
      position: absolute;
      right: 20px;
      border-radius: 10px;
      border: 0;
      background: #cecece;
      outline: none;
      cursor: pointer;
    }
  }
`

const ModalContainer = () => {
  const [allVisible, setAllVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState([false, false, false])

  const openModal = () => {
    setAllVisible(true)
    setModalVisible([true, true, true])
  }
  const closeAllModal = () => {
    setAllVisible(false)
    setModalVisible([false, false, false])
  }

  const closeModal = (num) => {
    setModalVisible([...modalVisible.slice(0, num), false, ...modalVisible.slice(num + 1)])
  }

  return (
    <StyledContainer className={'modal_container'}>
      <button className={'modal_open_btn'} onClick={openModal}>
        {allVisible ? 'close modal' : 'open modal'}
      </button>
      <Modal visible={allVisible} onClose={closeAllModal}>
        <ModalChild className={'modal_child'} visible={modalVisible[0]}>
          <div className={'modal-title'}>
            Modal Title1 <button onClick={() => closeModal(0)}>close</button>
          </div>
          <div>modal test</div>
          <div>modal test</div>
        </ModalChild>
        <ModalChild className={'modal_child'} visible={modalVisible[1]}>
          <div className={'modal-title'}>
            Modal Title2 <button onClick={() => closeModal(1)}>close</button>
          </div>
          <div>modal test</div>
          <div>modal test</div>
        </ModalChild>
        <ModalChild className={'modal_child'} visible={modalVisible[2]}>
          <div className={'modal-title'}>
            Modal Title3 <button onClick={() => closeModal(2)}>close</button>
          </div>
          <div>modal test</div>
          <div>modal test</div>
        </ModalChild>
      </Modal>
    </StyledContainer>
  )
}

export default ModalContainer
