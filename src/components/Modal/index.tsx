import "./style.css";

interface IModalProps {
  isOpen: boolean;
  children?: JSX.Element;
  closeModal: () => void;
}

export default function Modal(props: IModalProps) {
  if (props.isOpen) {
    return (
      <div className="modal">
        <div className="modal-content">
          {props.children}
          <button type="button" onClick={props.closeModal}>
            Fechar
          </button>
        </div>
      </div>
    );
  }
  return null;
}
