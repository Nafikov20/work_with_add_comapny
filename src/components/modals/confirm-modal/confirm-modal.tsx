import React, { PropsWithChildren, useState } from 'react';

import { ButtonView } from '@/shared/types/button.ts';
import { Modal } from '@mui/material';
import { CustomButton } from '@/components/ui/custom-button.tsx';
import { useStylesModal } from '@/shared/static/tss-styles/modal-styles/modal-styles.ts';
import { Icon } from '@/components/ui/custom-icon.tsx';
import Box from '@mui/material/Box';

interface ConfirmModalProps {
  onConfirm: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonView?: ButtonView;
  confirmButtonText?: 'Снять' | string;
  title?: string;
}

export const ConfirmModal = ({
  buttonView = 'danger',
  title = 'Действительно удалить?',
  confirmButtonText = 'Удалить',
  children,
  onConfirm
}: PropsWithChildren<ConfirmModalProps>) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { classes } = useStylesModal();
  const handleConfirm = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsLoading(true);
    await onConfirm(e);
    setIsLoading(false);
    hideModal();
  };

  const hideModal = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.stopPropagation();
    setIsVisible(false);
  };

  return (
    <>
      <div
        onClick={(e) => {
          setIsVisible(true);
          e.stopPropagation();
        }}>
        {children}
      </div>

      <Modal
        open={isVisible}
        onClose={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => hideModal(e)}>
        <Box className={classes.modalWrap}>
          <div className={classes.headerWrap}>
            <h1 className={classes.title}>{title}</h1>
            <CustomButton
              view="default"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => hideModal(e)}>
              <Icon name="close" />
            </CustomButton>
          </div>
          <div className={classes.formWrap}>
            <CustomButton loading={isLoading} view={buttonView} onClick={(e) => handleConfirm(e)}>
              {confirmButtonText}
            </CustomButton>
            <CustomButton view="default" onClick={(e) => hideModal(e)}>
              Отменить
            </CustomButton>
          </div>
        </Box>
      </Modal>
    </>
  );
};
