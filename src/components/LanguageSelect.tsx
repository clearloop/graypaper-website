import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const changeLanguage = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      i18n.changeLanguage(event.target.value);
    },
    []
  );

  return (
    <div className="relative">
      <select
        aria-label="Language Select"
        className="appearance-none bg-transparent w-9"
        onChange={changeLanguage}
        value={i18n.language}
      >
        <option value={"en"}>EN</option>
        <option value={"es"}>ES</option>
        <option value={"jp"}>日本語</option>
        <option value={"cn"}>中文</option>
      </select>
      <div className="absolute pointer-events-none right-0 top-0">↓</div>
    </div>
  );
};
