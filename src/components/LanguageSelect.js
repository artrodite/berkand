// LanguageSelect.jsx
import React from "react";
import Select from "react-select";

const languageOptions = [
  {
    value: "tr",
    data: {
      image: "/assets/flags/tr-flag.png",
      label: "Türkçe",
    },
  },
  {
    value: "en",
    data: {
      image: "/assets/flags/en-flag.png",
      label: "English",
    },
  },
  {
    value: "ru",
    data: {
      image: "/assets/flags/ru-flag.png",
      label: "Russian",
    },
  },
];

const formatOptionLabel = ({ data }) => (
  <div className="flex items-center h-6 overflow-hidden">
    <img src={data.image} className="w-6 mr-2" alt="" />
    <span>{data.label}</span>
  </div>
);

const LanguageSelect = ({ changeLanguage, lang }) => {
  return (
    <Select
      options={languageOptions}
      formatOptionLabel={formatOptionLabel}
      onChange={(option) => changeLanguage(option.value)}
      placeholder={lang}
      className="min-w-[112px]"
      styles={{
        placeholder: (provided) => ({ ...provided, color: "black" }),
      }}
    />
  );
};

export default LanguageSelect;
