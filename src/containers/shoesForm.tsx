import { Select, FormControl, InputLabel, MenuItem, FormHelperText } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Counter from '../components/counter';
import './containers.css';
import { IFormProps } from 'interfaces/interface';
import { useField } from 'formik';

const ShoesForm: React.FC<IFormProps> = ({ remove, id }) => {
  const [typeOfShoesField, typeOfShoesMeta, typeOfShoesHelpers] = useField<string>({
    name: `shoes.${id}.typeOfShoes`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [seasonField, seasonMeta, seasonHelpers] = useField<string>({
    name: `shoes.${id}.season`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [sexField, sexMeta, sexHelpers] = useField<string>({
    name: `shoes.${id}.sex`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [personTypeField, personTypeMeta, personTypeHelpers] = useField<string>({
    name: `shoes.${id}.personType`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [sizeField, sizeMeta, sizeHelpers] = useField<string>({
    name: `shoes.${id}.size`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });

  const [commentField, , commentHelpers] = useField<string>(`shoes.${id}.comment`);
  const [countField, , countHelpers] = useField<number>(`shoes.${id}.count`);
  return (
    <div className="blockWrapper">
      <div className="blockContent">
        <div className="pairOfSelects">
          <div className="pairWithError">
            <FormControl fullWidth sx={{ m: 1, marginLeft: 0 }}>
              <InputLabel id="demo-simple-select-label">Тип обуви *</InputLabel>
              <Select
                {...typeOfShoesField}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typeOfShoesField.value || ''}
                label="Тип обуви"
                onChange={(e) => typeOfShoesHelpers.setValue(e.target.value)}
                error={Boolean(typeOfShoesMeta.touched && typeOfShoesMeta.error)}
              >
                <MenuItem value={'Ботинки'}>Ботинки</MenuItem>
                <MenuItem value={'Сапоги'}>Сапоги</MenuItem>
                <MenuItem value={'Кроссовки'}>Кроссовки</MenuItem>
                <MenuItem value={'Туфли'}>Туфли</MenuItem>
                <MenuItem value={'Тапочки'}>Тапочки</MenuItem>
                <MenuItem value={'Другое'}>Другое</MenuItem>
              </Select>
            </FormControl>
            {typeOfShoesMeta.touched && typeOfShoesMeta.error && (
              <FormHelperText sx={{ color: 'red' }}>{typeOfShoesMeta.error}</FormHelperText>
            )}
          </div>
          <div className="pairWithError">
            <FormControl fullWidth sx={{ m: 1, marginLeft: 0, marginBottom: 0 }}>
              <InputLabel id="demo-simple-select-label">Сезон *</InputLabel>
              <Select
                {...seasonField}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={seasonField.value || ''}
                label="Сезон"
                onChange={(e) => seasonHelpers.setValue(e.target.value)}
                error={Boolean(seasonMeta.touched && seasonMeta.error)}
              >
                <MenuItem value={'Зима'}>Зима</MenuItem>
                <MenuItem value={'Весна, осень'}>Весна, осень</MenuItem>
                <MenuItem value={'Лето'}>Лето</MenuItem>
              </Select>
            </FormControl>
            {seasonMeta.touched && seasonMeta.error && (
              <FormHelperText sx={{ color: 'red' }}>{seasonMeta.error}</FormHelperText>
            )}
          </div>
        </div>
        <div className="pairOfSelects">
          <div className="pairWithError">
            <FormControl fullWidth sx={{ m: 1, marginLeft: 0, marginBottom: 0 }}>
              <InputLabel id="demo-simple-select-label">Для кого *</InputLabel>
              <Select
                {...personTypeField}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={personTypeField.value || ''}
                label="Для кого"
                onChange={(e) => personTypeHelpers.setValue(e.target.value)}
                error={Boolean(personTypeMeta.touched && personTypeMeta.error)}
              >
                <MenuItem value={'Для ребенка'}>Для ребенка</MenuItem>
                <MenuItem value={'Для взрослого'}>Для взрослого</MenuItem>
              </Select>
            </FormControl>
            {personTypeMeta.touched && personTypeMeta.error && (
              <FormHelperText sx={{ color: 'red' }}>{personTypeMeta.error}</FormHelperText>
            )}
          </div>
          <div className="pairWithError">
            <FormControl fullWidth sx={{ m: 1, marginLeft: 0, marginBottom: 0 }}>
              <InputLabel id="demo-simple-select-label">Пол *</InputLabel>
              <Select
                {...sexField}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sexField.value || ''}
                label="Пол"
                onChange={(e) => sexHelpers.setValue(e.target.value)}
                error={Boolean(sexMeta.touched && sexMeta.error)}
              >
                <MenuItem value={'Мужской'}>Мужской</MenuItem>
                <MenuItem value={'Женский'}>Женский</MenuItem>
              </Select>
            </FormControl>
            {sexMeta.touched && sexMeta.error && (
              <FormHelperText sx={{ color: 'red' }}>{sexMeta.error}</FormHelperText>
            )}
          </div>
          <div className="pairWithError">
            <TextField
              sx={{ width: '100%', m: 1, marginLeft: 0, marginBottom: 0 }}
              // id="outlined-basic"
              label="Размер (например 44) *"
              variant="outlined"
              type="number"
              {...sizeField}
              value={sizeField.value || ''}
              onChange={(e) => sizeHelpers.setValue(e.target.value)}
              error={Boolean(sizeMeta.touched && sizeMeta.error)}
            />
            {sizeMeta.touched && sizeMeta.error && (
              <FormHelperText sx={{ color: 'red' }}>{sizeMeta.error}</FormHelperText>
            )}
          </div>
        </div>
        <div>
          <h3 className="h3Title">На какое количество человек *</h3>
          <Counter
            name={`shoes.${id}.count`}
            onCounterClick={(num) => countHelpers.setValue(num)}
            count={countField.value || 1}
          />
        </div>

        <TextField
          {...commentField}
          sx={{ width: '100%', m: 1, marginLeft: 0, marginTop: '20px' }}
          // id="outlined-basic"
          label="Комментарий"
          variant="outlined"
          value={commentField.value || ''}
          name={`shoes.${id}.comment`}
          onChange={(e) => commentHelpers.setValue(e.target.value)}
        />
        <Button
          variant="outlined"
          onClick={() => {
            remove(id);
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
        <FormHelperText>
          Пожалуйста, указывайте только один предмет в запросе. Если вам нужно несколько разных
          предметов этой категории, нажмите на кнопку «Добавить еще один запрос» ниже.
        </FormHelperText>
      </div>
    </div>
  );
};

export default ShoesForm;
