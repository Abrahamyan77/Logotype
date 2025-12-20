import './popup.css';


const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            {children}
        </div>
    );
}
export default Popup;