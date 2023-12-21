import { useState } from 'react';
import './yourDataPage.css';
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../containers/header/header';

const LastDataPage = () => {
  const [emergency, setEmergency] = useState('');
  const [threat, setThreat] = useState('');
  const [place, setPlace] = useState('');
  return (
    <div className="contentWrapper">
      <Header type="application" text={'Ваша заявка'} />
      <div className="infoTextGreen">
        <p>
          <b>Почти готово!</b>
        </p>
        <p>
          Осталось совсем чуть-чуть. Ответьте, пожалуйста, на эти вопросы, отправьте заявку, и мы
          свяжемся с Вами в ближайшее время.
        </p>
      </div>
      <div className="blockContent">
        <TextField
          sx={{ width: '100%', marginLeft: 0, marginTop: '10px', marginBottom: '10px' }}
          id="outlined-basic"
          label="Укажите площадь, на которой Вы проживаете, в квадратных метрах. "
          variant="outlined"
          autoComplete="off"
          name="disable-autocomplete"
          //   onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <FormControl fullWidth sx={{ m: 0, marginLeft: 0, marginTop: '10px' }}>
            <InputLabel id="demo-simple-select-label">
              Требует ли Ваша ситуация экстренного вмешательства специальных социальных служб РКК?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={emergency}
              label="Требует ли Ваша ситуация экстренного вмешательства специальных социальных служб РКК?"
              onChange={(event) => {
                setEmergency(event.target.value);
              }}
            >
              <MenuItem value={'Да'}>Да</MenuItem>
              <MenuItem value={'Нет'}>Нет</MenuItem>
            </Select>
          </FormControl>
          <FormHelperText sx={{ color: 'green' }}>
            Нечего есть/нет ни одного комплекта тёплой одежды/не на чем спать/нечем постирать вещи
          </FormHelperText>
        </div>

        <FormControl fullWidth sx={{ m: 1, marginLeft: 0, marginTop: 1 }}>
          <InputLabel id="demo-simple-select-label">
            Существует ли в данный момент угроза жизни и здоровью для Вас или Ваших близких?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={threat}
            label="Существует ли в данный момент угроза жизни и здоровью для Вас или Ваших близких?"
            onChange={(event) => {
              setThreat(event.target.value);
            }}
          >
            <MenuItem value={'Да'}>Да</MenuItem>
            <MenuItem value={'Нет'}>Нет</MenuItem>
          </Select>
        </FormControl>
        {/* тут инпут с телефоном */}
        <FormControl fullWidth sx={{ m: 1, marginLeft: 0 }}>
          <InputLabel id="demo-simple-select-label">Откуда вы прибыли?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={place}
            label="Откуда вы прибыли?"
            onChange={(event) => {
              setPlace(event.target.value);
            }}
          >
            <MenuItem value={'Украина'}>Украина</MenuItem>
            <MenuItem value={'ЛНР'}>ЛНР</MenuItem>
            <MenuItem value={'ДНР'}>ДНР</MenuItem>
            <MenuItem value={'Белгород'}>Белгород</MenuItem>
            <MenuItem value={'РФ'}>РФ</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="buttonsAreaSpaceBetween">
        <Link className="linkArea" to="/application/step2">
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
          Отправить заявку
        </Button>
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

export default LastDataPage;
