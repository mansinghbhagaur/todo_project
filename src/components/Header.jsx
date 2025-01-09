import { MdSunny, MdOutlineWbSunny } from "react-icons/md";
import { ContextUse } from '../context/ThemeContext';

const Header = () => {
  const { theme, ToggleTheme } = ContextUse();

  const Theme = {
    'light': {
      background: '#fff',
      color: '#000',
    },
    'black': {
      background: '#000',
      color: '#fff',
    },
  };

  return (  
    <div
      style={{
        background: Theme[theme].background,
        color: Theme[theme].color,
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <h1 style={{ margin: 0, fontSize: '24px' }}>Todo</h1>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '30px',
          cursor: 'pointer',
        }}
        onClick={ToggleTheme}
      >
        {theme === 'light' ? <MdSunny /> : <MdOutlineWbSunny />}
      </span>
    </div>
  );
};

export default Header;
