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
    <button className={`lang ${active ? 'active' : ''}`} onClick={handleClick}>
      <p className="toggle-label">{!active ? 'ru' : 'en'}</p>
    </button>
  );
};

export default Toggle;
