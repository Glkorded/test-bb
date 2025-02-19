import { createPortal } from "react-dom";
import {PropsWithChildren, useEffect} from "react";
import {ModalWrapper} from "./styles.ts";

export const Modal = ({ children }: PropsWithChildren) => {
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'unset';
    }
  }, []);

  if (!modalRoot) {
    return;
  }

  return createPortal(<ModalWrapper>{children}</ModalWrapper>, modalRoot);
};
