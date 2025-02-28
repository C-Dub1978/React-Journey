
import { useState } from "react";
import { InputFieldNames, UserInputConfig } from "../util/inputConfig";
import Input from "./Input";

export default function AllInputs({
  allInputFieldsData,
  inputChangeCallback
}: {
  allInputFieldsData: UserInputConfig[],
  inputChangeCallback: Function
}): JSX.Element {
    console.log('On AllInputs.tsx!');
    function onInputChange(value: number, inputName: InputFieldNames): any {
        const index = allInputFieldsData.findIndex((value: UserInputConfig) => value.inputName === inputName);
        allInputFieldsData[index].currentValue = value;
        allInputFieldsData = [...allInputFieldsData];
        inputChangeCallback(allInputFieldsData);
    }

  return (
    <div id="user-input">
      <div className="input-group">
        {[allInputFieldsData[0], allInputFieldsData[1]].map((input: UserInputConfig, index: number) => (
          <Input inputData={input} onInputBlur={(val: number, name: InputFieldNames) => onInputChange(val, name)} key={`${input.label}-${index}`} />
        ))}
      </div>
      <div className="input-group">
        {[allInputFieldsData[2], allInputFieldsData[3]].map((input: UserInputConfig, index: number) => (
          <Input inputData={input} key={`${input.label}-${index}`} onInputBlur={(val: number, name: InputFieldNames) => onInputChange(val, name)} />
        ))}
      </div>
    </div>
  );
}
