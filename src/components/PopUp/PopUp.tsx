import ReactDOM from 'react-dom';
import styles from './PopUp.module.scss';

type PopUpProps = {
  isVisible: boolean;
  onClose: () => void;
};

export const PopUp = ({ isVisible, onClose, children }: React.PropsWithChildren<PopUpProps>): JSX.Element => {
  const onClick = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest('.popup-content')) onClose();
  };

  return ReactDOM.createPortal(
    <div className={isVisible ? styles['popup-active'] : styles.popup} onClick={onClick}>
      <div className={styles['popup-body']}>
        <div className={`${styles['popup-content']} popup-content`}>
          <div className={styles['popup-close']} onClick={onClose}></div>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement
  );
};
