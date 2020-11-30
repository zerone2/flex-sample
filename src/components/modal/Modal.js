import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

const ModalOverlay = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`

const ModalWrapper = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 100;
  overflow: auto;
  outline: none;
`

const Modal = (props) => {
  const { className, visible, children, onClose } = props
  return (
    <>
      <ModalOverlay visible={visible} onClick={onClose} />
      <ModalWrapper className={cx('modal_wrapper', className)} visible={visible}>
        {children}
      </ModalWrapper>
    </>
  )
}

export default Modal
