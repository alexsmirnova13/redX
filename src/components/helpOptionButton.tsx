import {
  Checkroom,
  Restaurant,
  RollerSkating,
  Accessible,
  Vaccines,
  HealingOutlined,
  CleanHands,
  LocalLaundryService,
  LocalCafe,
  AirlineSeatIndividualSuite,
  School,
  Gite,
  Assignment,
  Diversity3,
  Balance,
  MoreHoriz,
} from '@mui/icons-material';
import './helpOptionButton.css';
type IconNameToIcon = {
  [key: string]: React.ElementType;
};
const iconNameToIcon: IconNameToIcon = {
  food: Restaurant,
  cloth: Checkroom,
  shoes: RollerSkating,
  medEquipment: Accessible,
  medConsumables: Vaccines,
  pills: HealingOutlined,
  hygiene: CleanHands,
  houseChemicals: LocalLaundryService,
  dishes: LocalCafe,
  bed: AirlineSeatIndividualSuite,
  school: School,
  anotherItems: Gite,
  documents: Assignment,
  psycologist: Diversity3,
  legalAssistance: Balance,
  other: MoreHoriz,
};
type HelpOptionButtonProps = {
  children: React.ReactNode;
  iconName: string;
  onClick: (iconName: string) => void;
  activeOptions: string[];
};
// type addType = keyof IFormsToForms;
const HelpOptionButton: React.FC<HelpOptionButtonProps> = ({
  children,
  iconName,
  onClick,
  activeOptions,
}) => {
  const Icon = iconNameToIcon[iconName] || null;
  return (
    <button
      onClick={() => onClick(iconName)}
      className={`buttonWrapper ${activeOptions.includes(iconName) ? 'redButton' : ''}`}
    >
      {Icon && <Icon className="svg" style={{ fontSize: 18 }} strokeWidth="1" />}
      <span className="optionText">{children}</span>
    </button>
  );
};

export default HelpOptionButton;
