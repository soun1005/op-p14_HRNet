type Props = {
  closeModal: (value: boolean) => void;
  backgroundClass: string;
  containerClass: string;
  bodyClass: string;
  modalMsgClass: string;
  modalMsg: string;
  footerClass: string;
  btnClass: string;
  btnLabel: string;
  btnLabelClass: string;
};

const Modal: React.FC<Props> = ({
  closeModal,
  backgroundClass,
  containerClass,
  bodyClass,
  modalMsgClass,
  modalMsg,
  footerClass,
  btnClass,
  btnLabel,
  btnLabelClass,
}) => {
  return (
    <div className={backgroundClass}>
      {/* fake background : blurry and grey */}
      <div className={containerClass}>
        <div className={bodyClass}>
          <h1 className={modalMsgClass}>{modalMsg}</h1>
        </div>
        <div className={footerClass}>
          <button className={btnClass} onClick={() => closeModal(false)}>
            <span className={btnLabelClass}>{btnLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
