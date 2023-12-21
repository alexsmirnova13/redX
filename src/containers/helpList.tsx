import { IOptions } from 'interfaces/interface';
import HelpOption from '../components/helpOption';
import './containers.css';

const HelpList = () => {
  const necessary: IOptions = { food: 'Продукты', cloth: 'Одежда', shoes: 'Обувь' };
  const medical: IOptions = {
    medEquipment: 'Медицинское оборудование',
    medConsumables: 'Медицинские расходники',
    pills: 'Лекарства',
  };
  const household: IOptions = {
    hygiene: 'Гигиена',
    houseChemicals: 'Бытовая химия',
    dishes: 'Посуда',
    bed: 'Постельные принадлежности',
    school: 'Школа',
    anotherItems: 'Иные предметы быта',
  };
  const other: IOptions = {
    documents: 'Помощь с документами',
    psycologist: 'Помощь психолога',
    legalAssistance: 'Юридическая помощь',
    other: 'Другое',
  };
  return (
    <div className="listAreaWrapper">
      <h2 className="bigTitle">С чем мы можем вам помочь?</h2>
      <div className="options">
        <h3 className="smallTitle">Самое необходимое</h3>
        <div className="optionsArea">
          {Object.keys(necessary).map((item) => (
            <HelpOption iconName={item} key={item}>
              {necessary[item]}
            </HelpOption>
          ))}
        </div>
      </div>
      <div>
        <h3 className="smallTitle">Медицина</h3>
        <div className="optionsArea">
          {Object.keys(medical).map((item) => (
            <HelpOption iconName={item} key={item}>
              {medical[item]}
            </HelpOption>
          ))}
        </div>
      </div>
      <div>
        <h3 className="smallTitle">Предметы быта</h3>
        <div className="optionsArea">
          {Object.keys(household).map((item) => (
            <HelpOption iconName={item} key={item}>
              {household[item]}
            </HelpOption>
          ))}
        </div>
      </div>
      <div>
        <h3 className="smallTitle">Прочее</h3>
        <div className="optionsArea">
          {Object.keys(other).map((item) => (
            <HelpOption iconName={item} key={item}>
              {other[item]}
            </HelpOption>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpList;
