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
import './helpOption.css';
type IconName = keyof typeof iconNameToIcon;

type IconNameToIcon = {
  [key: string]: React.ElementType;
};

type HelpOptionProps = {
  children: React.ReactNode;
  iconName: IconName;
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
const HelpOption: React.FC<HelpOptionProps> = ({ children, iconName }) => {
  const Icon = iconNameToIcon[iconName] || null;
  return (
    <div className="optionWrapper">
      {Icon && <Icon strokeWidth="1" style={{ fontSize: 18 }} />}

      <span className="optionText">{children}</span>
    </div>
  );
};

export default HelpOption;

// dont delete this comments, it helps with different but good icons
// {/* <FoodBank /> */}
// <Restaurant />

// {/* <RestaurantMenu /> */}
// <Checkroom />
// {/* <IceSkating /> */}
// <RollerSkating />
// <Accessible />
// <Vaccines />
// {/* <Medication /> */}
// {/* <Sanitizer /> */}
// {/* <AirlineSeatLegroomNormal /> */}
// <HealingOutlined />
// {/* <HealthAndSafetyOutlined /> */}
// {/* <LocalHospitalOutlined /> */}
// {/* <MedicalServicesRounded /> */}
// <CleanHands />
// {/* <Soap /> */}
// {/* <Wash /> */}
// {/* <BubbleChart /> */}
// {/* <GasMeter /> */}
// <LocalLaundryService />
// {/* <ScatterPlot /> */}
// {/* <Science /> */}
// {/* <CoffeeMaker /> */}
// <LocalCafe />
// {/* <FreeBreakfast /> */}
// {/* <SoupKitchen /> */}
// {/* <TakeoutDining /> */}
// {/* <AirlineSeatFlat /> */}
// {/* <AirlineSeatIndividualSuite /> */}
// <Bed />
// {/* <BedroomParent />
// <BedroomChild /> */}
// {/* <AutoStories /> */}
// <School />
// {/* <Cottage /> */}
// <Countertops />
// {/* <Gite />
// <Home />
// <House />
// <Warehouse /> */}
// {/* <Article /> */}
// <Assignment />
// {/* <Feed /> */}
// {/* <Flatware /> */}
// {/* <OtherHouses /> */}
// {/* <Chat /> */}
// {/* <Diversity1 /> */}
// <Diversity3 />
// {/* <Forum />
// <AccountBalance /> */}
// <Balance />
// {/* <Gavel />
// <MoreVert /> */}
// <MoreHoriz />
