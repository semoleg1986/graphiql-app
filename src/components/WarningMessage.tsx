interface WarningMessageProps {
  message: string;
  onClose: () => void;
}

const WarningMessage: React.FC<WarningMessageProps> = ({ message, onClose }) => (
  <div className="warning-message">
    <p>{message}</p>
    <button onClick={onClose}>X</button>
  </div>
);

export default WarningMessage;
