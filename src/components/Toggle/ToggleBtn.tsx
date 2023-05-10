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
    </div>
  );
};

export default ToggleBtn;
