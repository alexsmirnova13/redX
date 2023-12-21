import { Button, FormHelperText } from '@mui/material';
import TextField from '@mui/material/TextField';
import './containers.css';
import { IFormProps } from 'interfaces/interface';
import { useField } from 'formik';
const PillsForm: React.FC<IFormProps> = ({ remove, id }) => {
  const [pillsField, pillsMeta, pillsHelpers] = useField<string>({
    name: `pills.${id}.pills`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [durationField, durationMeta, durationHelpers] = useField<string>({
    name: `pills.${id}.duration`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [commentField, , commentHelpers] = useField<string>(`pills.${id}.comment`);

  return (
    <div className="blockWrapper">
      <div className="blockContent">
        <div className="pairWithError">
          <TextField
            sx={{ width: '100%', m: 1, marginLeft: 0, marginBottom: 0 }}
            id="outlined-basic"
            label="Название препарата *"
            variant="outlined"
            {...pillsField}
            value={pillsField.value || ''}
            onChange={(e) => pillsHelpers.setValue(e.target.value)}
            error={Boolean(pillsMeta.touched && pillsMeta.error)}
          />
          {pillsMeta.touched && pillsMeta.error && (
            <FormHelperText sx={{ color: 'red' }}>{pillsMeta.error}</FormHelperText>
          )}
        </div>
        <div className="pairWithError">
          <TextField
            sx={{ width: '100%', marginLeft: 0, marginTop: 1 }}
            id="outlined-basic"
            label="Дозировка, режим и продолжительность приема *"
            variant="outlined"
            {...durationField}
            value={durationField.value || ''}
            onChange={(e) => durationHelpers.setValue(e.target.value)}
            error={Boolean(durationMeta.touched && durationMeta.error)}
          />
          {durationMeta.touched && durationMeta.error && (
            <FormHelperText sx={{ color: 'red' }}>{durationMeta.error}</FormHelperText>
          )}
          <FormHelperText sx={{ color: 'green' }}>
            Укажите, есть ли у Вас рецепт от врача на необходимые препараты
          </FormHelperText>
        </div>

        <TextField
          {...commentField}
          sx={{ width: '100%', marginTop: 2, marginLeft: 0 }}
          id="outlined-basic"
          label="Комментарий"
          variant="outlined"
          onChange={(e) => commentHelpers.setValue(e.target.value)}
          name={`food.${id}.comment`}
          value={commentField.value || ''}
        />
        <FormHelperText sx={{ color: 'green' }}>
          Информация, которая поможет подобрать для Вас наиболее подходящую помощь.
        </FormHelperText>
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

export default PillsForm;
