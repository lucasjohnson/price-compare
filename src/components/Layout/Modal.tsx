import React from 'react';
import { motion } from 'framer-motion';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import Context from '../../context/Context';
import Portal from './Portal';
import Form from '../Form/Form';
import Icon from '../Core/Icon';
import { ButtonIcon } from '../../emotion/Button';
import { IconType } from '../../enums/Index';

interface OverlayProps {
  visibility: string;
  opacity: number;
}

interface OverlayState {
  open: OverlayProps;
  closed: OverlayProps;
}

const Modal: React.FC = () => {
  const overlayState: OverlayState = {
    open: { visibility: `visible`, opacity: 1 },
    closed: { visibility: `hidden`, opacity: 0 },
  };

  return (
    <Context.Consumer>
      {({ modalActive, toggleModal }) => (
        <Portal>
          <motion.div
            className={css`
              width: 100vw;
              height: 100vh;
              background-color: rgba(0, 0, 0, 0.7);
              position: absolute;
              top: 0;
              left: 0;
            `}
            initial="closed"
            animate={modalActive ? 'open' : 'closed'}
            variants={overlayState}
            transition={{ duration: 0.2 }}
          >
            <ModalElement>
              <ButtonIcon onClick={() => toggleModal(null)}>
                <Icon type={IconType.CROSS} />
              </ButtonIcon>
              <Form />
            </ModalElement>
          </motion.div>
        </Portal>
      )}
    </Context.Consumer>
  );
};

export default Modal;

const ModalElement = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
`;
