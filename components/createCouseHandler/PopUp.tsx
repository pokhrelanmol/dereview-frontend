import React, { Dispatch, SetStateAction, useState } from "react";
import HandleModalToShow from "./HandleModalToShow";
type PopUpPropsTypes = {
  setShowPopUp: Dispatch<SetStateAction<boolean>>;
};
export const PopUp = ({ setShowPopUp }: PopUpPropsTypes) => {
  const [selectedRadioButtonOnChange, setSelectedRadioButtonOnChange] =
    useState("");
  const [selectedRadioButtonOnSubmit, setSelectedRadioButtonOnSubmit] =
    useState("");
  const handleRadioButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioButtonOnChange(e.target.id);
  };
  const handleSubmitButtonClick = () => {
    setSelectedRadioButtonOnSubmit(selectedRadioButtonOnChange);
    setShowPopUp(false);
  };
  return (
    <div className="bg-gray-200 w-80 h-42 p-5 absolute right-10 z-100  shadow-lg">
      <span
        onClick={() => setShowPopUp(false)}
        className="float-right relative bottom-5 left-3  cursor-pointer"
      >
        x
      </span>
      <p className="mb-5">Do You have a smart contract?</p>
      <span className="mr-2">Yes</span>
      <input
        onChange={(e) => handleRadioButtonChange(e)}
        type="radio"
        name="havecontract"
        className="mr-7"
        id="yes"
      />
      <span className="mr-2">No</span>
      <input
        onChange={(e) => handleRadioButtonChange(e)}
        type="radio"
        name="havecontract"
        id="no"
      />
      <br />
      <button
        onClick={() => {
          handleSubmitButtonClick();
        }}
        className="float-right text-blue-600 border  "
      >
        Submit
      </button>
      <HandleModalToShow selectedRadioButton={selectedRadioButtonOnSubmit} />
    </div>
  );
};
