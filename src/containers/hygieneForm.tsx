import { Button, FormHelperText } from '@mui/material';
import TextField from '@mui/material/TextField';
import './containers.css';
import { IHygieneHouseChemicalsFormProps } from 'interfaces/interface';
import { useField } from 'formik';
const HygieneHouseChemicalsForm: React.FC<IHygieneHouseChemicalsFormProps> = ({
  example,
  formType,
  remove,
  id,
}) => {
  const [commentField, commentMeta, commentHelpers] = useField<string>({
    name: `${formType}.${id}.comment`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  return (
    <div className="blockWrapper">
      <div className="blockContent">
        <div className="pairWithError">
          <TextField
            sx={{ width: '100%', m: 0, marginLeft: 0 }}
            id="outlined-basic"
            label="Что именно нужно *"
            variant="outlined"
            {...commentField}
            value={commentField.value || ''}
            onChange={(e) => commentHelpers.setValue(e.target.value)}
            error={Boolean(commentMeta.touched && commentMeta.error)}
            autoComplete="off"
            name="disable-autocomplete"
          />
          <FormHelperText sx={{ color: 'green' }}>{example}</FormHelperText>
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
        <FormHelperText>
          Пожалуйста, указывайте только один предмет в запросе. Если вам нужно несколько разных
          предметов этой категории, нажмите на кнопку «Добавить еще один запрос» ниже.
        </FormHelperText>
      </div>
    </div>
  );
};

export default HygieneHouseChemicalsForm;
