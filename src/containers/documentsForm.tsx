import { Select, FormControl, InputLabel, MenuItem, Button, FormHelperText } from '@mui/material';
import TextField from '@mui/material/TextField';
import './containers.css';
import { IFormProps } from 'interfaces/interface';
import { useField } from 'formik';

const DocumentsForm: React.FC<IFormProps> = ({ remove, id }) => {
  const [whatField, whatMeta, whatHelpers] = useField<string>({
    name: `documents.${id}.what`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [commentField, commentMeta, commentHelpers] = useField<string>(`documents.${id}.comment`);
  // const [what, setWhat] = useState('');

  // const data = useContext(HelpContext);
  // const [comment, setComment] = useState('');
  // const [error1, setError1] = useState(true);
  // const [error2, setError2] = useState(true);
  // useEffect(() => {
  //   data.changeData('documents', {
  //     id: index,
  //     what: what,
  //     comment: comment,
  //     error: error1 && error2,
  //   });
  // }, [what, comment, error1, error2]);
  return (
    <div className="blockWrapper">
      <div className="blockContent">
        <div className="pairWithError">
          <FormControl fullWidth sx={{ m: 1, marginLeft: 0, marginBottom: 3 }}>
            <InputLabel id="demo-simple-select-label">С чем именно нужна помощь *</InputLabel>
            <Select
              label=" чем именно нужна помощь *"
              {...whatField}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={whatField.value || ''}
              onChange={(e) => whatHelpers.setValue(e.target.value)}
              error={Boolean(whatMeta.touched && whatMeta.error)}
            >
              <MenuItem value={'Помощь с трудоустройством'}>Помощь с трудоустройством</MenuItem>
              <MenuItem value={'Оформление полиса ОМС'}>Оформление полиса ОМС</MenuItem>
              <MenuItem value={'Проблемы с обучением'}>Проблемы с обучением</MenuItem>
              <MenuItem value={'Другое'}>Другое</MenuItem>
            </Select>
          </FormControl>
          {whatMeta.touched && whatMeta.error && (
            <FormHelperText sx={{ color: 'red' }}>{whatMeta.error}</FormHelperText>
          )}
        </div>
        <div>
          <h3 className="h3Title">
            Пожалуйста, опишите ситуацию, чтобы запрос был передан профильному специалисту *
          </h3>
          <div className="pairWithError">
            <TextField
              {...commentField}
              sx={{ width: '100%', m: 2, marginLeft: 0 }}
              value={commentField.value || ''}
              id="outlined-basic"
              variant="outlined"
              name={`documents.${id}.comment`}
              onChange={(e) => commentHelpers.setValue(e.target.value)}
              error={Boolean(commentMeta.touched && commentMeta.error)}
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

export default DocumentsForm;
