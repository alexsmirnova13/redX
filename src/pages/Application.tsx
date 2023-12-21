import { useState } from 'react';
import './application.css';
import HelpOptionButton from '../components/helpOptionButton';
import Button from '@mui/material/Button';
import Header from '../containers/header/header';
import {
  ICategories,
  IFormsToFormsFormik,
  IPushBed,
  IPushCloth,
  IPushDishes,
  IPushDocuments,
  IPushFood,
  IPushHygiene,
  IPushMedEquipment,
  IPushPills,
  IPushSchool,
  IPushShoes,
  itemType,
} from 'interfaces/interface';
import { Formik, Form, FieldArray } from 'formik';
import FoodForm from './../containers/foodForm';
import ClothForm from './../containers/clothForm';
import ShoesForm from './../containers/shoesForm';
import MedEquipmentForm from './../containers/medEquipmentForm';
import PillsForm from './../containers/pillsForm';
import HygieneHouseChemicalsForm from './../containers/hygieneForm';
import DishesForm from './../containers/dishesForm';
import BedForm from './../containers/bedForm';
import SchoolForm from './../containers/schoolForm';
import DocumentsForm from './../containers/documentsForm';
import PsycologistForm from './../containers/psycologistForm';
import LegalAssistanceForm from './../containers/legalAssistanceForm';
import { useNavigate } from 'react-router-dom';

