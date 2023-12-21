// import { Select, FormControl, InputLabel, MenuItem, FormHelperText } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Counter from '../components/counter';
// import './containers.css';
// import { IFormProps } from 'interfaces/interface';
// import { useField } from 'formik';
// const MedConsumablesForm: React.FC<IFormProps> = ({ remove, id }) => {
//   const [whatField, whatMeta, whatHelpers] = useField<string>({
//     name: `medEquipment.${id}.what`,
//     validate: (value) => {
//       let error;
//       if (!value.trim()) {
//         error = 'Это поле обязательно для заполнения.';
//       }
//       return error;
//     },
//   });

//   const [personTypeField, personTypeMeta, personTypeHelpers] = useField<string>({
//     name: `medEquipment.${id}.personType`,
//     validate: (value) => {
//       let error;
//       if (!value.trim()) {
//         error = 'Это поле обязательно для заполнения.';
//       }
//       return error;
//     },
//   });
//   const [commentField, , commentHelpers] = useField<string>(`medEquipment.${id}.comment`);
//   const [countField, , countHelpers] = useField<number>(`medEquipment.${id}.count`);
//   return (
//     <div className="blockWrapper">
//       <div className="blockContent">
//         <div className="pairOfSelects">
//           <div className="pairWithError">
//             <FormControl fullWidth sx={{ m: 1, marginLeft: 0 }}>
//               <InputLabel id="demo-simple-select-label">Что именно нужно *</InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={what}
//                 label="Что именно нужно"
//                 onChange={(event) => {
//                   setWhat(event.target.value);
//                   setError1(false);
//                 }}
//               >
//                 <MenuItem value={'Шприцы'}>Шприцы</MenuItem>
//                 <MenuItem value={'Памперсы'}>Памперсы</MenuItem>
//                 <MenuItem value={'Бинты'}>Бинты</MenuItem>
//                 <MenuItem value={'Другое'}>Другое</MenuItem>
//               </Select>
//             </FormControl>
//             {error1 && (
//               <FormHelperText sx={{ color: 'red' }}>
//                 Это поле обязательно для заполнения
//               </FormHelperText>
//             )}
//           </div>
//           <div className="pairWithError">
//             <FormControl fullWidth sx={{ m: 1, marginLeft: 0 }}>
//               <InputLabel id="demo-simple-select-label">Для кого *</InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={personType}
//                 label="Для кого"
//                 onChange={(event) => {
//                   setPersonType(event.target.value);
//                   setError2(false);
//                 }}
//               >
//                 <MenuItem value={'Для ребенка'}>Для ребенка</MenuItem>
//                 <MenuItem value={'Для взрослого'}>Для взрослого</MenuItem>
//               </Select>
//             </FormControl>
//             {error2 && (
//               <FormHelperText sx={{ color: 'red' }}>
//                 Это поле обязательно для заполнения
//               </FormHelperText>
//             )}
//           </div>
//         </div>

//         <div>
//           <h3 className="h3Title">На какое количество человек *</h3>
//           <Counter onCounterClick={(num) => setCountState(num)} count={countState} />
//         </div>

//         <TextField
//           sx={{ width: '100%', m: 1, marginLeft: 0, marginTop: '20px' }}
//           id="outlined-basic"
//           label="Комментарий"
//           variant="outlined"
//           onChange={(e) => setComment(e.target.value)}
//         />
//         <Button
//           variant="outlined"
//           onClick={() => {
//             onDeleteClick(index);
//           }}
//           sx={{
//             color: 'var(--colorMain)',
//             width: '200px',
//             textTransform: 'none',
//             fontSize: '0.8571rem',
//             border: '1px solid var(--colorMain)',
//             opacity: 0.6,
//             marginTop: 3,
//             ':hover': {
//               opacity: 1,
//               borderColor: 'var(--colorMain)',
//               backgroundColor: 'var(--hoverBackgroundColor)',
//             },
//           }}
//         >
//           Удалить этот запрос
//         </Button>
//         <FormHelperText>
//           Пожалуйста, указывайте только один предмет в запросе. Если вам нужно несколько разных
//           предметов этой категории, нажмите на кнопку «Добавить еще один запрос» ниже.
//         </FormHelperText>
//       </div>
//     </div>
//   );
// };

// export default MedConsumablesForm;
