import { useCallback, useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

import { Button } from "../..";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
};

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
        flex
        items-center
        justify-center
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800/70"
      >
        <div
          className="
          relative
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto
          h-full
          lg:h-auto
          md:h-auto"
        >
          {/*CONTENT*/}
          <div
            className={`
            translate
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              md:rounded-xl
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              outline-none 
              focus:outline-none
              bg-backgroundLight
              dark:bg-backgroundDark"
            >
              {/*HEADER*/}
              <div
                className="
                flex
                items-center
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                border-divideLight
                dark:border-divideDark"
              >
                <div
                  className="
                  text-lg
                  font-semibold
                  text-textLight
                  dark:text-textDark"
                >
                  {title}
                </div>

                <button
                  className="
                  p-1
                  border-0
                  hover:opacity-70
                  transition
                  absolute
                  right-9
                  text-textLight
                  dark:text-textDark"
                  onClick={handleClose}
                >
                  <AiOutlineClose size={18} />
                </button>
              </div>

              {/*BODY*/}
              <div
                className="
                relative
                p-6
                flex-auto"
              >
                {body}
              </div>

              {/*FOOTER*/}
              <div
                className="
                flex
                flex-col
                gap-2
                p-6"
              >
                <div
                  className="
                  flex
                  flex-row
                  items-center
                  gap-4
                  w-full"
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                      outline
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
