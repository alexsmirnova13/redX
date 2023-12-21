import { Select, FormControl, InputLabel, MenuItem, FormHelperText, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import './containers.css';
import { IFormProps } from 'interfaces/interface';
import { useField } from 'formik';
const PsycologistForm: React.FC<IFormProps> = ({ id, remove }) => {
  const [whatField, whatMeta, whatHelpers] = useField<string>({
    name: `psycologist.${id}.what`,
    validate: (value) => {
      let error;
      if (!value.trim()) {
        error = 'Это поле обязательно для заполнения.';
      }
      return error;
    },
  });
  const [commentField, commentMeta, commentHelpers] = useField<string>(`psycologist.${id}.comment`);
  return (
    <div className="blockWrapper">
      <div className="blockWarningContent">
        <p>
          Если Вам нужна <b>экстренная</b> психологическая помощь, <b>ЗВОНИТЕ!</b>
        </p>
        <p>
          <b>Горячая линия</b> психологической помощи РКК:
        </p>
        <a href="tel:+78002501859">8 (800) 250-18-59</a>
        <p>
          <b>Круглосуточная горячая линия</b> психологической помощи МЫВМЕСТЕ:
        </p>
        <a href="tel:+78002003411">8 (800) 200-34-11</a>
        <p>
          <b>Чат-бот</b> психологической поддержки:
        </p>

        <a href="https://ftlp.pw/lp/9B09S94O/">Viber</a>
        <a href="https://t.me/psy_myvmeste_bot">Telegram</a>
        <a href="https://vk.com/psy_myvmeste">Вконтакте</a>
        <p className="addMarginTop">
          Для <b>записи на консультацию</b> заполните поля ниже
        </p>
      </div>
      <div className="blockContent">
        <FormControl fullWidth sx={{ m: 1, marginLeft: 0, marginBottom: 3 }}>
          <InputLabel id="demo-simple-select-label">Кому нужна помощь психолога *</InputLabel>
          <Select
            label=" чем именно нужна помощь *"
            {...whatField}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={whatField.value || ''}
            onChange={(e) => whatHelpers.setValue(e.target.value)}
            error={Boolean(whatMeta.touched && whatMeta.error)}
          >
            <MenuItem value={'Для взрослого'}>Для взрослого</MenuItem>
            <MenuItem value={'Для ребенка'}>Для ребенка</MenuItem>
          </Select>
        </FormControl>
        {whatMeta.touched && whatMeta.error && (
          <FormHelperText sx={{ color: 'red' }}>{whatMeta.error}</FormHelperText>
        )}
        <div>
          <h3 className="h3Title">
            Уточните запрос, который Вас интересует. Так мы сможем наиболее точно подобрать
            специалиста *
          </h3>
          <div className="pairWithError">
            <TextField
              {...commentField}
              sx={{ width: '100%', marginLeft: 0 }}
              id="outlined-basic"
              // label=""
              value={commentField.value || ''}
              variant="outlined"
              onChange={(e) => commentHelpers.setValue(e.target.value)}
              error={Boolean(commentMeta.touched && commentMeta.error)}
            />
            <FormHelperText sx={{ color: 'green' }}>
              например, &quot;страхи, эмоции&quot;, &quot;отношения с близкими&quot; и т.п.
            </FormHelperText>
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
        </div>
      </div>
    </div>
  );
};

export default PsycologistForm;
