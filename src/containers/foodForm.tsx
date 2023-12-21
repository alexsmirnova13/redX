import { Select, FormControl, InputLabel, MenuItem, FormHelperText, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import './containers.css';
import Counter from '../components/counter';
import { IFormProps } from 'interfaces/interface';
import { useField } from 'formik';
const FoodForm: React.FC<IFormProps> = ({ remove, id }) => {
  const [nameField, nameMeta, nameHelpers] = useField<string>({
    name: `food.${id}.name`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [allergyField, , allergyHelpers] = useField<string>(`food.${id}.allergy`);
  const [commentField, , commentHelpers] = useField<string>(`food.${id}.comment`);

  const [countField, , countHelpers] = useField<number>(`food.${id}.count`);
  return (
    <div className="blockWrapper">
      <div className="blockContent">
        <div className="withError">
          <FormControl
            fullWidth
            sx={{
              m: 1,
              marginLeft: 0,
              marginBottom: 0,
            }}
          >
            <InputLabel id="demo-simple-select-label">Что именно нужно: *</InputLabel>
            <Select
              {...nameField}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={nameField.value || ''}
              label="Что именно нужно"
              onChange={(e) => nameHelpers.setValue(e.target.value)}
              error={Boolean(nameMeta.touched && nameMeta.error)}
            >
              <MenuItem value={'Стандартный продуктовый набор'}>
                Стандартный продуктовый набор
              </MenuItem>
              <MenuItem value={'Детское питание'}>Детское питание</MenuItem>
              <MenuItem value={'Другое'}>Другое</MenuItem>
            </Select>
          </FormControl>
          {nameMeta.touched && nameMeta.error && (
            <FormHelperText sx={{ color: 'red' }}>{nameMeta.error}</FormHelperText>
          )}
        </div>

        <div>
          <h3 className="h3Title">На какое количество человек *</h3>
          <Counter
            name={`food.${id}.count`}
            onCounterClick={(num) => countHelpers.setValue(num)}
            count={countField.value || 1}
          />
        </div>
        <FormHelperText sx={{ color: 'green' }}>Стандартный продуктовый набор</FormHelperText>
        <div>
          <TextField
            {...allergyField}
            value={allergyField.value || ''}
            sx={{ width: '100%', m: 1, marginLeft: 0, marginTop: '10px' }}
            id="outlined-basic"
            label="Аллергии"
            variant="outlined"
            onChange={(e) => allergyHelpers.setValue(e.target.value)}
          />

          <FormHelperText sx={{ color: 'green' }}>
            Пожалуйста, укажите все пищевые аллергии, которые есть у членов вашей семьи
          </FormHelperText>
        </div>

        <TextField
          {...commentField}
          sx={{ width: '100%', m: 2, marginLeft: 0 }}
          value={commentField.value || ''}
          id="outlined-basic"
          label="Комментарий"
          variant="outlined"
          name={`food.${id}.comment`}
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

export default FoodForm;
