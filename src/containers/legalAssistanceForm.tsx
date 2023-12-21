import TextField from '@mui/material/TextField';
import './containers.css';
import { Button, FormHelperText } from '@mui/material';
import { ILegalAssistanceFormProps } from 'interfaces/interface';
import { useField } from 'formik';
const LegalAssistanceForm: React.FC<ILegalAssistanceFormProps> = ({
  titleText,
  formType,
  id,
  remove,
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
        <div>
          <h3 className="h3Title">{titleText}</h3>
          <div className="pairWithError">
            <TextField
              sx={{ width: '100%', marginLeft: 0 }}
              id="outlined-basic"
              autoComplete="off"
              variant="outlined"
              label="Что именно нужно *"
              {...commentField}
              value={commentField.value || ''}
              onChange={(e) => commentHelpers.setValue(e.target.value)}
              error={Boolean(commentMeta.touched && commentMeta.error)}
              name="disable-autocomplete"
            />
            {commentMeta.touched && commentMeta.error && (
              <FormHelperText sx={{ color: 'red' }}>{commentMeta.error}</FormHelperText>
            )}
          </div>
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
      </div>
    </div>
  );
};
export default LegalAssistanceForm;
