import TextBlock from '../components/textBlock';
import Button from '@mui/material/Button';
import './home.css';
import HelpList from '../containers/helpList';
import { Link } from 'react-router-dom';
import Header from '../containers/header/header';
const Home = () => {
  const customColor = 'var(--red)';
  return (
    <div className="contentWrapper">
      <Header type={'mainPage'} text={'Помощь беженцам'} />
      <TextBlock />
      <div className="buttonArea">
        <Link to="/application/step1">
          <Button
            variant="contained"
            style={{
              width: '250px',
              backgroundColor: customColor,
              color: '#fff',
              textTransform: 'none',
              fontSize: '14px',
            }}
          >
            Оставить заявку на помощь
          </Button>
        </Link>
      </div>
      <HelpList />
      <div className="buttonArea">
        <Link to="/application/step1">
          <Button
            variant="contained"
            style={{
              width: '250px',
              backgroundColor: customColor,
              color: '#fff',
              textTransform: 'none',
              fontSize: '14px',
            }}
          >
            Оставить заявку на помощь
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
