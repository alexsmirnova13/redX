import { Select, FormControl, InputLabel, MenuItem, FormHelperText } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Counter from '../components/counter';
import './containers.css';
import { IFormPropsMed } from 'interfaces/interface';
import { useField } from 'formik';

const MedEquipmentForm: React.FC<IFormPropsMed> = ({ remove, id, type }) => {
  const [whatField, whatMeta, whatHelpers] = useField<string>({
    name: `${type}.${id}.what`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });

  const [personTypeField, personTypeMeta, personTypeHelpers] = useField<string>({
    name: `${type}.${id}.personType`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [commentField, , commentHelpers] = useField<string>(`${type}.${id}.comment`);
  const [countField, , countHelpers] = useField<number>(`${type}.${id}.count`);
  return (
    <div className="blockWrapper">
      <div className="blockContent">
        <div className="pairOfSelects">
          <div className="pairWithError">
            <FormControl fullWidth sx={{ m: 1, marginLeft: 0, marginBottom: 0 }}>
              <InputLabel id="demo-simple-select-label">Что именно нужно *</InputLabel>
              <Select
                {...whatField}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={whatField.value || ''}
                label="Что именно нужно"
                onChange={(e) => whatHelpers.setValue(e.target.value)}
                error={Boolean(whatMeta.touched && whatMeta.error)}
              >
                <MenuItem value={'Инвалидные кресла'}>Инвалидные кресла</MenuItem>
                <MenuItem value={'Костыли'}>Костыли</MenuItem>
                <MenuItem value={'Очки'}>Очки</MenuItem>
                <MenuItem value={'Другое'}>Другое</MenuItem>
              </Select>
            </FormControl>
            {whatMeta.touched && whatMeta.error && (
              <FormHelperText sx={{ color: 'red' }}>{whatMeta.error}</FormHelperText>
            )}
          </div>
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
        </div>

        <div style={{ marginTop: '10px' }}>
          <h3 className="h3Title">На какое количество человек *</h3>
          <Counter
            name={`${type}.${id}.count`}
            onCounterClick={(num) => countHelpers.setValue(num)}
            count={countField.value || 1}
          />
        </div>

        <TextField
          {...commentField}
          sx={{ width: '100%', m: 2, marginLeft: 0 }}
          value={commentField.value || ''}
          id="outlined-basic"
          label="Комментарий"
          variant="outlined"
          name={`${type}.${id}.comment`}
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

export default MedEquipmentForm;
