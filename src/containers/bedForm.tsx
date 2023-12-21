import { Select, FormControl, InputLabel, MenuItem, FormHelperText } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Counter from '../components/counter';
import './containers.css';
import { IFormProps } from 'interfaces/interface';
import { useField } from 'formik';

const BedForm: React.FC<IFormProps> = ({ remove, id }) => {
  const [nameField, nameMeta, nameHelpers] = useField<string>({
    name: `bed.${id}.name`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [personTypeField, personTypeMeta, personTypeHelpers] = useField<string>({
    name: `bed.${id}.personType`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [commentField, , commentHelpers] = useField<string>(`bed.${id}.comment`);

  const [countField, , countHelpers] = useField<number>(`bed.${id}.count`);
  // const [what, setWhat] = useState('');
  // const [personType, setPersonType] = useState('');
  // const [comment, setComment] = useState('');
  // const data = useContext(HelpContext);
  // const [countState, setCountState] = useState(1);
  // const [error1, setError1] = useState(true);
  // const [error2, setError2] = useState(true);
  // useEffect(() => {
  //   data.changeData('bed', {
  //     id: index,
  //     name: what,
  //     personType: personType,
  //     count: countState,
  //     comment: comment,
  //   });
  // }, [what, comment, error1, error2, personType, countState]);
  return (
    <div className="blockWrapper">
      <div className="blockContent">
        <div className="pairOfSelects">
          <div className="pairWithError">
            <FormControl fullWidth sx={{ m: 1, marginLeft: 0, marginBottom: 0 }}>
              <InputLabel id="demo-simple-select-label">Что именно нужно *</InputLabel>
              <Select
                {...nameField}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={nameField.value || ''}
                label="Что именно нужно"
                onChange={(e) => nameHelpers.setValue(e.target.value)}
                error={Boolean(nameMeta.touched && nameMeta.error)}
              >
                <MenuItem value={'Постельное бельё'}>Постельное бельё</MenuItem>
                <MenuItem value={'Одеяла'}>Одеяла</MenuItem>
                <MenuItem value={'Подушки'}>Подушки</MenuItem>
                <MenuItem value={'Другое'}>Другое</MenuItem>
              </Select>
            </FormControl>
            {nameMeta.touched && nameMeta.error && (
              <FormHelperText sx={{ color: 'red' }}>{nameMeta.error}</FormHelperText>
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
        <div>
          <h3 className="h3Title">На какое количество человек *</h3>
          <Counter
            name={`bed.${id}.count`}
            onCounterClick={(num) => countHelpers.setValue(num)}
            count={countField.value || 1}
          />
        </div>
        <div>
          <TextField
            {...commentField}
            sx={{ width: '100%', m: 2, marginLeft: 0 }}
            value={commentField.value || ''}
            id="outlined-basic"
            label="Комментарий"
            variant="outlined"
            name={`bed.${id}.comment`}
            onChange={(e) => commentHelpers.setValue(e.target.value)}
          />
          <FormHelperText sx={{ color: 'green' }}>
            Например, «Двуспальное постельное белье»
          </FormHelperText>
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

export default BedForm;
