import React from 'react';
import { motion } from 'framer-motion';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Subtitle } from '../../emotion/Typography';
import Context from '../../context/Context';
import Portal from './Portal';
import Form from '../Form/Form';
import Icon from '../Core/Icon';
import { ButtonIcon } from '../../emotion/Button';
import { IconType, ModalVariant } from '../../enums/Index';
import Copy from '../../json/copy.json';

interface OverlayMotionProps {
  visibility: string;
  opacity: number;
}

interface OverlayMotion {
  open: OverlayMotionProps;
  closed: OverlayMotionProps;
}

const Modal: React.FC = () => {
  const overlayMotion: OverlayMotion = {
    open: { visibility: `visible`, opacity: 1 },
    closed: { visibility: `hidden`, opacity: 0 },
  };

  const renderTitle = (variant: string): any => {
    switch (variant) {
      case ModalVariant.ADD_ITEM:
        return <Subtitle>{Copy.addItem}</Subtitle>;
      default:
        return null;
    }
  };

  return (
    <Context.Consumer>
      {({ modalActive, toggleModal, modalVariant }) => (
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
            variants={overlayMotion}
            transition={{ duration: 0.2 }}
          >
            <ModalElement>
              <ModalHeader>
                {renderTitle(modalVariant)}
                <ButtonIcon onClick={() => toggleModal(null)}>
                  <Icon type={IconType.CROSS} />
                </ButtonIcon>
              </ModalHeader>
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

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
