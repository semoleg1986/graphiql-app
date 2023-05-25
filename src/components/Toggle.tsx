import React, { useState } from 'react';
import './Toggle.css';

interface ToggleProps {
  handleLanguageChanged: (lang: string) => void;
}

const Toggle = ({ handleLanguageChanged }: ToggleProps) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    const lang = active ? 'en' : 'ru';
    handleLanguageChanged(lang);
  };

  return (
    <div className={`toggle-btn ${active ? 'active' : ''}`} onClick={handleClick}>
      <div className="inner-circle">
        {/* <span className="toggle-label">{!active ? 'ru' : 'en'}</span> */}
      </div>
      <h4>en ru</h4>
    </div>
  );
};

export default Toggle;
