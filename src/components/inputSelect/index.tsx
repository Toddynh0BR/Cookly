import styled from "styled-components/native";
import { Dropdown } from "react-native-element-dropdown";
import { View } from "react-native";
import { useTheme } from "../../hooks/themeProvider";

const InputContainer = styled.View`
  width: 100%;
  align-items: flex-start;
`;

const Label = styled.Text`
  font-family: "lexend-Bold";
  font-size: 16px;
  color: ${(props) => props.theme.text1};
  margin-bottom: 12px;
`;

const SelectInput = styled(Dropdown).attrs((props) => ({
  placeholderStyle: {
    color: props.theme.text1,
    fontSize: 14,
  },
  selectedTextStyle: {
    color: props.theme.text1,
    fontSize: 15,
  },
  itemTextStyle: {
    color: props.theme.text1,
  },
  containerStyle: {
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: props.theme.main
  },
}))`
  width: 100%;
  height: 45px;
  border-width: 1px;
  border-color: ${(props) => props.theme.main};
  border-radius: 45px;
  padding: 0 12px;

  font-family: "lexend-Regular";
  font-size: 14px;
  background-color: ${(props) => props.theme.background};
`;

interface InputSelectProps {
  label: string;
  bottom?: number;
  data: { label: string; value: string }[];
  value: string | null;
  onChange: (item: any) => void;
}

export function InputSelect({ label, bottom, data, value, onChange, ...rest }: InputSelectProps) {
  const { theme } = useTheme();

  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <SelectInput
        value={value}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Meu nível é:"
        theme={theme}
        onChange={onChange}
        {...rest}
      />
      {bottom && <View style={{ height: bottom }} />}
    </InputContainer>
  );
}
