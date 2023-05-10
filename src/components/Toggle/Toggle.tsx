import React, { useState } from 'react';
import './Toggle.css';
import ToggleBtn from './ToggleBtn';

interface ToggleProps {
  initialTheme?: boolean;
  onChange?: (theme: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ initialTheme = false, onChange }) => {
  const [darkTheme, setDarkTheme] = useState(initialTheme);

  const toggleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    if (onChange) {
      onChange(newTheme);
    }
  };

  return (
    <div className={`toggle ${darkTheme ? 'dark-theme' : ''}`}>
      <ToggleBtn active={darkTheme} onClick={toggleTheme} />
    </div>
  );
};

export default Toggle;
