import './header.css';
import Button from '@mui/material/Button';
import { IHeaderProps } from 'interfaces/interface';
import { Link } from 'react-router-dom';

const Header: React.FC<IHeaderProps> = ({ type, text }) => {
  return (
    <header className={`header ${type}`}>
      <div className="headerMainArea">
        {type === 'application' ? (
          <img
            className={`logo ${type === 'application' ? 'logoSmall' : 'logoUsual'}`}
            src="./../public/logo_white.png"
            alt="red-cross logo"
          />
        ) : (
          <img
            className={`logo ${type === 'application' ? 'logoSmall' : 'logoUsual'}`}
            src="./../public/logo.png"
            alt="red-cross logo"
          />
        )}

        <h1 className="title">{text}</h1>
      </div>

      {type === 'application' && (
        <Link to="/">
          <Button
            variant="contained"
            style={{
              backgroundColor: 'var(--colorLightGrey)',
              color: 'var(--colorGrey)',
              textTransform: 'none',
              fontSize: '14px',
              minWidth: '0',
              padding: '1px 8px',
            }}
          >
            ✖
          </Button>
        </Link>
      )}
    </header>
  );
};

export default Header;
