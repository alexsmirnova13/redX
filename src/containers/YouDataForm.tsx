import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import './containers.css';
import { IYourDataFormProps } from 'interfaces/interface';

const YouDataForm: React.FC<IYourDataFormProps> = ({ type, index, onDeleteClick }) => {
  const [sex, setSex] = useState('');
  const handleChange = (event: SelectChangeEvent<string>) => {
    setSex(event.target.value);
  };

  return (
    <div className="blockContent">
      <div className="blockContentArea">
        <div className="pairOfSelectsData">
          <TextField
            sx={{ width: '100%', marginLeft: 0 }}
            id="outlined-basic"
            label="Фамилия *"
            variant="outlined"
            //   onChange={(e) => setComment(e.target.value)}
          />

          <TextField
            sx={{ width: '100%', marginLeft: 0 }}
            id="outlined-basic"
            label="Имя *"
            variant="outlined"
            //   onChange={(e) => setComment(e.target.value)}
          />

          <TextField
            sx={{ width: '100%', marginLeft: 0 }}
            id="outlined-basic"
            label="Отчество"
            variant="outlined"
            //   onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="pair">
          <TextField
            //   sx={{ m: 0, marginLeft: 0, width: '50%' }}
            label="Дата рождения *"
            type="date"
            //   defaultValue={'2000-01-01'}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div className="selectInput">
            <FormControl fullWidth sx={{ m: 0, marginLeft: 0, width: '50%', marginRight: 1 }}>
              <InputLabel id="demo-simple-select-label">Пол *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sex}
                label="Пол *"
                onChange={handleChange}
              >
                <MenuItem value={'Мужской'}>Мужской</MenuItem>
                <MenuItem value={'Женский'}>Женский</MenuItem>
              </Select>
            </FormControl>
            {type === 'familyMember' && (
              <TextField
                sx={{ m: 0, marginLeft: 0, width: '50%' }}
                label="Кем вам приходится *"
                type="text"
              />
            )}
          </div>
        </div>
        <div className="checkboxArea">
          <div className="lableComment">
            <FormControlLabel
              sx={{
                marginTop: 1,
                '& span': {
                  paddingBottom: 0,
                  paddingTop: 0,
                },
              }}
              control={<Checkbox />}
              label="Лицо с ограниченными возможностями"
            />
            {type === 'you' && (
              <FormHelperText sx={{ marginLeft: '29px', color: 'green' }}>
                Человек с ограниченными возможностями, либо инвалид – лицо, которое имеет нарушение
                здоровья со стойким расстройством функций организма, обусловленное заболеваниями,
                последствиями травм или дефектами, приводящее к ограничению жизнедеятельности и
                вызывающее необходимость социальной защиты (Федеральный закон «О социальной защите
                инвалидов в Российской Федерации» от 24 ноября 1995 г. № 181-ФЗ, ст. 1).
              </FormHelperText>
            )}
          </div>
          <div className="lableComment">
            <FormControlLabel
              sx={{
                marginTop: 1,
                '& span': {
                  paddingBottom: 0,
                  paddingTop: 0,
                },
              }}
              control={<Checkbox />}
              label="Лицо с дефицитом самообслуживания"
            />
            {type === 'you' && (
              <FormHelperText sx={{ marginLeft: '29px', color: 'green' }}>
                Дефицит самообслуживания — это{' '}
                <u>неспособность самостоятельно выполнять повседневные функции</u>, например,
                одеваться, принимать пищу, осуществлять индивидуальные гигиенические процедуры.
              </FormHelperText>
            )}
          </div>

          <FormControlLabel
            sx={{
              marginTop: 1,
              '& span': {
                paddingBottom: 0,
                paddingTop: 0,
              },
            }}
            control={<Checkbox />}
            label="Неработающий пенсионер"
          />
          <FormControlLabel
            sx={{
              marginTop: 1,
              '& span': {
                paddingBottom: 0,
                paddingTop: 0,
              },
            }}
            control={<Checkbox />}
            label="Беременная женщина"
          />
          <div>
            <FormControlLabel
              sx={{
                marginTop: 1,
                '& span': {
                  paddingBottom: 0,
                  paddingTop: 0,
                },
              }}
              control={<Checkbox />}
              label="Лицо, нуждающееся в постоянном приёме лекарств"
            />
            {type === 'you' && (
              <FormHelperText sx={{ marginLeft: '29px', color: 'green' }}>
                Граждане, которые нуждаются в постоянном приёме лекарств и{' '}
                <u>не получают их от государства или благотворительного фонда </u> на постоянной
                основе.
              </FormHelperText>
            )}
          </div>
          <div>
            <FormControlLabel
              sx={{
                marginTop: 1,
                '& span': {
                  paddingBottom: 0,
                  paddingTop: 0,
                },
              }}
              control={<Checkbox />}
              label={
                <span>
                  Одинокий <b>родитель</b> несовершеннолетнего ребенка
                </span>
              }
            />
            {type === 'you' && (
              <FormHelperText sx={{ marginLeft: '29px', color: 'green' }}>
                Несовершеннолетними считаются <u>дети в возрасте до 18 лет</u>
              </FormHelperText>
            )}
          </div>
          <div>
            <FormControlLabel
              sx={{
                marginTop: 1,
                '& span': {
                  paddingBottom: 0,
                  paddingTop: 0,
                },
              }}
              control={<Checkbox />}
              label="Студент очного отделения"
            />
            {type === 'you' && (
              <FormHelperText sx={{ marginLeft: '29px', color: 'green' }}>
                Люди, которые уже работают, либо имеют фактическую возможность зарабатывать и
                обеспечивать семью.
              </FormHelperText>
            )}
          </div>
          <div>
            <FormControlLabel
              sx={{
                marginTop: 1,
                '& span': {
                  paddingBottom: 0,
                  paddingTop: 0,
                },
              }}
              control={<Checkbox />}
              label="Лицо, имеющее возможность зарабатывать"
            />
            {type === 'you' && (
              <FormHelperText sx={{ marginLeft: '29px', color: 'green' }}>
                Пожалуйста, указывайте только один предмет в запросе. Если вам нужно несколько
                разных предметов этой категории, нажмите на кнопку «Добавить еще один запрос» ниже.
              </FormHelperText>
            )}
          </div>

          <FormControlLabel
            sx={{
              marginTop: 1,
              '& span': {
                paddingBottom: 0,
                paddingTop: 0,
              },
            }}
            control={<Checkbox />}
            label="Оформлена пенсия/пособие от государства"
          />
        </div>
        {type === 'familyMember' && (
          <Button
            variant="outlined"
            onClick={() => {
              onDeleteClick(index);
            }}
            sx={{
              color: 'var(--colorMain)',
              width: '200px',
              textTransform: 'none',
              fontSize: '0.8571rem',
              border: '1px solid var(--colorMain)',
              opacity: 0.6,
              marginTop: 3,
              ':hover': {
                opacity: 1,
                borderColor: 'var(--colorMain)',
                backgroundColor: 'var(--hoverBackgroundColor)',
              },
            }}
          >
            Удалить этот запрос
          </Button>
        )}
      </div>
    </div>
  );
};

export default YouDataForm;
