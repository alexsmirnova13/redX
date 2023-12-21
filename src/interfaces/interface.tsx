export interface ICategories {
  [key: string]: string;
}

export interface IFormProps {
  remove: (index: number) => void;
  id: number;
  // push: (value: IPushFood) => void;
}

export interface IFormPropsMed {
  remove: (index: number) => void;
  id: number;
  type: string;
}

export interface IYourDataFormProps {
  type: string;
  index: number;
  onDeleteClick: (index: number) => void;
}
export interface IHeaderProps {
  type: string;
  text: string;
}
export interface ILegalAssistanceFormProps {
  titleText: string;
  id: number;
  remove: (index: number) => void;
  formType: string;
}

export interface IHygieneHouseChemicalsFormProps {
  example: string;
  remove: (index: number) => void;
  id: number;
  formType: string;
}

export interface ILegalAssistanceFormProps {
  titleText: string;
  remove: (index: number) => void;
  id: number;
  formType: string;
}

export interface IOptions {
  [key: string]: string; // dfsdfsdfs
}
// type componentType = keyof IFormsToForms;
// export interface IFormContainerProps {
//   title: string;
//   component: componentType;
//   example: string;
//   titleText: string;
//   formType: string;
//   remove: (index: number) => void;
//   push: (value: IPushFood) => void;
// }

export interface IPushFood {
  name: string;
  count: number;
  allergy: string;
  comment: string;
}
export interface IPushShoes {
  typeOfShoes: string;
  season: string;
  personType: string;
  sex: string;
  size: string;
  count: number;
  comment: string;
}
export interface IPushMedEquipment {
  what: string;
  personType: string;
  count: number;
  comment: string;
}
export type itemType = keyof IFormsToFormsFormik;
// export interface IFormsToForms {
//   food: React.FC<IFormProps>;
//   cloth: React.FC<IFormProps>;
//   shoes: React.FC<IFormProps>;
//   medEquipment: React.FC<IFormProps>;
//   medConsumables: React.FC<IFormProps>;
//   pills: React.FC<IFormProps>;
//   hygiene: React.FC<IHygieneHouseChemicalsFormProps>;
//   houseChemicals: React.FC<IHygieneHouseChemicalsFormProps>;
//   dishes: React.FC<IFormProps>;
//   bed: React.FC<IFormProps>;
//   school: React.FC<IFormProps>;
//   anotherItems: React.FC<IHygieneHouseChemicalsFormProps>;
//   documents: React.FC<IFormProps>;
//   psycologist: React.FC<IFormProps>;
//   legalAssistance: React.FC<ILegalAssistanceFormProps>;
//   other: React.FC<ILegalAssistanceFormProps>;
// }
export interface IPushPills {
  pills: string;
  duration: string;
  comment: string;
}
export interface IPushHygiene {
  comment: string;
}
export interface IPushDishes {
  count: number;
  comment: string;
}
export interface IPushBed {
  name: string;
  personType: string;
  count: number;
  comment: string;
}
export interface IPushSchool {
  what: string;
  level: string;
  count: number;
  comment: string;
}
export interface IPushDocuments {
  what: string;
  comment: string;
}

export interface IFormsToFormsFormik {
  food: IPushFood[] | [];
  cloth: IPushCloth[];
  shoes: IPushShoes[];
  medEquipment: IPushMedEquipment[];
  medConsumables: IPushMedEquipment[];
  pills: IPushPills[];
  hygiene: IPushHygiene[];
  houseChemicals: IPushHygiene[];
  dishes: IPushDishes[];
  bed: IPushBed[];
  school: IPushSchool[];
  anotherItems: IPushHygiene[];
  documents: IPushDocuments[];
  psycologist: IPushDocuments[];
  legalAssistance: IPushHygiene[];
  other: IPushHygiene[];
}
export interface IPushCloth {
  typeOfCloth: string;
  season: string;
  personType: string;
  sex: string;
  size: string;
  height: string;
  count: number;
  allergy: string;
  comment: string;
}
export interface IComponentProps {
  key?: number;
  index: number;
  onDeleteClick: (index: number) => void;
  example?: string;
  titleText?: string;
  formType?: string;
}
