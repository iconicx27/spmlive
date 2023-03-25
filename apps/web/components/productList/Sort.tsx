import React, { ChangeEvent, useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { BsFilterLeft, BsArrowDown } from "react-icons/bs";
import { radioBtnValue } from "../../mock/sortRadioInput";
import DropDown from "../../components/dropdown";
import { filters } from "../../mock/filters";
interface Props {
  selectedBtn: string;
  onChangeSelectedBtn: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Sort: React.FC<Props> = ({
  selectedBtn: selectedRadioBtn,
  onChangeSelectedBtn,
}) => {
  const [currentDropDown, setDropDown] = useState("");
  return (
    <div className="my-4 pb-2 flex sm:flex-row flex-col flex-wrap border-b-2 border-slate-300">
      <div className="flex items-center">
        <div className="flex items-center">
          {/* <BsFilterLeft style={{ fontSize: "1.5rem" }} />
          <BsArrowDown /> */}
          <p className="font-bold px-2">Filter by:</p>
        </div>
      </div>
      {Object.keys(filters).map((filter, index) => {
        return (
          <DropDown
            filterOption={filter}
            key={`id-${index}`}
            currentDropDown={currentDropDown}
            setDropDown={setDropDown}
          />
        );
      })}
      {/* <div className="flex flex-wrap items-center">
        {radioBtnValue.map((radioInput) => {
          return (
            <div key={radioInput} className="px-1 md:px-2 mx-2 my-1 sm:my-0">
              <label
                htmlFor={radioInput}
                className={`text-sm  cursor-pointer ${
                  radioInput === selectedRadioBtn
                    ? "text-palette-primary font-bold"
                    : "text-palette-mute/80 hover:text-palette-base transition-all"
                }`}
              >
                {t[radioInput]}
              </label>
              <input
                type="radio"
                className="hidden"
                id={radioInput}
                value={selectedRadioBtn}
                name="sortProduct"
                checked={isRadioSelected(radioInput)}
                onChange={onChangeSelectedBtn}
              />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Sort;
