import { useState } from 'react';
import './yourDataPage.css';
import YouDataForm from '../containers/YouDataForm';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../containers/header/header';

const YourDataPage = () => {
  const [blockState, setBlockState] = useState<{ id: number; component: any }[]>([]);
  const [idHandler, setIdHandler] = useState(1);
  const handleAddBlock = () => {
    setBlockState([...blockState, { id: idHandler, component: {} }]);
    setIdHandler(idHandler + 1);
  };
  const onDeleteClick = (number: number) => {
    const newState = blockState.filter((item) => item.id !== number);
    setBlockState(newState);
  };

  return (
    <div className="contentWrapper">
      <Header type="application" text={'Ваша заявка'} />
      <div className="infoTextGreen">
        <p>Пожалуйста, укажите Ваши данные и данные всех членов Вашей семьи.</p>
        <p>
          <b>Внимание!</b>
        </p>
        <p>
          Принимается только одна заявка от одной семьи. Семья – это{' '}
          <b>родственники, проживающие на одной жилплощади</b>. Если кто-то из ваших родственников
          живет отдельно и тоже нуждается в помощи, пожалуйста, попросите его{' '}
          <b>заполнить отдельную заявку</b>.
        </p>
        Пожалуйста, предоставьте как можно более полную информацию. Дополнительное уточнение
        сведений усложняет процесс предоставления помощи.
      </div>
      <h3>Ваши данные</h3>
      <YouDataForm type={'you'} index={0} onDeleteClick={onDeleteClick} />
      <h3>Ваша семья</h3>
      <div className="familyBlocks">
        {blockState.length > 0 &&
          blockState.map((item) => (
            <YouDataForm
              key={item.id}
              type={'familyMember'}
              index={item.id}
              onDeleteClick={onDeleteClick}
            />
          ))}
      </div>
      <Button onClick={handleAddBlock}>Добавить члена семьи</Button>
      <div className="buttonsAreaSpaceBetween">
        <Link className="linkArea" to="/application/step1">
          <Button
            variant="contained"
            className="submitButton"
            sx={{
              width: '100%',
              textTransform: 'none',
              backgroundColor: 'var(--colorGrey)',
              opacity: '0.6',
              ':hover': {
                backgroundColor: 'var(--comment)',
                opacity: '1',
              },
            }}
          >
            Назад
          </Button>
        </Link>
        <Link className="linkArea" to="/application/step3">
          <Button
            variant="contained"
            className="submitButton"
            sx={{
              width: '100%',
              textTransform: 'none',
              backgroundColor: 'var(--colorMain)',
              opacity: '0.6',
              ':hover': {
                backgroundColor: 'var(--colorMain)',
                opacity: '1',
              },
            }}
          >
            Продолжить
          </Button>
        </Link>
      </div>
      <p className="footerInfo">
        Обработка персональных данных осуществляется{' '}
        <a href="https://pd.rkn.gov.ru/operators-registry/operators-list/?id=77-19-013355">
          сертифицированным оператором.
        </a>
      </p>
    </div>
  );
};

export default YourDataPage;
