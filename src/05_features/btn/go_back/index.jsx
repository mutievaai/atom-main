import { BtnIcon, SvgBack } from "../../../07_shared";

const GoBack = ({ navigation }) => {
  return <BtnIcon icon={<SvgBack />} onPress={() => navigation.goBack()} />;
};

export default GoBack;