const Application = () => {
  const options: ICategories = {
    food: 'Продукты',
    cloth: 'Одежда',
    shoes: 'Обувь',
    medEquipment: 'Медицинское оборудование',
    medConsumables: 'Медицинские расходники',
    pills: 'Лекарства',
    hygiene: 'Гигиена',
    houseChemicals: 'Бытовая химия',
    dishes: 'Посуда',
    bed: 'Постельные принадлежности',
    school: 'Школа',
    anotherItems: 'Иные предметы быта',
    documents: 'Помощь с документами',
    psycologist: 'Помощь психолога',
    legalAssistance: 'Юридическая помощь',
    other: 'Другое',
  };
  const [activeForms, setActiveForms] = useState<string[]>([]);
  const handleData = (data: string) => {
    setActiveForms((prevActiveForms) => {
      if (!prevActiveForms.includes(data)) {
        return [...prevActiveForms, data];
      } else {
        return prevActiveForms.filter((item) => item !== data);
      }
    });
  };
  const navigate = useNavigate();

  // const handleContinueClick = () => {
  //   // if (data.isFirstPageValid) {
  //   //   navigate('/application/step2');
  //   // } else {
  //   //   console.log('Форма не валидна');
  //   // }
  // };
  // const removeEmptyObjects = (data: IFormsToFormsFormik) => {
  //   for (const category in data) {
  //     data[category] = data[category].filter((item) => {
  //       for (const prop in item) {
  //         if (item[prop] !== '' && item[prop] !== 1) {
  //           return true;
  //         }
  //       }
  //       return false;
  //     });
  //   }

  //   return data;
  // };
  const initialValues: IFormsToFormsFormik = {
    food: [{ name: '', count: 1, allergy: '', comment: '' }],
    cloth: [
      {
        typeOfCloth: '',
        season: '',
        personType: '',
        sex: '',
        size: '',
        height: '',
        count: 1,
        allergy: '',
        comment: '',
      },
    ],
    shoes: [
      {
        typeOfShoes: '',
        season: '',
        personType: '',
        sex: '',
        size: '',
        count: 1,
        comment: '',
      },
    ],
    medEquipment: [{ what: '', personType: '', count: 1, comment: '' }],
    medConsumables: [{ what: '', personType: '', count: 1, comment: '' }],
    pills: [{ pills: '', duration: '', comment: '' }],
    hygiene: [{ comment: '' }],
    houseChemicals: [{ comment: '' }],
    dishes: [{ count: 1, comment: '' }],
    bed: [{ name: '', personType: '', count: 1, comment: '' }],
    school: [{ what: '', level: '', count: 1, comment: '' }],
    anotherItems: [{ comment: '' }],
    documents: [{ what: '', comment: '' }],
    psycologist: [{ what: '', comment: '' }],
    legalAssistance: [{ comment: '' }],
    other: [{ comment: '' }],
  };
  // const handleCoutinue = (data: IFormsToFormsFormik) => {
  //   console.log(data, 'data');
  //   let nextPageData = { ...data }; // Создаем копию объекта
  //   for (const [key, value] of Object.entries(nextPageData)) {
  //     const check = value.some((item) =>
  //       Object.values(item).every((itemValue) => itemValue === '' || itemValue === 1)
  //     );
  //     const tmp = nextPageData[key];
  //     if (check) {
  //       nextPageData[key] = [];
  //     }
  //   }
  //   const newData: IFormsToFormsFormik = data;

  //   for (const category in data) {
  //     if (newData.hasOwnProperty(category)) {
  //       newData[category] = data[category].filter((item) => {
  //         return !Object.values(item).every((value) => value === '' || value === 1);
  //       });
  //     }
  //   }

  //   return newData;
  //   console.log(nextPageData, 'nextPageData');
  //   // navigate('/application/step2');
  // };
  return (
    <div className="contentWrapper">
      <Header type="application" text={'Ваша заявка'} />
      <p className="infoBlock">Пожалуйста, выберите все категории помощи, которая вам необходима</p>
      <div className="buttonsArea">
        {Object.keys(options).map((item: string) => (
          <HelpOptionButton
            iconName={item}
            key={item}
            onClick={handleData}
            activeOptions={activeForms}
          >
            {options[item]}
          </HelpOptionButton>
        ))}
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          // handleCoutinue(values);

          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            {activeForms.includes('food') && (
              // values.food.length>0?
              <FieldArray name="food">
                {({ remove, push }) => {
                  return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {values.food.length > 0 &&
                        values.food.map((_, index) => (
                          <FoodForm remove={remove} key={index} id={index} />
                        ))}
                      <Button
                        onClick={() => {
                          push({ name: '', count: 1, allergy: '', comment: '' });
                        }}
                      >
                        Добавить еще один запрос категории «Продукты»
                      </Button>
                    </div>
                  );
                }}
              </FieldArray>
              // :<FieldArray name="food">
              //   {({ remove, push }) => (
              //     <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              //       {values.food.length > 0 &&
              //         values.food.map((_, index) => (
              //           <FoodForm remove={remove} key={index} id={index} />
              //         ))}
              //       <Button
              //         onClick={() => {
              //           push({ name: '', count: 1, allergy: '', comment: '' });
              //         }}
              //       >
              //         Добавить еще один запрос категории «Продукты»
              //       </Button>
              //     </div>
              //   )}
              // </FieldArray>
            )}
            {activeForms.includes('cloth') && (
              <FieldArray name="cloth">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.cloth.length > 0 &&
                      values.cloth.map((_, index) => (
                        <ClothForm remove={remove} key={index} id={index} />
                      ))}
                    <Button
                      onClick={() => {
                        push({
                          typeOfCloth: '',
                          season: '',
                          personType: '',
                          sex: '',
                          size: '',
                          height: '',
                          count: 1,
                          allergy: '',
                          comment: '',
                        });
                      }}
                    >
                      Добавить еще один запрос категории «Одежда»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            {activeForms.includes('shoes') && (
              <FieldArray name="shoes">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.shoes.length > 0 &&
                      values.shoes.map((_, index) => (
                        <ShoesForm remove={remove} key={index} id={index} />
                      ))}
                    <Button
                      onClick={() => {
                        push({
                          typeOfShoes: '',
                          season: '',
                          personType: '',
                          sex: '',
                          size: '',
                          count: 1,
                          comment: '',
                        });
                      }}
                    >
                      Добавить еще один запрос категории «Обувь»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            {activeForms.includes('medEquipment') && (
              <FieldArray name="medEquipment">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.medEquipment.length > 0 &&
                      values.medEquipment.map((_, index) => (
                        <MedEquipmentForm
                          remove={remove}
                          key={index}
                          id={index}
                          type="medEquipment"
                        />
                      ))}
                    <Button
                      onClick={() => {
                        push({ what: '', personType: '', count: 1, comment: '' });
                      }}
                    >
                      Добавить еще один запрос категории «Медицинское оборудование»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            {activeForms.includes('medConsumables') && (
              <FieldArray name="medConsumables">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.medConsumables.length > 0 &&
                      values.medConsumables.map((_, index) => (
                        <MedEquipmentForm
                          remove={remove}
                          key={index}
                          id={index}
                          type="medConsumables"
                        />
                      ))}
                    <Button
                      onClick={() => {
                        push({ what: '', personType: '', count: 1, comment: '' });
                      }}
                    >
                      Добавить еще один запрос категории «Медицинские расходники»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            {activeForms.includes('pills') && (
              <FieldArray name="pills">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.pills.length > 0 &&
                      values.pills.map((_, index) => (
                        <PillsForm remove={remove} key={index} id={index} />
                      ))}
                    <Button
                      onClick={() => {
                        push({ pills: '', duration: '', comment: '' });
                      }}
                    >
                      Добавить еще один запрос категории «Лекарства»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            {activeForms.includes('hygiene') && (
              <FieldArray name="hygiene">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.hygiene.length > 0 &&
                      values.hygiene.map((_, index) => (
                        <HygieneHouseChemicalsForm
                          remove={remove}
                          key={index}
                          id={index}
                          example={''}
                          formType={'hygiene'}
                        />
                      ))}
                    <Button
                      onClick={() => {
                        push({ comment: '' });
                      }}
                    >
                      Добавить еще один запрос категории «Гигиена»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            {activeForms.includes('houseChemicals') && (
              <FieldArray name="houseChemicals">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.houseChemicals.length > 0 &&
                      values.houseChemicals.map((_, index) => (
                        <HygieneHouseChemicalsForm
                          remove={remove}
                          key={index}
                          id={index}
                          example={'Например, «стиральный порошок для детских вещей».'}
                          formType={'houseChemicals'}
                        />
                      ))}
                    <Button
                      onClick={() => {
                        push({ comment: '' });
                      }}
                    >
                      Добавить еще один запрос категории «Бытовая химия»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            {activeForms.includes('dishes') && (
              <FieldArray name="dishes">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.dishes.length > 0 &&
                      values.dishes.map((_, index) => (
                        <DishesForm remove={remove} key={index} id={index} />
                      ))}
                    <Button
                      onClick={() => {
                        push({ count: 1, comment: '' });
                      }}
                    >
                      Добавить еще один запрос категории «Посуда»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            {activeForms.includes('bed') && (
              <FieldArray name="bed">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.bed.length > 0 &&
                      values.bed.map((_, index) => (
                        <BedForm remove={remove} key={index} id={index} />
                      ))}
                    <Button
                      onClick={() => {
                        push({ name: '', personType: '', count: 1, comment: '' });
                      }}
                    >
                      Добавить еще один запрос категории «Постельные принадлежности»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            {activeForms.includes('school') && (
              <FieldArray name="school">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.school.length > 0 &&
                      values.school.map((_, index) => (
                        <SchoolForm remove={remove} key={index} id={index} />
                      ))}
                    <Button
                      onClick={() => {
                        push({ what: '', level: '', count: 1, comment: '' });
                      }}
                    >
                      Добавить еще один запрос категории «Школа»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            {activeForms.includes('anotherItems') && (
              <FieldArray name="anotherItems">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.anotherItems.length > 0 &&
                      values.anotherItems.map((_, index) => (
                        <HygieneHouseChemicalsForm
                          remove={remove}
                          key={index}
                          id={index}
                          example={'Например, «коляска для ребенка».'}
                          formType={'anotherItems'}
                        />
                      ))}
                    <Button
                      onClick={() => {
                        push({ comment: '' });
                      }}
                    >
                      Добавить еще один запрос категории «Гигиена»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            {activeForms.includes('documents') && (
              <FieldArray name="documents">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.documents.length > 0 &&
                      values.documents.map((_, index) => (
                        <DocumentsForm remove={remove} key={index} id={index} />
                      ))}
                    <Button
                      onClick={() => {
                        push({ what: '', comment: '' });
                      }}
                    >
                      Добавить еще один запрос категории «Гигиена»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            {activeForms.includes('psycologist') && (
              <FieldArray name="psycologist">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.psycologist.length > 0 &&
                      values.psycologist.map((_, index) => (
                        <PsycologistForm remove={remove} key={index} id={index} />
                      ))}
                    <Button
                      onClick={() => {
                        push({ what: '', comment: '' });
                      }}
                    >
                      Добавить еще один запрос категории «Гигиена»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            {activeForms.includes('legalAssistance') && (
              <FieldArray name="legalAssistance">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.legalAssistance.length > 0 &&
                      values.legalAssistance.map((_, index) => (
                        <LegalAssistanceForm
                          remove={remove}
                          key={index}
                          id={index}
                          formType={'legalAssistance'}
                          titleText={
                            'Укажите, в какой сфере Вам необходима юридическая консультация'
                          }
                        />
                      ))}
                    <Button
                      onClick={() => {
                        push({ comment: '' });
                      }}
                    >
                      Добавить еще один запрос категории «Гигиена»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            {activeForms.includes('other') && (
              <FieldArray name="other">
                {({ remove, push }) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {values.other.length > 0 &&
                      values.other.map((_, index) => (
                        <LegalAssistanceForm
                          remove={remove}
                          key={index}
                          id={index}
                          formType={'other'}
                          titleText={'Пожалуйста, вкратце опишите ситуацию.'}
                        />
                      ))}
                    <Button
                      onClick={() => {
                        push({ comment: '' });
                      }}
                    >
                      Добавить еще один запрос категории «Гигиена»
                    </Button>
                  </div>
                )}
              </FieldArray>
            )}
            <div className="linkArea">
              <Button
                variant="contained"
                className="submitButton"
                type="submit"
                sx={{
                  width: '100%',
                  textTransform: 'none',
                  backgroundColor: 'var(--colorMain)',
                  opacity: '0.6',
                  ':hover': {
                    backgroundColor: 'var(--colorMain)',
                    opacity: '1',
                  },
                }}
              >
                Продолжить
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <p className="footerInfo">
        Обработка персональных данных осуществляется{' '}
        <a href="https://pd.rkn.gov.ru/operators-registry/operators-list/?id=77-19-013355">
          сертифицированным оператором.
        </a>
      </p>
    </div>
  );
};

export default Application;
