import { Button, FormHelperText } from '@mui/material';
import TextField from '@mui/material/TextField';
import './containers.css';
import Counter from '../components/counter';
import { IFormProps } from 'interfaces/interface';
import { useField } from 'formik';

const DishesForm: React.FC<IFormProps> = ({ remove, id }) => {
  const [commentField, commentMeta, commentHelpers] = useField<string>(`food.${id}.comment`);
  const [countField, , countHelpers] = useField<number>(`food.${id}.count`);

  return (
    <div className="blockWrapper">
      <div className="blockContent">
        <div>
          <h3 className="h3Title">Количество *</h3>
          <Counter
            name={`dishes.${id}.count`}
            onCounterClick={(num) => countHelpers.setValue(num)}
            count={countField.value || 1}
          />
        </div>
        <div className="withError">
          <TextField
            {...commentField}
            sx={{ width: '100%', m: 2, marginLeft: 0 }}
            value={commentField.value || ''}
            id="outlined-basic"
            label="Комментарий"
            variant="outlined"
            name={`food.${id}.comment`}
            onChange={(e) => commentHelpers.setValue(e.target.value)}
            error={Boolean(commentMeta.touched && commentMeta.error)}
          />
          <FormHelperText sx={{ color: 'green' }}>Например, «Сковорода»</FormHelperText>
          {commentMeta.touched && commentMeta.error && (
            <FormHelperText sx={{ color: 'red' }}>{commentMeta.error}</FormHelperText>
          )}
        </div>
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
        <FormHelperText sx={{ width: '100%', marginLeft: 0 }}>
          Пожалуйста, указывайте только один предмет в запросе. Если вам нужно несколько разных
          предметов этой категории, нажмите на кнопку «Добавить еще один запрос» ниже.
        </FormHelperText>
      </div>
    </div>
  );
};

export default DishesForm;
