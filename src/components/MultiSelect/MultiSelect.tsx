import React, { useState } from "react";
import {
  MultiSelectContainer,
  MultiSelectButton,
  MultiSelectList,
  MultiSelectListItem,
  MultiSelectCheckbox,
  MultiSelectLabel,
  MultiSelectClearButton,
} from "./MultiSelect.styled";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  onChange: (selectedOptions: string) => void;
}

const MultiSelect: React.FC<Props> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option: Option) => {
    if (selectedOptions.length > 2) {
      return alert("Solo puedes seleccionar 3 opciones")
    }

    const includesOption = selectedOptions.includes(option);
    const selected = includesOption
      ? selectedOptions.filter((o) => o !== option)
      : [...selectedOptions, option];

    const codeOnly = selected.map((o) => o.value);

    setSelectedOptions(selected);
    onChange(codeOnly.join(","));
  };

  const handleClearOptions = () => {
    setSelectedOptions([]);
    onChange([].join(","));
  };

  const selectedValuesText = selectedOptions
    .map((option) => option.label)
    .join(", ");

  return (
    <MultiSelectContainer>
      <MultiSelectButton type="button" label="Toggle" onClick={toggleIsOpen}>
        {selectedOptions.length > 0 ? selectedValuesText : "Select an option"}
      </MultiSelectButton>
      {isOpen && (
        <MultiSelectList>
          {selectedOptions.length > 0 && (
            <MultiSelectClearButton type="button" onClick={handleClearOptions}>
              Clear selected options
            </MultiSelectClearButton>
          )}
          {options.map((option) => (
            <MultiSelectListItem key={option.value}>
              <MultiSelectCheckbox
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <MultiSelectLabel>{option.label}</MultiSelectLabel>
            </MultiSelectListItem>
          ))}
        </MultiSelectList>
      )}
    </MultiSelectContainer>
  );
};

export default MultiSelect;
