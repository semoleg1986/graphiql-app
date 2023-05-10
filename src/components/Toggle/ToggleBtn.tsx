import React from 'react';
import './ToggleBtn.css';

interface ToggleBtnProps {
  active: boolean;
  onClick: () => void;
}

const ToggleBtn: React.FC<ToggleBtnProps> = ({ active, onClick }) => {
  return (
    <div className={`toggle-btn ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="inner-circle"></div>
      <div className="moon">
        <div className="moon-1"></div>
        <div className="moon-2"></div>
      </div>
    </div>
  );
};

export default ToggleBtn;
