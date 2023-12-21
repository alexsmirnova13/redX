import { Select, FormControl, InputLabel, MenuItem, FormHelperText, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import './containers.css';
import Counter from '../components/counter';
import { IFormProps } from 'interfaces/interface';
import { useField } from 'formik';

const ClothForm: React.FC<IFormProps> = ({ remove, id }) => {
  const [typeOfClothField, typeOfClothMeta, typeOfClothHelpers] = useField<string>({
    name: `cloth.${id}.typeOfCloth`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [seasonField, seasonMeta, seasonHelpers] = useField<string>({
    name: `cloth.${id}.season`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [sexField, sexMeta, sexHelpers] = useField<string>({
    name: `cloth.${id}.sex`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [personTypeField, personTypeMeta, personTypeHelpers] = useField<string>({
    name: `cloth.${id}.personType`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [sizeField, sizeMeta, sizeHelpers] = useField<string>({
    name: `cloth.${id}.size`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [heightField, heightMeta, heightHelpers] = useField<string>({
    name: `cloth.${id}.height`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [commentField, , commentHelpers] = useField<string>(`cloth.${id}.comment`);
  const [allergyField, , allergyHelpers] = useField<string>(`cloth.${id}.allergy`);
  const [countField, , countHelpers] = useField<number>(`cloth.${id}.count`);

  return (
    <div className="blockWrapper">
      <div className="blockContent">
        <div className="pairOfSelects">
          <div className="pairWithError">
            <FormControl fullWidth sx={{ m: 1, marginLeft: 0, marginBottom: 0 }}>
              <InputLabel id="demo-simple-select-label">Тип одежды *</InputLabel>
              <Select
                {...typeOfClothField}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typeOfClothField.value || ''}
                label="Тип одежды"
                onChange={(e) => typeOfClothHelpers.setValue(e.target.value)}
                error={Boolean(typeOfClothMeta.touched && typeOfClothMeta.error)}
              >
                <MenuItem value={'Верхняя одежда'}>Верхняя одежда</MenuItem>
                <MenuItem value={'Кофты, свитера'}>Кофты, свитера</MenuItem>
                <MenuItem value={'Брюки, штаны'}>Брюки, штаны</MenuItem>
                <MenuItem value={'Футболки'}>Футболки</MenuItem>
                <MenuItem value={'Рубашки, блузки'}>Рубашки, блузки</MenuItem>
                <MenuItem value={'Другое'}>Другое</MenuItem>
              </Select>
            </FormControl>
            {typeOfClothMeta.touched && typeOfClothMeta.error && (
              <FormHelperText sx={{ color: 'red' }}>{typeOfClothMeta.error}</FormHelperText>
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
        </div>
        <div className="pairOfSelects">
          <div className="pairWithError">
            <TextField
              sx={{ width: '100%', m: 1, marginLeft: 0, marginBottom: 0 }}
              id="outlined-basic"
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
          <div className="pairWithError">
            <TextField
              {...heightField}
              sx={{ width: '100%', m: 1, marginLeft: 0, marginBottom: 0 }}
              id="outlined-basic"
              label="Рост (например 165) *"
              variant="outlined"
              type="number"
              value={heightField.value || ''}
              onChange={(e) => heightHelpers.setValue(e.target.value)}
              error={Boolean(heightMeta.touched && heightMeta.error)}
            />
            {heightMeta.touched && heightMeta.error && (
              <FormHelperText sx={{ color: 'red' }}>{heightMeta.error}</FormHelperText>
            )}
          </div>
        </div>
        <div>
          <h3 className="h3Title">На какое количество человек *</h3>
          <Counter
            name={`cloth.${id}.count`}
            onCounterClick={(num) => countHelpers.setValue(num)}
            count={countField.value || 1}
          />
        </div>
        <div>
          <TextField
            {...allergyField}
            sx={{ width: '100%', m: 0, marginLeft: 0, marginTop: '20px' }}
            id="outlined-basic"
            label='Аллергии (например "Шерсть, металл")'
            variant="outlined"
            value={allergyField.value || ''}
            onChange={(e) => allergyHelpers.setValue(e.target.value)}
          />
          <FormHelperText sx={{ color: 'green' }}>
            Укажите, есть ли аллергии на какие-нибудь материалы
          </FormHelperText>
        </div>

        <TextField
          {...commentField}
          sx={{ width: '100%', m: 1, marginLeft: 0, marginTop: '20px' }}
          id="outlined-basic"
          label="Комментарий"
          variant="outlined"
          value={commentField.value || ''}
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

export default ClothForm;
