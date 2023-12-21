import { Select, FormControl, InputLabel, MenuItem, FormHelperText } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Counter from '../components/counter';
import './containers.css';
import { IFormProps } from 'interfaces/interface';
import { useField } from 'formik';

const SchoolForm: React.FC<IFormProps> = ({ remove, id }) => {
  const [whatField, whatMeta, whatHelpers] = useField<string>({
    name: `school.${id}.what`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [levelField, levelMeta, levelHelpers] = useField<string>({
    name: `school.${id}.level`,
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
  // const [level, setLevel] = useState('');
  // const [error1, setError1] = useState(true);
  // const [error2, setError2] = useState(true);
  // const data = useContext(HelpContext);
  // const [comment, setComment] = useState('');
  // const [countState, setCountState] = useState(1);
  // useEffect(() => {
  //   data.changeData('school', {
  //     id: index,
  //     what: what,
  //     level: level,
  //     count: countState,
  //     comment: comment,
  //     error: error1 && error2,
  //   });
  // }, [what, countState, comment, error1, error2, level]);
  return (
    <div className="blockWrapper">
      <div className="blockContent">
        <div className="pairOfSelects">
          <div className="pairWithError">
            <FormControl fullWidth sx={{ m: 1, marginLeft: 0 }}>
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
                <MenuItem value={'Школьные рюкзаки, сумки'}>Школьные рюкзаки, сумки</MenuItem>
                <MenuItem value={'Канцелярский школьный набор'}>
                  Канцелярский школьный набор
                </MenuItem>
                <MenuItem value={'Другое'}>Другое</MenuItem>
              </Select>
            </FormControl>
            {whatMeta.touched && whatMeta.error && (
              <FormHelperText sx={{ color: 'red' }}>{whatMeta.error}</FormHelperText>
            )}
          </div>
          <div className="pairWithError">
            <FormControl fullWidth sx={{ m: 1, marginLeft: 0 }}>
              <InputLabel id="demo-simple-select-label">Класс *</InputLabel>
              <Select
                {...levelField}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={levelField.value || ''}
                label="Класс"
                onChange={(e) => levelHelpers.setValue(e.target.value)}
                error={Boolean(levelMeta.touched && levelMeta.error)}
              >
                <MenuItem value={'1'}>1</MenuItem>
                <MenuItem value={'2'}>2</MenuItem>
                <MenuItem value={'3'}>3</MenuItem>
                <MenuItem value={'4'}>4</MenuItem>
                <MenuItem value={'5'}>5</MenuItem>
                <MenuItem value={'6'}>6</MenuItem>
                <MenuItem value={'7'}>7</MenuItem>
                <MenuItem value={'8'}>8</MenuItem>
                <MenuItem value={'9'}>9</MenuItem>
                <MenuItem value={'10'}>10</MenuItem>
              </Select>
            </FormControl>
            {levelMeta.touched && levelMeta.error && (
              <FormHelperText sx={{ color: 'red' }}>{levelMeta.error}</FormHelperText>
            )}
          </div>
        </div>
        <div>
          <h3 className="h3Title">На какое количество человек *</h3>
          <Counter
            name={`school.${id}.count`}
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
            name={`school.${id}.comment`}
            onChange={(e) => commentHelpers.setValue(e.target.value)}
          />
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

export default SchoolForm;
