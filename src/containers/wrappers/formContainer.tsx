// import { useState } from 'react';
// import MedEquipmentForm from '../medEquipmentForm';
// import ShoesForm from '../shoesForm';
// import ClothForm from '../clothForm';
// import FoodForm from '../foodForm';
// import MedConsumablesForm from '../medConsumablesForm';
// import PillsForm from '../pillsForm';
// import HygieneHouseChemicalsForm from '../hygieneForm';
// import DishesForm from '../dishesForm';
// import BedForm from '../bedForm';
// import SchoolForm from '../schoolForm';
// import DocumentsForm from '../documentsForm';
// import PsycologistForm from '../psycologistForm';
// import LegalAssistanceForm from '../legalAssistanceForm';
// import './../containers.css';
// import { Button } from '@mui/material';
// import { IComponentProps, IFormsToForms } from 'interfaces/interface';

// const formsToForms: IFormsToForms = {
//   food: FoodForm,
//   cloth: ClothForm,
//   shoes: ShoesForm,
//   medEquipment: MedEquipmentForm, // сделать одинаковой с medConsumables
//   medConsumables: MedConsumablesForm,
//   pills: PillsForm,
//   hygiene: HygieneHouseChemicalsForm,
//   houseChemicals: HygieneHouseChemicalsForm,
//   dishes: DishesForm,
//   bed: BedForm,
//   school: SchoolForm,
//   anotherItems: HygieneHouseChemicalsForm,
//   documents: DocumentsForm,
//   psycologist: PsycologistForm,
//   legalAssistance: LegalAssistanceForm,
//   other: LegalAssistanceForm,
// };
// const FormContainer: React.FC<IFormContainerProps> = ({
//   title,
//   component,
//   example,
//   titleText,
//   formType,
// }) => {
//   const Component = formsToForms[component] || null;
//   const [blockState, setBlockState] = useState([{ id: 0, component: component }]);
//   const [idHandler, setIdHandler] = useState(1);
//   // console.log(idHandler, 'idHandler');
//   const handleAddBlock = () => {
//     setBlockState([...blockState, { id: idHandler + 1, component: component }]);
//     setIdHandler(idHandler + 1);
//   };
//   const handleDeleteBlock = (number: number) => {
//     const newState = blockState.filter((item) => item.id !== number);
//     setBlockState(newState);
//   };
//   return (
//     <div className="allBlocks">
//       <h2 className="titleName">{title}</h2>
//       {Component &&
//         blockState.map((item) => {
//           const DynamicComponent = Component as React.FC<IComponentProps>; // Приведение типа
//           return (
//             <DynamicComponent
//               key={item.id}
//               onDeleteClick={() => handleDeleteBlock(item.id)}
//               index={idHandler}
//               example={example}
//               titleText={titleText}
//               formType={formType}
//             />
//           );
//         })}
//       <Button onClick={handleAddBlock}>Добавить еще один запрос категории «{title}»</Button>
//     </div>
//   );
// };

// export default FormContainer;
